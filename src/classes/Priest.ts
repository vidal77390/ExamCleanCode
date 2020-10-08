import {Characters} from "./Characters";

export class Priest extends Characters {

    heal(target: Characters): Characters {
        if(this.name !== target.name && this.isSameFaction(target)){
            target.health = target.health + (getRandomInt(5) + 5) ;
            return target;
        }
        else if(this.name === target.name) return super.heal(target);
        else return target;
    }
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}