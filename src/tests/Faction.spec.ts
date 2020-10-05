
import {expect} from 'chai';
import 'mocha';
import {Characters} from "../classes/Characters";

let character: Characters;

beforeEach(() => {
    character  = new Characters("Dmytro");
})

describe('Faction test',
    () => {
        it('Should join faction', () => {
            character.factionName = "Alliance";
            expect(character.factionName).equal("Alliance");
        });

    });