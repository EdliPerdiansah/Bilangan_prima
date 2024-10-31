def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def sum_of_primes(start, end):
    prime_numbers = []
    for num in range(start, end + 1):
        if is_prime(num):
            prime_numbers.append(num)
    
    total_sum = sum(prime_numbers)
    return prime_numbers, total_sum

input_awal = int(input("Masukkan input awal: "))
input_akhir = int(input("Masukkan input akhir: "))

bilangan_prima, total = sum_of_primes(input_awal, input_akhir)

if bilangan_prima:
    print(f"Bilangan prima antara {input_awal} dan {input_akhir} adalah: {', '.join(map(str, bilangan_prima))}")
    print(f"Jumlah bilangan prima: {total}")
else:
    print(f"Tidak ada bilangan prima antara {input_awal} dan {input_akhir}.")