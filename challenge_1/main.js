import readline from 'readline';
import { hitungLuasPersegi } from './modules/persegi.js';
import { hitungLuasLingkaran } from './modules/lingkaran.js';
import { hitungLuasSegitiga } from './modules/segitiga.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function getInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => resolve(parseFloat(input)));
  });
}


async function main() {
  console.log("=== Menghitung Luas Persegi ===");
  const panjang = await getInput("Masukkan panjang persegi: ");
  const lebar = await getInput("Masukkan lebar persegi: ");
  hitungLuasPersegi(panjang, lebar);

  console.log("\n=== Menghitung Luas Lingkaran ===");
  const jariJari = await getInput("Masukkan jari-jari lingkaran: ");
  hitungLuasLingkaran(jariJari);

  console.log("\n=== Menghitung Luas Segitiga ===");
  const alas = await getInput("Masukkan alas segitiga: ");
  const tinggi = await getInput("Masukkan tinggi segitiga: ");
  hitungLuasSegitiga(alas, tinggi);

  rl.close(); 
}

main();
