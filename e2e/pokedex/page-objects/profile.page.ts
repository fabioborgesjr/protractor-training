import { promise, ElementFinder, browser, element, by, ExpectedConditions, ElementArrayFinder } from "protractor"

/**
 * Page Object com métodos relacionados a tela de perfil do Pokémon.
 *
 * @export
 * @class ProfilePage
 */
export class ProfilePage {

  private EC = ExpectedConditions;

  private nomElm: ElementFinder = element(by.binding('PokemonController.pokemon.name'));
  private tipo1Elm: ElementFinder = element(by.css('span[ng-bind="PokemonController.pokemon.type1"]'));
  private tipo2Elm: ElementFinder = element(by.css('span[ng-bind="PokemonController.pokemon.type2"]'));
  private atkElm: ElementFinder = element(by.binding('PokemonController.pokemon.attack'));
  private defElm: ElementFinder = element(by.binding('PokemonController.pokemon.defense'));
  private hpElm: ElementFinder = element(by.binding('PokemonController.pokemon.hp'));

  /**
  * Método que retorna uma promise com o valor do nome do Pokémon
  * @memberof ProfilePage
  * @param {Promise<string>} value Nome do Pokémon
  */
  public getNom(): promise.Promise<string> {
    return this.nomElm.getText();
  }

  /**
  * Método que retorna uma promise com o valor do ataque do Pokémon
  * @memberof ProfilePage
  * @param {Promise<string>} value Ataque do Pokémon
  */
  public getAtk(): promise.Promise<string> {
    return this.atkElm.getText();
  }

  /**
  * Método que retorna uma promise com o valor da defesa do Pokémon
  * @memberof ProfilePage
  * @param {Promise<string>} value Defesa do Pokémon
  */
  public getDef(): promise.Promise<string> {
    return this.defElm.getText();
  }

  /**
  * Método que retorna uma promise com o valor da HP do Pokémon
  * @memberof ProfilePage
  * @param {Promise<string>} value HP do Pokémon
  */
  public getHp(): promise.Promise<string> {
    return this.hpElm.getText();
  }


  /**
  * Método que retorna uma promise com o primeiro tipo do Pokémon
  * @memberof ProfilePage
  * @param {Promise<string>} value Primeiro tipo do Pokémon
  */
  public getTipo1(): promise.Promise<string> {
    return this.tipo1Elm.getText();
  }

  /**
  * Método que retorna uma promise com o segundo tipo do Pokémon
  * @memberof ProfilePage
  * @param {Promise<string>} value Segundo tipo do Pokémon
  */
  public getTipo2(): promise.Promise<string> {
    return this.tipo2Elm.getText();
  }

}
