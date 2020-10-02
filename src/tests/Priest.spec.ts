
import {expect} from 'chai';
import 'mocha';
import {Priest} from "../classes/Priest";
import {Warrior} from "../classes/Warrior";

let Priest1: Priest;
let Warrior1: Warrior;

beforeEach(() => {
    Priest1 = new Priest("Leo");
    Warrior1 = new Warrior("Dmytro");
})

describe('Priest test', () => {

    it('Priest could heal itself by 1', () => {
        Priest1.health = 90;
        expect(Priest1.heal(Priest1).health).equal(91);
    });

    it('Priest could heal other Character', () => {
        let initialHealth = 80;
        Warrior1.health = initialHealth;
        let healedWarrior = Priest1.heal(Warrior1);
        expect(healedWarrior.health).to.be.at.most(initialHealth + 10);
        expect(healedWarrior.health).to.be.at.least(initialHealth + 5); 
    });
});