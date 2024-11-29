const readline = require('readline');
const { hitungKelilingPersegi } = require('./modules/persegi');
const { hitungKelilingLingkaran } = require('./modules/lingkaran');
const { hitungKelilingSegitiga } = require('./modules/segitiga');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => resolve(parseFloat(input)));
  });
}

async function main() {
  console.log("\n=== Keliling Persegi ===");
  const panjang = await getInput("Masukkan panjang persegi: ");
  const lebar = await getInput("Masukkan lebar persegi: ");
  hitungKelilingPersegi(panjang, lebar);

  console.log("\n=== Keliling Lingkaran ===");
  const jariJari = await getInput("Masukkan jari-jari lingkaran: ");
  hitungKelilingLingkaran(jariJari);

  console.log("\n=== Keliling Segitiga ===");
  const sisi1 = await getInput("Masukkan sisi 1 segitiga: ");
  const sisi2 = await getInput("Masukkan sisi 2 segitiga: ");
  const sisi3 = await getInput("Masukkan sisi 3 segitiga: ");
  hitungKelilingSegitiga(sisi1, sisi2, sisi3);

  rl.close(); 
}

main();
