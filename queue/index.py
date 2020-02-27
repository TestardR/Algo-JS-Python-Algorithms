from pprint import pprint

class Queue:
    def __init__(self):
        self.data = []

    def add(self, record):
        self.data.insert(0, record)
        return self.data

    def remove(self):
        self.data.pop()
        return 1

q = Queue()
q.add(1)
q.add(2)
q.remove()