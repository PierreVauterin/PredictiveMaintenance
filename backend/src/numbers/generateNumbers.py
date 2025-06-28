import random

#Temp function while waiting for data models to generate numbers
def generateNumbers(amount):
    return [random.randint(1, 100) for i in range(amount)]