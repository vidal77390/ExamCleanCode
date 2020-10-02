
import {expect} from 'chai';
import 'mocha';
import {Warrior} from "./Warrior";
import {Characters} from "./Characters";

let warrior1: Warrior;
let warrior2: Warrior;

beforeEach(() => {
    warrior1 = new Warrior("Leo");
    warrior2 = new Warrior("Dmytro");
})

describe('Warrior test', () => {

    it('a Warrior could heal itself by 1', () => {
        warrior1.health = 90;
        expect(warrior1.heal(warrior1).health).equal(91);
    });

    it('Warrior cannot heal other Character', () => {
        warrior2.health = 90;
        expect(warrior1.heal(warrior2).health).equal(90);
    });
});