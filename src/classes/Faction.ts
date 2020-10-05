import { ServerRequest } from 'http';
import {Characters} from "./Characters";

export class Faction extends Characters {
    private _factionName: String;
    get faction(): String {return this._factionName;}
    set faction(_factionName: String) {
        if(this._factionName == "Horde"|| this._factionName == "Alliance") this.factionName = _factionName;
        else this._factionName = '';
    }

    joinFaction(target: Characters): Characters{
        target.factionName = this._factionName;
        return target;
    }

    leaveFaction(target: Characters): Characters{
        target.factionName = '';
        return target;
    }

}
