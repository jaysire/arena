// Creat a program that has 10 gladiators, and there is a mysterious god that selects two random glladiators to fight. Only one winner immerges, and the loser is eliminated.
// 10 gladiators
const gladiators = ['Spartacus', 'Dominos', 'Timbo', 'Stoopio', 'Randy', 'Rambo', 'Swana', 'Jay'];

// console.log(gladiators);
// two random gladiators
// console.log(a, b);
//const summonGladiators = (a, b) =>
// if(2>5) ? 'Hi' : 'Bye'


// fight function
const fight = (a, b) => {
  // eliminate the looser
  // way to determine the winner
  const eliminate = (Math.random() >= 0.5) ? a : b;
  return eliminate;
}

// god to summon two random gladiators
const summonGladiators = () => {
  let RG = gladiators.length;
  const length = gladiators.length;

  for (let i = 1; i < length; i++){
//console.log('REMAINING GLADIATOR', RG);
// two random gladiators
    const a = Math.floor(Math.random() * RG);
    const b = Math.floor(Math.random() * RG);

//console.log(gladiators[a], 'VS', gladiators[b]);

//console.log('Fighters =>', a, b);

   const looser = fight(a, b);
   gladiators.splice(looser, 1);
   RG --;
  }
  // everyone fights and we have a champion
  console.log('**** WINNER ===>', gladiators);
return gladiators;
} 

// Invoke our gladiator god
  summonGladiators();

// Specify how many fights we want
//howManyFights(5);



