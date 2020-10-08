import {Faction} from "./Faction";

export class Characters {

    get health(): number {return this._health;}
    set health(value: number) {
        if(value > 100) this._health = 100;
        else this._health = value;
    }
    get lifeStatus(): String {
        if(this._health > 0) return "alive";
        else return "dead";
    }

    private _health: number;
    name: String;
    faction?: Faction;
    private _lifeStatus: String;

    constructor(name: String) {
        this._health = 100;
        this.name = name;
    }

    heal(target: Characters){
        target.health++;
        return target;
    }

    joinFaction(faction: Faction){
        this.faction = faction;
        return this;
    }

    leaveFaction(){
        this.faction = undefined;
        return this;
    }

    isSameFaction(character: Characters){
        if(this.faction?.factionName === character.faction?.factionName && this.faction) return true;
        else return false;
    }


}