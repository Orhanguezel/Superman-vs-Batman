// Your code here!


const game = [{
    name: "superman",
    healty: 25,
    attackSkillundDamege: {
        punch: 5,
        kick: 10,
        laser: 15,
        flying: 20
    },
    attack: function(opponent, skill) {
        if (this.attackSkillundDamege[skill] !== undefined) {
            const damage = this.attackSkillundDamege[skill];
            opponent.healty -= damage;
            return `${this.name} attacked ${opponent.name} with ${skill}, inflicting ${damage} damage. ${opponent.name}'s health is now ${opponent.healty}.`;
        } else {
            return `${this.name} does not have the skill "${skill}".`;
        }
    }
}, {
    name: "batman",
    healty: 75,
    attackSkillundDamege: {
        punch: 6,
        kick: 8,
        batarang: 12,
        grapple: 10
    },
    attack: function(opponent, skill) {
        if (this.attackSkillundDamege[skill] !== undefined) {
            const damage = this.attackSkillundDamege[skill];
            opponent.healty -= damage;
            return `${this.name} attacked ${opponent.name} with ${skill}, inflicting ${damage} damage. ${opponent.name}'s health is now ${opponent.healty}.`;
        } else {
            return `${this.name} does not have the skill "${skill}".`;
        }
    }
}];


console.log(game[0].attack(game[1], "laser")); 
console.log(game[1].attack(game[0], "batarang")); 



const game2 = [{
    name: "superman",
    healty: 75,
    attackSkillundDamege: {
        punch: 5,
        kick: 10,
        laser: 20,
        flying: 15
    },
    attack: function(opponent) {
        const skills = Object.keys(this.attackSkillundDamege);
        const randomSkill = skills[Math.floor(Math.random() * skills.length)];
        const damage = this.attackSkillundDamege[randomSkill];
        opponent.healty -= damage;
        if (opponent.healty < 0) opponent.healty = 0; 
        return `${this.name} attacked ${opponent.name} with ${randomSkill}, inflicting ${damage} damage. ${opponent.name}'s health is now ${opponent.healty}.`;
    }
}, {
    name: "batman",
    healty: 75,
    attackSkillundDamege: {
        punch: 6,
        kick: 8,
        batarang: 16,
        grapple: 20
    },
    attack: function(opponent) {
        const skills = Object.keys(this.attackSkillundDamege);
        const randomSkill = skills[Math.floor(Math.random() * skills.length)];
        const damage = this.attackSkillundDamege[randomSkill];
        opponent.healty -= damage;
        if (opponent.healty < 0) opponent.healty = 0; 
        return `${this.name} attacked ${opponent.name} with ${randomSkill}, inflicting ${damage} damage. ${opponent.name}'s health is now ${opponent.healty}.`;
    }
}];


for (let i = 0; i < 6; i++) {
    if (game2[0].healty <= 0 || game2[1].healty <= 0) {
        break;
    }
    console.log(game2[0].attack(game2[1]));
    if (game2[1].healty <= 0) {
        console.log(`${game2[1].name} has fallen! ${game2[0].name} wins the battle!`);
        break;
    }
    
    console.log(game2[1].attack(game2[0])); 
    if (game2[0].healty <= 0) {
        console.log(`${game2[0].name} has fallen! ${game2[1].name} wins the battle!`);
        break;
    }
}

if (game2[0].healty > 0 && game2[1].healty > 0) {
    console.log("The battle ended in a draw after 6 rounds!");
}
