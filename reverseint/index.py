import pprint

def reverse(n):

    if str(n).startswith("-"):
        n = str(n)[1:]
        # int('-' + str(n)[::-1])
        return int("-{}".format(str(n)[::-1]))
    else: 
        return int(str(n)[::-1])
  

pprint.pprint(reverse(-120))

""" Log Linear Time complexity, O(n log(n)) as we loop and sort values """
""" Linear Space complexity, O(n) as we set a variable and set it n values """