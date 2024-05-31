import os
import requests
from flask import Flask, request
from dotenv import load_dotenv
load_dotenv(dotenv_path="./.env.local")
print(os.environ.get("UNSPLASH_KEY", 'TEST'))
DEBUG = bool(os.environ.get("DEBUG", True))
from flask_cors import CORS

UNSLPASH_URL="https://api.unsplash.com/photos/random"
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY", '')

if not UNSPLASH_KEY: 
    raise EnvironmentError("No Unsplash key in .env.local")

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = DEBUG

@app.route("/new-image")
def new_image():
    searchTerm = request.args.get("query")
    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY
    }
    params = {"query": searchTerm}
    response = requests.get(UNSLPASH_URL, params=params, headers=headers)
    data = response.json()
    # print(data)
    return data

if __name__ == "__main__":
    app.run("0.0.0.0", 5050)