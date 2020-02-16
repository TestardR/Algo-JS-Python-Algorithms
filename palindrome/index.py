def palindrome(str):

    reversedStr = ''.join(reversed(str))

    if str == reversedStr:
        return True


    return False


