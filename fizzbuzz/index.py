import pprint


def fizzBuzz(n):

    for i in range(1, n):
        if i % 3 == 0 and i % 5 == 0:
            pprint.pprint('fizzbuzz')
        elif i % 5 == 0:
            pprint.pprint('buzz')
        elif i % 3 == 0:
            pprint.pprint('fizz')
        else:
            pprint.pprint(i)


fizzBuzz(10)

# Linear Time Complexity O(n), we loop through n
# Constant Space Complexity O(1)