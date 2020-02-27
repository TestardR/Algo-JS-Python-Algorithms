from pprint import pprint


class Queue:
    def __init__(self):
        self.data = []

    def add(self, record):
        self.data.insert(0, record)
        return self.data

    def remove(self):
        return self.data.pop()

    def peek(self):
        if len(self.data) > 0:
            return self.data[len(self.data) - 1]
        else: 
            return None

