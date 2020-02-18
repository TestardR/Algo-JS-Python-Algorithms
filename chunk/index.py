import pprint

def chunk(array, size):

    chunked = []
   
    for element in array: 
        last = False 
        if len(chunked) > 0:
            last = chunked[len(chunked) - 1]

        if last == False or len(last) == size: 
            chunked.append([element])
        else:
            last.append(element)
    
    return chunked


pprint.pprint(chunk([1,2,3,4,5], 2))

# Linear Time Complexity O(n), we look and push values
# Linear Space Complexity O(n), we create a variable of n values