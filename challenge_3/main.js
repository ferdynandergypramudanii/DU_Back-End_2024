const readline = require('readline');
const { batuGuntingKertas } = require('./modules/game.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukkan pilihan Anda (batu, gunting, atau kertas): ', (playerChoice) => {
  if (['batu', 'gunting', 'kertas'].includes(playerChoice)) {
    batuGuntingKertas(playerChoice);
  } else {
    console.log('Input tidak valid! Harap masukkan batu, gunting, atau kertas.');
  }
  rl.close(); 
});
