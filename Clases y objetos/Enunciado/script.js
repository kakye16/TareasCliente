import { Monster } from './monster.js';

const slime = new Monster('Slime', 10, 7);
const wolf = new Monster('Wolf', 28, 3);

console.log(slime.action());
console.log(wolf.action());


console.log('--- Estado inicial ---');
console.log(slime.showInfo());
console.log(wolf.showInfo());

console.log('\n--- El lobo ataca al slime ---');
wolf.attackMonster(slime);
console.log(slime.showInfo());


console.log('\n--- El slime ataca al lobo ---');
slime.attackMonster(wolf);
console.log(wolf.showInfo());


console.log('\n--- El slime recibe golpe de 2 ptos ---');
slime.receiveDamage(2);
console.log(slime.showInfo());


console.log('\n--- El slime recibe golpe de 200 ptos ---');
slime.receiveDamage(200);
console.log(slime.showInfo());


console.log('\n--- El slime intenta atacar sin vida ---');
slime.attackMonster(wolf);
console.log(wolf.showInfo()); 