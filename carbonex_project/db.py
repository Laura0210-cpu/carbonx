from pymongo import MongoClient
uri = "mongodb+srv://LauraD:%40Paris2Houston@carbonx.bs67w.mongodb.net/?retryWrites=true&w=majority&appName=CarbonX"

# Create a new client and connect to the server

client = MongoClient(uri)

# Test connection
try:
    client.admin.command('ping')
    print("✅ Successfully connected to MongoDB!")
except Exception as e:
    print("❌ Connection failed:", e)
