# File: code/database.py

import sqlite3

class Database:
    def __init__(self, db_name="events.db"):
        self.connection = sqlite3.connect(db_name)
        self.create_table()

    def create_table(self):
        with self.connection:
            self.connection.execute("""
                CREATE TABLE IF NOT EXISTS events (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    url TEXT NOT NULL,
                    data TEXT NOT NULL,
                    response TEXT,
                    status_code INTEGER,
                    error TEXT,
                    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            """)

    def insert_event(self, url, data, response, status_code, error):
        with self.connection:
            self.connection.execute("""
                INSERT INTO events (url, data, response, status_code, error)
                VALUES (?, ?, ?, ?, ?)
            """, (url, data, response, status_code, error))

    def close(self):
        self.connection.close()