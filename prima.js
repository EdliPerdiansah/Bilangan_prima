function hitungBilanganPrima(awal, akhir) {
    let jumlahPrima = 0;
  
    for (let i = awal; i <= akhir; i++) {
      if (isPrime(i)) {
        jumlahPrima += i;
      }
    }
  
    return jumlahPrima;
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  const inputAwal = 1;
  const inputAkhir = 12;
  const hasil = hitungBilanganPrima(inputAwal, inputAkhir);
  console.log(`Jumlah bilangan prima dari ${inputAwal} sampai ${inputAkhir} adalah: ${hasil}`);