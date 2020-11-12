import {Entity} from "../classes/Entity";
import {expect} from "chai";
import {Assembly} from "../classes/Assembly";
import {Warrior} from "../classes/Warrior";
import {Priest} from "../classes/Priest";

let assembly1: Assembly;
let assembly2: Assembly;
let warrior1: Warrior;
let priest1: Priest;


beforeEach(() => {
    assembly1  = new Assembly("Gang", ["Warrior"]);
    assembly2  = new Assembly("Goulag", ["Priest","Warrior"]);
    warrior1 = new Warrior("Leo");
    priest1 = new Priest("Dmytro");

})

describe('Entity test',
    () => {
        it('Should join assembly', () => {
            warrior1.joinAssembly(assembly1);
            expect(warrior1.assembly?.name).equal("Gang");
        });

        it('Should leave assembly', () => {
            warrior1.joinAssembly(assembly1);
            warrior1.leaveAssembly();
            expect(warrior1.assembly).to.not.exist;
        });

        it('Should not join ', () => {
            priest1.joinAssembly(assembly1)
            expect(priest1.assembly).to.not.exist;
        });

        it('Should join ', () => {
            priest1.joinAssembly(assembly2)
            expect(priest1.assembly?.name).equal("Goulag");
        });
    });