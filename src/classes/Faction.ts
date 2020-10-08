import { ServerRequest } from 'http';
import {Characters} from "./Characters";

export class Faction {
    factionName: string;

    constructor(name: string) {
        this.factionName = name;
    }
}
