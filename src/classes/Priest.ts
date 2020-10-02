import {Characters} from "./Characters";

export class Priest extends Characters {

    heal(target: Characters): Characters {
        if(this.name !== target.name){
            target.health = target.health + (getRandomInt(5) + 5) ;
            return target;
        }
        else return super.heal(target);

    }
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}