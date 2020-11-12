import {Characters} from "./Characters";

export class Warrior extends Characters {

    constructor(name: String) {
        super(name);
        this.role = "Warrior";
    }

    heal(target: Characters): Characters {
        if(this.name !== target.name) return target;
        else return super.heal(target);
    }

    attack(target: Characters): Characters {
        if(this.isCharacterAlly(target) && this.name != target.name) return target;
        else {
            target.health = target.health - (getRandomInt(9));
            return target;
        }
    }
    
}
function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}