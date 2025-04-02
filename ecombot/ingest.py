from langchain_astradb import AstraDBVectorStore
from langchain_google_genai import GoogleGenerativeAIEmbeddings  # Change here
from dotenv import load_dotenv
import os
import pandas as pd
from ecombot.data_converter import dataconveter

# Load environment variables
load_dotenv()

# Replace OpenAI API key with Gemini API key
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")  

ASTRA_DB_API_ENDPOINT = os.getenv("ASTRA_DB_API_ENDPOINT")
ASTRA_DB_APPLICATION_TOKEN = os.getenv("ASTRA_DB_APPLICATION_TOKEN")
ASTRA_DB_KEYSPACE = os.getenv("ASTRA_DB_KEYSPACE")

# Use Gemini Embeddings instead of OpenAI
embedding = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=GOOGLE_API_KEY) 

def ingestdata(status):
    vstore = AstraDBVectorStore(
            embedding=embedding,
            collection_name="chatbot_Ecom",
            api_endpoint=ASTRA_DB_API_ENDPOINT,
            token=ASTRA_DB_APPLICATION_TOKEN,
            namespace=ASTRA_DB_KEYSPACE,
        )
    
    storage = status
    
    if storage is None:
        docs = dataconveter()
        inserted_ids = vstore.add_documents(docs)
    else:
        return vstore
    return vstore, inserted_ids

if __name__ == '__main__':
    vstore, inserted_ids = ingestdata(None)
    print(f"\nInserted {len(inserted_ids)} documents.")

    queries = [
        "can you tell me the low budget Mobile?",
        "What is the best camera phone under 30K?",
        "Which phone has the best battery life?",
        "Suggest a phone for gaming under 20K.",
        "Tell me the best phone with 5G support."
    ]

    # Perform similarity search for each query
    for query in queries:
        print(f"\n🔍 Searching for: {query}")
        results = vstore.similarity_search(query)
        
        # Display top results
        for idx, res in enumerate(results, start=1):
            print(f"{idx}. {res.page_content} [{res.metadata}]")

