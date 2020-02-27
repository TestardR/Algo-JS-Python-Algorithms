from pprint import pprint

class Stack:
    def __init__(self):
        self.data = []

    def push(self, record):
        return self.data.append(record)

    def pop(self):
        return self.data.pop()

    def peek(self):
        if len(self.data) > 0:
            return self.data[len(self.data) - 1]


s = Stack()
s.push('hello')
s.push('world')
pprint(s.peek())
pprint(s.pop())
