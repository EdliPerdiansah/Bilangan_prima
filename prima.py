def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def next_prime(start):
    num = start + 1  
    while True:
        if is_prime(num):
            return num
        num += 1

input_number = int(input("Masukkan bilangan: "))
output_prime = next_prime(input_number)

print(f"Bilangan prima setelah {input_number} adalah {output_prime}.")