import {Characters} from "./Characters";


export class Assembly {

    name: String;
    private allowedRoles: String[];

    constructor(name: String, allowedRoles: String[]){
        this.name = name;
        //TODO Can we stock Type in this propertie ?
        this.allowedRoles = allowedRoles;
    }

    canJoinAssembly(role: String){
        return this.allowedRoles.findIndex(allowedRole => {return allowedRole == role}) != -1
    }

    joinAssembly(character: Characters){
        if(this.canJoinAssembly(character.role) && character.assembly === undefined) character.assembly = this;
        return character;
    }

}