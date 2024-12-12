import random
fruits = ["Apple", "Mango", "Banana", "Pear"]
guess_limit = 4
user_guess = str(input("Guess a word: "))
for user_guess in fruits and user_guess != guess_limit:
    if user_guess != fruits:
        print("your bad")

    guess_again = str(input("Guess again: "))
print(random.choice(fruits))
