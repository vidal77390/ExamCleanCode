import {Characters} from "./Characters";

export class Warrior extends Characters {

    heal(target: Characters): Characters {
        if(this.name !== target.name) return target;
        else return super.heal(target);
    }

    attack(target: Characters): Characters {
        if(this.isSameFactionOrAlly(target) && this.name != target.name) return target;
        else {
            target.health = target.health - (getRandomInt(9));
            return target;
        }
    }
    
}
function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}