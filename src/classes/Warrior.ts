import {Characters} from "./Characters";

export class Warrior extends Characters {

    heal(target: Characters): Characters {
        if(this.name !== target.name) return target;
        else return super.heal(target);
    }

}