import { protractor, promise, ElementFinder, browser, element, by, ExpectedConditions, ElementArrayFinder } from "protractor"
import { CadastroPage } from "./cadastro.page";

/**
 * Page Object com métodos relacionados a Pokedex.
 *
 * @export
 * @class Pokedex
 */
export class Pokedex {

    private EC = ExpectedConditions
    private pokemonList: ElementArrayFinder = element.all(by.repeater('item in PokemonsController.pokemons|filter: PokemonsController.filtro'))
    private searchElm: ElementFinder = element(by.model('PokemonsController.filtro'))
    private addButton: ElementFinder = element(by.css('a.btn'))
    private labelElm: ElementFinder = element(by.id('myModalLabel'))
    private pokemonNameElm: ElementFinder = element(by.binding('item.name'))

    /**
     * Acessa a página principal da Pokedex
     *
     * @memberof Pokedex
     */
    public navigateTo(): void {
        browser.get('http://pokedex-angular-example.herokuapp.com')
    }

    /**
     * Retorna a URL da página atual
     *
     * @memberof Pokedex
     * @returns {Promise<string>} Promise com a url da pagina atual
     */
    public currentUrl(): promise.Promise<string> {
        return browser.getCurrentUrl()
    }

    /**
     * Pesquisa por um Pokémon no cadastro
     * @param pokemon Nome do Pokémon que será pesquisado
     * @memberof Pokedex
     */
    public search(pokemon: string): void {
        this.searchElm.clear()
        this.searchElm.sendKeys(pokemon)
    }

    /**
    * Realiza o clique no botão 'Adicionar', espera que a tela de cadastro apareça e
    * retorna uma instância da classe CadastroPage
    * @memberof Pokedex
    * @returns CadastroPage
    */
    public add(): void {
        this.addButton.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.labelElm), 5000, 'Label não apareceu na tela')
        })
    }

    /**
     * Lista todos os Pokémons cadastrados
     * @memberof Pokedex
     * @returns {ElementArrayFinder} Lista dos respectivos elementos dos Pokémons cadastrados
     */
    public listPokemons(): ElementArrayFinder {
        return this.pokemonList
    }

    /**
     * Busca por um Pokémon e retorna o elemento <tr> da tabela.
     * @memberof Pokedex
     * @param {string} pokemonNumber Código do Pokémon que será procurado. Ex.: "#1".
     * @returns {ElementFinder} Elemento da tabela que se refere ao Pokémon desejado.
     */
    public findPokemon(pokemonNumber: string): ElementFinder {
        let pokemons: ElementArrayFinder = this.listPokemons()
        let pokemon: ElementFinder = pokemons.filter((pokemon: ElementFinder) => {
            return pokemon.element(by.tagName('strong')).getText().then((number: string) => {
                return pokemonNumber === number;
            });
        }).first();

        return pokemon
    }

    /**
     * Exibe no console o nome do Pokémon cadastrado.
     * @memberof Pokedex
     * @param {string} pokemonNumber Posição na lista do Pokémon que será procurado. Ex.: Posição 0 seria o Charizard, pois é o primeiro da lista.
     */
    public showPokemonName(index: number): void {
        let pokemons: ElementArrayFinder = this.listPokemons()
        pokemons.count().then((quant) => {
            if (index < quant) {
                pokemons.get(index).element(by.binding('item.name')).getText().then((name) => {
                    console.log("O nome do Pokémon é " + name)
                })
            } else {
                console.log("Não há Pokémon cadastrado.")
            }
        })
    }

    /**
     * Exibe no console o nome do último Pokémon da lista.
     * @memberof Pokedex
     */
    public showLastPokemonName(): void {
        let pokemons = element.all(by.repeater('item in PokemonsController.pokemons|filter: PokemonsController.filtro'))
        pokemons.last().element(by.binding('item.name')).getText().then((name) => {
            console.log("O nome do último Pokémon é " + name)
        })
    }

    /**
     * Gera um número aleatório e exibe no console.
     * @memberof Pokedex
     * @returns {number} número gerado.
     */
    public geraNumeroAleatorio(): number {
        const num: number = Math.random() * (50 - 1) + 1;
        console.log(num)
        return num
    }

    /**
     * Abre o perfil de um Pokémon
     * Desenvolvido para ser utilizado depois de realizada a pesquisa pelo Pokémon
     * @memberof Pokedex
     */
    public openProfile(profile: string): void {
        const fade = element(by.className('modal-backdrop fade'));
        const pokemon = element(by.cssContainingText('span', profile));
        const content = element(by.css('.box-body'));

        browser.wait(this.EC.visibilityOf(pokemon), 10000).then(() => {
            browser.wait(this.EC.invisibilityOf(fade), 5000).then(() => {
                pokemon.click().then(() => {
                    browser.wait(this.EC.elementToBeClickable(content), 5000)
                })
            })
        })
    }

    /**
     * Mock criado para alterar o módulo "app" do Pokédex.
     * A alteração visa alterar a imagem do Pokémon criado que até então era gerada aleatóriamente.
     * É fixada a imagem do Zubat disponibilizada pela URL na variável vm.pokemon.image.
     * @memberof Pokedex
     */
    public mock(): void {
        let angular: any;
        let vm: any;
        let $: any;
        browser.addMockModule("app", () => {
            angular.module('app').controller('PokemonsController', PokemonsController as any);
            function PokemonsController(Pokemons: any) {
                vm = this;
                var imagesArray = ['/img/026.png',
                    '/img/031.png',
                    '/img/031.png',
                    '/img/031.png',
                    '/img/032.png',
                    '/img/034.png',
                    '/img/059.png',
                    '/img/064.png',
                    '/img/071.png',
                    '/img/012.png']
                vm.pokemons = Pokemons.getAll();
                vm.save = () => {
                    vm.pokemon.image = 'https://vignette.wikia.nocookie.net/pokemongo/images/6/67/Zubat.png/revision/latest?cb=20180409082607'
                    Pokemons.pokemons.push(vm.pokemon);
                    vm.pokemon = {
                        id: '',
                        name: '',
                        type1: 'grama',
                        type2: 'grama',
                        attack: '',
                        defense: '',
                        hp: '',
                        image: ''
                    };
                    vm.pokemons = Pokemons.getAll();
                    $('#myModal').modal('hide');
                }
            };
        })
    }
}
