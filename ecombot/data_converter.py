import os
from langchain_core.documents import Document
import pandas as pd

def dataconveter():
    # Reading the product data from the CSV file
    product_data = pd.read_csv("../data/flipkart.csv")

    # Selecting specific columns for processing
    data = product_data[["Brand", "Model", "Rating", "Price", "summary"]]
    
    # Handle NaN values by replacing them with default values
    data['Rating'] = data['Rating'].fillna(0)  # Replace NaN ratings with 0
    data['Price'] = data['Price'].fillna(0)    # Replace NaN prices with 0
    data['summary'] = data['summary'].fillna("No description available")  # Replace NaN summaries with a default string
    
    # Create a list to hold all product objects
    product_list = []
    
    # Iterate over the rows of the DataFrame
    for index, row in data.iterrows():
        # Construct an object with 'Brand_Name', 'Model_Name', 'Rating_', 'Price', and 'Review'
        obj = {
            'Brand_Name': row['Brand'],
            'Model_Name': row['Model'],
            'Rating_': row['Rating'],
            'Price': row['Price'],
            'Review': row['summary']
        }
        # Append the object to the list
        product_list.append(obj)
    
    # Create the documents for each entry
    docs = []
    for entry in product_list:
        metadata = {
            "Brand_Name": entry['Brand_Name'],
            "Model_Name": entry['Model_Name'],
            "Rating_": entry['Rating_'],
            "Price": entry['Price']
        }
        # Create a Document object with content and metadata
        doc = Document(page_content=entry['Review'], metadata=metadata)
        docs.append(doc)

    # Return the list of documents
    return docs
