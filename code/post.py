# File: code/post_request.py

import requests
from database import Database

class PostRequest:
    def __init__(self, url, data):
        self.url = url
        self.data = data
        self.db = Database()

    def send_request(self):
        try:
            response = requests.post(self.url, json=self.data)
            response.raise_for_status()
            self.db.insert_event(self.url, str(self.data), response.text, response.status_code, None)
            return response.json()
        except requests.exceptions.RequestException as e:
            self.db.insert_event(self.url, str(self.data), None, None, str(e))
            print(f"An error occurred: {e}")
            return None
        finally:
            self.db.close()