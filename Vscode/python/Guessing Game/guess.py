# Guessing game
from random import randint
seceret_number = randint(1, 10)
converted_random_number = str(seceret_number)
guess = ""
guess_count = 0
guess_limit = 5
out_of_guesses = False

while guess != converted_random_number and not(out_of_guesses):
    if guess_count < guess_limit:
        guess = input("Pick a number between 1-10 ")
        guess_count += 1
    else: 
        out_of_guesses = True
if out_of_guesses:
    print("You Loose")
    print(converted_random_number)
else:
    print("You win!")
