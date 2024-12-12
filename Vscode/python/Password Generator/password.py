import random
import string

length = int(input("How long do you want your password?: "))
number_of_passwordss = int(input("How many passwords do you want?: "))

characters = string.hexdigits
symbols = string.punctuation

for x in range(number_of_passwordss):
    pasword = []
    for i in range(length):
        randomchar = random.choice(characters + symbols)
        pasword.append(randomchar)
    print("".join(pasword))
    
    
    
