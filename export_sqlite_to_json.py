import sqlite3
import json

# Connect to SQLite
conn = sqlite3.connect("db.sqlite3")  
cursor = conn.cursor()

# Get all tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = [table[0] for table in cursor.fetchall()]

# Export each table to a JSON file
for table in tables:
    cursor.execute(f"SELECT * FROM {table}")
    columns = [desc[0] for desc in cursor.description]
    data = [dict(zip(columns, row)) for row in cursor.fetchall()]

    # Save to JSON
    with open(f"{table}.json", "w") as f:
        json.dump(data, f, indent=4)

    print(f"✅ Exported {table}.json")

# Close connection
conn.close()
