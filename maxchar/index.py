str = 'hello world'


def maxChar(str):
    dictStr = {}
    for char in str.replace(' ', ''):
        if dictStr.get(char):
            dictStr[char] += 1
        else:
            dictStr[char] = 1

    maxChar = ''
    maxCount = 0

    for char in dictStr:
        if maxCount < dictStr[char]:
            maxChar = char
            maxCount = dictStr[char]

    pprint([maxChar, maxCount])


maxChar(str)
