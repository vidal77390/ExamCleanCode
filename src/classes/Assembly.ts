import {Characters} from "./Characters";


export class Assembly {

    private name: String;
    private allowedRoles: Characters[];

    constructor(name: String, allowedRoles: Characters[]){
        this.name = name;
        //TODO Can we stock Type in this propertie ?
        this.allowedRoles = allowedRoles;
    }

}