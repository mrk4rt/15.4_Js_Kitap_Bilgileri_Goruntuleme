const kitaplar = [
    {
      başlık: "Sefiller",
      yazar: "Victor Hugo",
      yıl: 1862
    },
    {
      başlık: "Suç ve Ceza",
      yazar: "Fyodor Dostoyevski",
      yıl: 1866
    },
    {
      başlık: "Yüzüklerin Efendisi",
      yazar: "J.R.R. Tolkien",
      yıl: 1954
    },
    {
      başlık: "1984",
      yazar: "George Orwell",
      yıl: 1949
    },
    {
      başlık: "Don Kişot",
      yazar: "Miguel de Cervantes",
      yıl: 1605
    }
  ];
  
  for (let kitap of kitaplar) {
    for (let özellik in kitap) {
      console.log(`${özellik}: ${kitap[özellik]}`);
    }
    console.log('---');
  }
  
