import google.generativeai as genai
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough, RunnableLambda
from ecombot.ingest import ingestdata
import os
from dotenv import load_dotenv

# Load API key from .env
load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=api_key)

def generation(vstore):
    retriever = vstore.as_retriever(search_kwargs={"k": 3})

    PRODUCT_BOT_TEMPLATE = """
    Your ecommerce bot is an expert in product recommendations and customer queries.
    It analyzes product titles and reviews to provide accurate and helpful responses.
    Ensure your answers are relevant to the product context and refrain from straying off-topic.
    Your responses should be concise and informative.

    CONTEXT:
    {context}

    QUESTION: {question}

    YOUR ANSWER:
    """

    prompt = ChatPromptTemplate.from_template(PRODUCT_BOT_TEMPLATE)
    
    # ✅ Use a valid model name
    model = genai.GenerativeModel("gemini-1.5-pro-latest")  

    def generate_text(input_data):
        """Generate response using the Gemini model."""
        if isinstance(input_data, dict):
            question = input_data.get("question", "")
        else:
            question = str(input_data)  # Convert to string if it's not a dict

        response = model.generate_content(question)  # Call Gemini model

        # ✅ Ensure response is properly handled
        return response.text if hasattr(response, 'text') else str(response)

    # ✅ Proper chain construction using RunnableLambda
    chain = (
        {"context": retriever, "question": RunnablePassthrough()}
        | prompt
        | RunnableLambda(generate_text)  # Wrap the function properly
        | StrOutputParser()
    )

    return chain

if __name__ == '__main__':
    vstore = ingestdata("done")
    chain = generation(vstore)
    response = chain.invoke("Can you tell me the best Mobile?")
    print(response)
