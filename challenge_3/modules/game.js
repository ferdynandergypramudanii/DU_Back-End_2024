function batuGuntingKertas(playerChoice) {
     const choices = ['batu', 'gunting', 'kertas'];
     const compChoice = choices[Math.floor(Math.random() * 3)];
   
     let result;
   
     switch (true) {
       case playerChoice === 'batu':
         result = (compChoice === 'gunting') ? 'Menang' : (compChoice === 'batu') ? 'Seri' : 'Kalah';
         break;
       case playerChoice === 'gunting':
         result = (compChoice === 'kertas') ? 'Menang' : (compChoice === 'gunting') ? 'Seri' : 'Kalah';
         break;
       default:
         result = (compChoice === 'batu') ? 'Menang' : (compChoice === 'kertas') ? 'Seri' : 'Kalah';
     }
   
     console.log(`\nPlayer choice: ${playerChoice}`);
     console.log(`Comp choice: ${compChoice}`);
     console.log(`Result: ${result}`);
   }
   
   module.exports = { batuGuntingKertas };
   