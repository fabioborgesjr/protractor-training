import { promise, ElementFinder, browser, element, by, ExpectedConditions, ElementArrayFinder } from "protractor"

/**
 * Page Object com métodos relacionados a tela de cadastro do Pokédex.
 *
 * @export
 * @class Pokedex
 */
export class CadastroPage {

  private EC = ExpectedConditions

  private numElm: ElementFinder = element(by.model('PokemonsController.pokemon.id'));
  private nomElm: ElementFinder = element(by.model('PokemonsController.pokemon.name'));
  private tipo1Elm: ElementFinder = element(by.model('PokemonsController.pokemon.type1'));
  private tipo2Elm: ElementFinder = element(by.model('PokemonsController.pokemon.type2'));
  private tipo1Checked: ElementFinder = element(by.model('PokemonsController.pokemon.type1')).element(by.css('option:checked'));
  private tipo2Checked: ElementFinder = element(by.model('PokemonsController.pokemon.type2')).element(by.css('option:checked'));
  private atkElm: ElementFinder = element(by.model('PokemonsController.pokemon.attack'));
  private defElm: ElementFinder = element(by.model('PokemonsController.pokemon.defense'));
  private hpElm: ElementFinder = element(by.model('PokemonsController.pokemon.hp'));
  private saveElm: ElementFinder = element(by.buttonText('Salvar'));
  private cancelElm: ElementFinder = element(by.css('.btn-danger'));

  public add = {
    /**
    * Método que insere o número do Pokémon na tela de cadastro do Pokédex
    * @memberof CadastroPage.add
    * @param {string} num Número do pokémon 
    */
    numero: (num: string): void => {
      this.numElm.sendKeys(num).then(() => { })
    },
    /**
    * Método que insere o nome do Pokémon na tela de cadastro do Pokédex
    * @memberof CadastroPage.add
    * @param {string} nome Nome do pokémon 
    */
    nome: (nome: string): void => {
      this.nomElm.sendKeys(nome).then(() => { })
    },
    /**
    * Método que insere o primeiro tipo do Pokémon na tela de cadastro do Pokédex
    * @memberof CadastroPage.add
    * @param {string} tipo Primeiro tipo do pokémon 
    */
    tipo1: (tipo: string): void => {
      this.tipo1Elm.element(by.cssContainingText('option', tipo)).click();
    },
    /**
    * Método que insere o segundo tipo do Pokémon na tela de cadastro do Pokédex
    * @memberof CadastroPage.add
    * @param {string} tipo Segundo tipo do pokémon 
    */
    tipo2: (tipo: string): void => {
      this.tipo2Elm.element(by.cssContainingText('option', tipo)).click();
    },
    /**
    * Método que insere o ataque do Pokémon na tela de cadastro do Pokédex
    * @memberof CadastroPage.add
    * @param {string} num Ataque do pokémon 
    */
    ataque: (num: number): void => {
      this.atkElm.sendKeys(num)
    },
    /**
    * Método que insere a defesa do Pokémon na tela de cadastro do Pokédex
    * @memberof CadastroPage.add
    * @param {string} num Defesa do pokémon 
    */
    defesa: (num: number): void => {
      this.defElm.sendKeys(num)
    },
    /**
    * Método que insere o HP do Pokémon na tela de cadastro do Pokédex
    * @memberof CadastroPage.add
    * @param {string} num HP do pokémon 
    */
    hp: (num: number): void => {
      this.hpElm.sendKeys(num)
    },
    /**
    * Método que realiza o clique no botão Salvar na tela de cadastro do Pokédex
    * @memberof CadastroPage.add
    */
    salvar: (): void => {
      this.saveElm.click()
    },
    /**
    * Método que realiza o clique no botão Cancelar na tela de cadastro do Pokédex
    * @memberof CadastroPage.add
    */
    cancelar: (): void => {
      this.cancelElm.click()
    }
  }

  /**
  * Método que retorna uma promise com o valor do número do Pokémon
  * @memberof CadastroPage.add
  * @param {Promise<string>} value Número do Pokémon
  */
  public getNum(): promise.Promise<string> {
    return this.numElm.getAttribute('value');
  }

  /**
  * Método que retorna uma promise com o valor do nome do Pokémon
  * @memberof CadastroPage.add
  * @param {Promise<string>} value Nome do Pokémon
  */
  public getNom(): promise.Promise<string> {
    return this.nomElm.getAttribute('value');
  }

  /**
  * Método que retorna uma promise com o valor do ataque do Pokémon
  * @memberof CadastroPage.add
  * @param {Promise<string>} value Ataque do Pokémon
  */
  public getAtk(): promise.Promise<string> {
    return this.atkElm.getAttribute('value');
  }

  /**
  * Método que retorna uma promise com o valor da defesa do Pokémon
  * @memberof CadastroPage.add
  * @param {Promise<string>} value Defesa do Pokémon
  */
  public getDef(): promise.Promise<string> {
    return this.defElm.getAttribute('value');
  }

  /**
  * Método que retorna uma promise com o valor da HP do Pokémon
  * @memberof CadastroPage.add
  * @param {Promise<string>} value HP do Pokémon
  */
  public getHp(): promise.Promise<string> {
    return this.hpElm.getAttribute('value');
  }

  /**
  * Método que retorna uma promise com o primeiro tipo do Pokémon
  * @memberof CadastroPage.add
  * @param {Promise<string>} value Primeiro tipo do Pokémon
  */
  public getTipo1(): promise.Promise<string> {
    return this.tipo1Checked.getText();
  }

  /**
  * Método que retorna uma promise com o segundo tipo do Pokémon
  * @memberof CadastroPage.add
  * @param {Promise<string>} value Segundo tipo do Pokémon
  */
  public getTipo2(): promise.Promise<string> {
    return this.tipo2Checked.getText();
  }

}
