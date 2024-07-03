const regex = /hello/i; // Case-insensitive atau huruf besar/kecil sama aja
console.log(regex.test("Hello")); // true
console.log(regex.test("hello")); // true
console.log(regex.test("HELLO")); // true

const regex1 = /world/g; // Global itu buat dapatin di semuanya. kan sebelum" nya ketik sudah dapat satu berhenti
const text = "Hello world, beautiful world!";
const matches = text.match(regex1);
console.log(matches); // ['world', 'world'] (menemukan 2 kecocokan)

const regex2 = /^hello/gim; // Global, incase sensitive dan multiline
// tanda "^" sebelum "hello" itu menandakan dia hanya ingin dicari diawal tulisan (pada satu baris)
const text1 = "hello\nworld\nHELLO";
const matches1 = text1.match(regex2);
console.log(matches1); // ['hello', 'HELLO'] (menemukan 2 kecocokan di awal baris)

/* 
  - g (global): Mencari semua kecocokan, bukan hanya yang pertama.
  - i (case-insensitive): Pencarian tidak sensitif terhadap huruf besar/kecil.
  - m (multiline): Mengaktifkan mode multiline, sehingga ^ dan $ cocok dengan awal dan akhir 
    setiap baris, bukan hanya awal dan akhir seluruh teks.
*/

/* 
Assersions : indikasi awal dan akhir teks 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions 

Character Classes : membedakan antara huruf dan angka 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes 

Group dan Range : melakukan grouping atau range huruf atau angka 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges 

Quantifiers : menentukan jumlah huruf atau angka 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers  
*/
