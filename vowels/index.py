from pprint import pprint
import re

""" def vowels(str):
    counter = 0
    vowels = ['a', 'e', 'i', 'o', 'u']
    for char in str.lower():
        if char in vowels:
            counter += 1

    return counter
 """
 
def vowels(str):
    matches = re.findall("[aeiou]", str, re.IGNORECASE)
    return len(matches)


print (vowels('Hello Banana'))