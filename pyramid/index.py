from pprint import pprint
from math import floor

# def pyramid(n):
#     midpoint = floor((n * 2 - 1) / 2)
#     for row in range(0, n):
#         stair= ''
#         for column in range(0, (n * 2 - 1)):
#             if (midpoint - row <= column) & (midpoint + row >= column):
#                 stair += '#'
#             else: 
#                 stair += ' '
#         pprint(stair)


def pyramid(n, row = 0, stair = ''):
    midpoint = floor((n * 2 - 1) / 2)
    if n == row:
        return
    
    if (n * 2 - 1) == len(stair):
        pprint(stair)
        pyramid(n, row + 1)
        return

    
    if (midpoint + row >= len(stair)) & (midpoint - row <= len(stair)):
        add = '#'
    else:
        add = ' '

    pyramid(n, row, stair + add)

pyramid(5)
