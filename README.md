# Kitap Bilgileri Görüntüleme Uygulaması

## Proje Amacı
Bu proje, bir kitaplık uygulamasında yer alan kitapların başlık, yazar ve yayın yılı bilgilerini görüntülemeyi amaçlar. Her kitap, bir nesne olarak tanımlanır ve for...in döngüsü ile her kitabın özellikleri ekrana yazdırılır. Bu proje, JavaScript nesneleri ve döngü yapısını kullanarak temel bir listeleme uygulaması geliştirmeyi sağlar.

## Değişkenler
- **kitaplar**: Kitapların bilgilerini tutan dizi. Her kitap bir nesne olarak tanımlanır.
- **kitap**: Dizi içerisinde her bir kitap nesnesini tutar.
- **özellik**: Kitap nesnelerinin her bir özelliğine (başlık, yazar, yıl) erişmek için kullanılacak geçici değişken.

## Anahtar Kelimeler
- **for...in**: Nesneler üzerinde döngü oluşturur.
- **console.log()**: Ekrana yazdırma işlemi için kullanılır.
- **let**: Değişken tanımlamak için kullanılan anahtar kelime.
- **const**: Sabit değeri olan değişkenler için kullanılır.

# Proje Adımları

### 1. Kitap Nesnelerini Tanımlama
- Bir dizi oluşturun ve her bir kitap nesnesini bu dizinin elemanı olarak tanımlayın. Her kitap nesnesi, başlık, yazar ve yayın yılı gibi bilgilere sahip olmalıdır.

### 2. for...in Döngüsü Kullanımı
- Kitaplar dizisinde her bir kitabı dolaşmak için `for...in` döngüsü kullanın.
- Döngüde her kitap nesnesinin özelliklerine (başlık, yazar, yıl) erişin.
- Bu özellikleri ekrana yazdırmak için `console.log()` fonksiyonunu kullanın.

### 3. Ekranda Kitap Bilgilerini Görüntüleme
- Her kitap için, başlık, yazar ve yıl bilgilerini konsola yazdırın.

### 4. Sonuçları Kontrol Etme
- Kodunuzu çalıştırın ve her bir kitabın bilgilerini doğru şekilde yazdırıp yazdırmadığınızı kontrol edin.

## Örnek İçerik
```javascript
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
