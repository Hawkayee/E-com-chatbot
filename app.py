from flask import Flask, render_template, jsonify, request
from dotenv import load_dotenv
import os
from ecombot.retrival_generation import generation
from ecombot.ingest import ingestdata

app = Flask(__name__)

load_dotenv()

# Initialize vstore and chain within the application context
vstore = None
chain = None

@app.route("/")
def index():
    # Initialize vstore and chain *before* rendering the template
    global vstore, chain
    if vstore is None or chain is None:
        vstore = ingestdata("done")
        chain = generation(vstore)
    return render_template('chatbot.html')

@app.route("/get", methods=["GET", "POST"])
def chat():
    msg = request.form["msg"]
    input_text = msg  # Use a more descriptive variable name
    try:
        result = chain.invoke(input_text)
        print("Response : ", result)
        return str(result)
    except Exception as e:
        print(f"Error during chain invocation: {e}")  # Log the error
        return "Sorry, I encountered an error processing your request." # Inform the user

if __name__ == '__main__':
    app.run(host="0.0.0.0")
