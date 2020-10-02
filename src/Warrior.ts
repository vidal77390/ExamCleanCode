import {Characters} from "./Characters";

export class Warrior extends Characters {

    heal(target: Characters): Characters {
        console.log("warrior heal");
        return super.heal(target);
    }

}