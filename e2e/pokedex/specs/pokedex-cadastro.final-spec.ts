import { browser, by, element } from "protractor";

import { Pokedex } from '../page-objects/pokedex.page'
import { CadastroPage } from "../page-objects/cadastro.page";
import { ProfilePage } from "../page-objects/profile.page";

describe('Suíde de testes do Pokédex', () => {

    const pokedex: Pokedex = new Pokedex();

    beforeAll(() => {
        pokedex.mock()
        pokedex.navigateTo()
    })

    describe('Cadastra um Pokémon', () => {

        const cadastroPage: CadastroPage = new CadastroPage;

        beforeAll(() => {
            pokedex.add();
        })

        it('Insere número do Pokémon', () => {
            cadastroPage.add.numero("41")
            expect(cadastroPage.getNum()).toEqual('41')
        }, 10000)

        it('Insere nome do Pokémon', () => {
            cadastroPage.add.nome("Zubat")
            expect(cadastroPage.getNom()).toEqual('Zubat')
        }, 10000)

        it('Insere primeiro tipo do Pokémon', () => {
            cadastroPage.add.tipo1('Veneno')
            expect(cadastroPage.getTipo1()).toEqual('Veneno')
        }, 10000)

        it('Insere segundo tipo do Pokémon', () => {
            cadastroPage.add.tipo2('Voador')
            expect(cadastroPage.getTipo2()).toEqual('Voador')
        }, 10000)

        it('Insere o ataque do Pokémon', () => {
            cadastroPage.add.ataque(0)
            expect(cadastroPage.getAtk()).toEqual('0')
        }, 10000)

        it('Insere a defesa do Pokémon', () => {
            cadastroPage.add.defesa(0)
            expect(cadastroPage.getDef()).toEqual('0')
        }, 10000)

        it('Insere a hp do Pokémon', () => {
            cadastroPage.add.hp(1)
            expect(cadastroPage.getHp()).toEqual('1')
        }, 10000)

        it('Salva o cadastro realizado', () => {
            cadastroPage.add.salvar()
        }, 10000)

    });

    describe("Valida Pokémon criado", () => {

        const profilePage: ProfilePage = new ProfilePage;

        beforeAll(() => {
            pokedex.search('Zubat')
            pokedex.openProfile('Zubat')
        })

        it('Valida o nome do Pokémon', () => {
            expect(profilePage.getNom()).toEqual("Zubat")
        })

        it('Valida o ataque do Pokémon', () => {
            expect(profilePage.getAtk()).toEqual("0")
        })

        it('Valida o defesa do Pokémon', () => {
            expect(profilePage.getDef()).toEqual("0")
        })

        it('Valida o hp do Pokémon', () => {
            expect(profilePage.getHp()).toEqual("1")
        })

        it('Valida o tipo 1 do Pokémon', () => {
            expect(profilePage.getTipo1()).toEqual("veneno")
        })

        it('Valida o tipo 2 do Pokémon', () => {
            expect(profilePage.getTipo2()).toEqual("voador")
        })

        it("Valida a imagem do Pokemon", () => {
            expect(element(by.css('img')).getAttribute('ng-src')).toEqual('https://vignette.wikia.nocookie.net/pokemongo/images/6/67/Zubat.png/revision/latest?cb=20180409082607')
        })

    })

});
