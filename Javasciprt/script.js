// Konsol 

// Log
// Konsole veri gönderilmisini sağlar
console.log("Merhaba Dünya");

// Warn
// Konsola uyarı mesajı verilmesini sağlar

console.warn("Uyarı Mesajı");

// Error
// Konsola hata mesajı verilmesini sağlar
console.error("Hata Mesajı");

// Değişkenler

var isim = "Ahmet";
console.log(isim);

isim = "Mehmet";
console.log(isim);

isim = "Taha";
console.log(isim);

// Değişken Tanımlama Kuralları

// 1. Değişken isimleri numara ile başlayamaz.

var a1321441321321 = "Ahmet";

// 2. Değişken isimleri boşluk içeremez.

var name = "Taha";
var surname = "Resul";

var isimSoyisim = "Ahmet";

// 3. Değişken isimleri önceden tanımlanmış ifadeler olamazlar

var var1 = "Ahmet";

// Değişkenlere örnek

// var firstname = window.prompt("Lütfen isminizi giriniz");
// console.log("Merhaba " + firstname);


// Değişken türleri

// Basit Türler (Primitive)

// 1. String(Yazı)
var stringörnek = "Merhaba 11 Ayın Sultanı";
console.log(stringörnek);
console.log(typeof stringörnek)

// 2. Number(Sayı)
var sayi = 12;
console.log(sayi);
console.log(typeof sayi);
// Number Tanımlarken tırnak kullanılırsa string olmuş olur
var sayi2 = "12";
console.log(sayi2);
console.log(typeof sayi2);

// 3. Boolean(Mantıksal/Doğru Yanlış)
var durum = false;
console.log(durum);
console.log(typeof durum);

// 4. Undefined(Tanımsız)
var deger;
console.log(deger);
console.log(typeof deger);

// 5. Null(Boş)
var bos = null;
console.log(bos);
console.log(typeof bos);

// Tür Farkları Neden Önemli
var deger1 = 10;
var deger2 = 17;
console.log("Sepetin Toplam Değeri " + (deger1 + deger2));



// Karmaşık Türler (Reference/Complex)

