
import {expect} from 'chai';
import 'mocha';
import {Warrior} from "./Warrior";
import {Characters} from "./Characters";

let warrior: Warrior = new Warrior("Leo");
let character: Characters = new Characters("Dmytro");



describe('Character test',
    () => {
        it('should initiale health Character to 100', () => {
            expect(character.health).equal(100);
        });

    });