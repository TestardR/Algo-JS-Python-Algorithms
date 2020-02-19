""" 
 --- Directions
  Check to see if two provided strings are anagrams of eachother.
  One string is an anagram of another if it uses the same characters
  in the same quantity. Only consider characters, not spaces
  or punctuation.  Consider capital letters to be the same as lower case
  --- Examples
   anagrams('rail safety', 'fairy tales') --> True
   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
   anagrams('Hi there', 'Bye there') --> False
 """
import pprint

""" def anagrams(stringA, stringB):
    def formatStr(str):
        formatedArray = list(str.replace(' ', '').lower())
        formatedArray.sort()
        sortedString = ''.join(formatedArray)
        return sortedString

    sortedStringA = formatStr(stringA)
    sortedStringB = formatStr(stringB)

    if sortedStringA == sortedStringB:
        return True
    
    return False

pprint.pprint(anagrams('Hello ', 'elloh')) """

# Log Linear Time Complexity, O(n log(n)), as we loop and sort
# Linear Space Complexity, O(n) as we create 2 variables and store n values

def anagrams(stringA, stringB):

    def handleDict(str):
        dictStr = {}
        for char in str.lower().replace(' ', ''):
            if dictStr.get(char):
                dictStr[char] += 1
            else: 
                dictStr[char] = 1
    
        return dictStr

    dictStrA = handleDict(stringA)
    dictStrB = handleDict(stringB)
    
    if dictStrA != dictStrB:
        return False

    return True
    

# Linear Time Complexity, O(n), as we loop
# Linear Space Complexity, O(n), as we create 2 variables and store n values

pprint.pprint(anagrams('bibal ', 'babil'))