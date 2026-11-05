export class Monster {
  constructor(name, attack, defense) {
    this.name = name;
    this.pv = 100;
    this.attack = attack;
    this.defense = defense;
  }

  action() {
    return `${this.name} quiere atacarte.`;
  }


  receiveDamage(amount) {
    const effectiveDamage = Math.max(0, amount - this.defense);
    this.pv = Math.max(0, this.pv - effectiveDamage);
    return effectiveDamage;
  }


  attackMonster(target) {
    if (this.pv <= 0) {
      console.log(`${this.name} no puede atacar porque está derrotado.`);
      return;
    }

    const damageDealt = target.receiveDamage(this.attack);
    console.log(`${this.name} ataca a ${target.name} e inflige ${damageDealt} de daño.`);
  }


  showInfo() {
    return `${this.name} — Vida: ${this.pv}, Ataque: ${this.attack}, Defensa: ${this.defense}`;
  }
}
