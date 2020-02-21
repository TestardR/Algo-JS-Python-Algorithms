import pprint

""" def steps(n):

    for row in range(0, n):
        stair = ''
        for column in range(0, n):
            if column <= row:
                stair += '#'
            else:
                stair += ' '
        pprint.pprint(stair)
 """


# Quadratic Time Complexity, O(n^2) as we used two nested loops
# Linear Space Complexity,  O(n) as we create n variables storing n values 

def steps(n, row = 0, stair = ''):
    if n == row:
         return

    if n == len(stair):
        pprint.pprint(stair)
        steps(n, row + 1)
        return

    if len(stair) <= row:
        add = '#'
    else:
        add = ' '

    steps(n, row, stair + add)

steps(5)

# Constant Time Complexity
# Linear Space Complexity, O(n) as we create n variable storing n values 