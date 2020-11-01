import { Entity } from './Entity';
import {Faction} from "./Faction";

export class Characters extends Entity {

    /*get health(): number {return this._health;}
    set health(value: number) {
        if(value > 100) this._health = 100;
        else this._health = value;
    }
    get lifeStatus(): String {
        if(this._health > 0) return "alive";
        else return "dead";
    }*/

    //private _health: number;
    name: String;
    faction: Faction[];
    //private _lifeStatus: String;

    constructor(name: String) {
        super();
        this.name = name;
        this.faction = [];
    }

    heal(target: Characters){
        target.health++;
        return target;
    }

    joinFaction(faction: Faction){
        this.faction.push(faction);
        return this;
    }

    leaveFaction(faction: Faction){
        let indexOfFaction = this.faction.indexOf(faction);
        this.faction.splice(indexOfFaction, 1);
        return this;
    }

    isSameFactionOrAlly(character: Characters){
        let isSameFactionOrAlly = false;
        this.faction.forEach(factionCharacterA => {
            character.faction.forEach(factionCharacterB => {
                if(factionCharacterA.factionName === factionCharacterB.factionName
                    && factionCharacterA) isSameFactionOrAlly = true;
                else if(factionCharacterA && factionCharacterB){
                   let indexOfFriend = factionCharacterA.friends.indexOf(factionCharacterB);
                   if( indexOfFriend !== -1) isSameFactionOrAlly = true;
               }
            });
        });
        return isSameFactionOrAlly;
    }


}