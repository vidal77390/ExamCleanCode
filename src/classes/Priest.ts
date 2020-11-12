import {Characters} from "./Characters";
import {AssemblyMember} from "../Interface";
import {Assembly} from "./Assembly";

export class Priest extends Characters{

    constructor(name: String) {
        super(name);
        this.role = "Priest";
    }

    heal(target: Characters): Characters {
        if(this.name !== target.name && this.isCharacterAlly(target)){
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