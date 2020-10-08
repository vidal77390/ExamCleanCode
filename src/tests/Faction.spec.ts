
import {expect} from 'chai';
import 'mocha';
import {Characters} from "../classes/Characters";
import {Faction} from "../classes/Faction";

let character: Characters;
let faction: Faction;

beforeEach(() => {
    character  = new Characters("Dmytro");
    faction = new Faction("Gang")
})

describe('Faction test',
    () => {
        it('Should join faction', () => {
            character.joinFaction(faction);
            expect(character.faction?.factionName).equal("Gang");
        });

        it('Should leave faction', () => {
            character.joinFaction(faction);
            character.leaveFaction();
            expect(character.faction).to.not.exist;
        });

    });