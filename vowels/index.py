from pprint import pprint

def vowels(str):
    counter = 0
    vowels = ['a', 'e', 'i', 'o', 'u']
    for char in str.lower():
        if char in vowels:
            counter += 1

    return counter


vowels('Hello Banana')