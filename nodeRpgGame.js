
function Character(name, profession, gender, age) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = Math.floor(Math.random() * 100) + 1;
    this.hitPoints = Math.floor(Math.random() * 100) + 1;
    this.printStats = function() {
      console.log(`Name: ${this.name}`);
      console.log(`Profession: ${this.profession}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`Age: ${this.age}`);
      console.log(`Strength: ${this.strength}`);
      console.log(`Hit Points: ${this.hitPoints}`);
    };
    this.isAlive = () => {
        if (this.hitPoints <= 0) {
            console.log(`${this.name} is dead :'(`);
            return false;
        } else {
            console.log(`${this.name} is alive!`);
            console.log(`and has ${this.hitPoints}HP`);
            return true;
        }
    }
    this.attack = (opponent) => {
        console.log(`Attack ${opponent.name}!`);
        opponent.hitPoints -= this.strength;
    }

    this.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
      };
  }
  
  
  var austin = new Character('Austin', 'Wed Dev', 'Male', 28);
  var mike = new Character('Mike', 'DJ', 'Male', 43);
  
  // calling dogs and cats makeNoise methods
  austin.printStats();
  console.log('..........................................');
  mike.printStats();
  console.log('..........................................');
  austin.isAlive();
  console.log('..........................................');
  austin.levelUp();
  console.log('..........................................');
  austin.printStats();
  console.log('..........................................');

  while (austin.isAlive() === true && mike.isAlive() === true) {
    // characters deal damage to one another
    austin.attack(mike);
    mike.attack(austin);
    // prints stats to show changes
    austin.printStats();
    console.log('-------------------------------------------');
    mike.printStats();
    console.log('-------------------------------------------');
  }

  
  