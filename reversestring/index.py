def reverse1(str):

    acc = ''

    for letter in str:
        acc = letter + acc

    return acc

reverse1('hello')

# Linear time complexity O(n) due to the loop, might be Log Linear time complexity (O n log(n)) as we sort 
# Linear space complexity O(n) as we store n values in a variable

def reverse2(str):

    return ''.join(reversed(str))

print(reverse2('hello'))