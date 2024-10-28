# Battle Game Simulation: Superman vs Batman

This project showcases a simple battle game simulation featuring two iconic characters, Superman and Batman. Each character has unique skills with specific damage values, and two different game modes allow for both targeted and random attacks.

## Features

### Characters and Skills

Each character has:
- `name`: The character's name.
- `healty`: Their health level, representing remaining strength.
- `attackSkillundDamege`: An object listing attack skills and their corresponding damage values.
- `attack`: A method for attacking an opponent, either with a specified skill (Game 1) or a random skill (Game 2).

### Game Modes

1. **Game Mode 1: Targeted Attack**
    - Characters can choose a specific attack skill.
    - The `attack` method checks if the selected skill exists; if so, it applies the damage to the opponent.
    - If an invalid skill is chosen, an error message is returned.
    
    **Example:**
    ```javascript
    console.log(game[0].attack(game[1], "laser"));  // Superman attacks Batman with laser
    console.log(game[1].attack(game[0], "batarang")); // Batman attacks Superman with batarang
    ```

2. **Game Mode 2: Random Attack**
    - Characters attack each other with randomly chosen skills in a looped battle lasting up to 6 rounds.
    - If a character's health reaches 0, they lose, and the game announces the winner.
    - If neither character's health reaches 0 after 6 rounds, the game ends in a draw.

    **Example:**
    ```javascript
    for (let i = 0; i < 6; i++) {
        if (game2[0].healty <= 0 || game2[1].healty <= 0) break;
        console.log(game2[0].attack(game2[1])); // Superman attacks Batman with a random skill
        if (game2[1].healty <= 0) {
            console.log(`${game2[1].name} has fallen! ${game2[0].name} wins the battle!`);
            break;
        }
        console.log(game2[1].attack(game2[0])); // Batman attacks Superman with a random skill
        if (game2[0].healty <= 0) {
            console.log(`${game2[0].name} has fallen! ${game2[1].name} wins the battle!`);
            break;
        }
    }
    if (game2[0].healty > 0 && game2[1].healty > 0) {
        console.log("The battle ended in a draw after 6 rounds!");
    }
    ```

### Key Code Sections

#### Character Initialization
Each character has unique skills with predefined damage values, allowing for varied attacks.

#### Attack Functionality
- **Game 1**: The attack method in `game` accepts an opponent and a specific skill.
- **Game 2**: The attack method in `game2` chooses a random skill for each attack, creating unpredictable battle outcomes.

### Sample Output

```plaintext
Superman attacked Batman with laser, inflicting 20 damage. Batman's health is now 55.
Batman attacked Superman with batarang, inflicting 16 damage. Superman's health is now 59.
...
Batman has fallen! Superman wins the battle!
```

## Conclusion
