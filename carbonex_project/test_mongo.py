from pymongo import MongoClient
MONGO_URI = "mongodb+srv://LauraD:%40Paris2Houston@carbonx.bs67w.mongodb.net/?retryWrites=true&w=majority&appName=CarbonX"
client = MongoClient(MONGO_URI)
try:
	client.admin.command("ping")
	print("✅ Successfully connected to MongoDB!")
except Exception as e:
	print(f"❌ Connection failed: {e}")

