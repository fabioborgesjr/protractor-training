describe('PokeDEX Demo App', function () {
  
  it('Acessa as informações do Bulbasauro', function () {
    
    // Carrega a homepage da aplicação
    browser.get(browser.baseUrl);

    // Busca e clique em um elemento da tela
    element(by.cssContainingText('span','Bulbasaur')).click();

    // Define um elemento em uma variavel para posterior utilização
    var pokemonName = element(by.binding('PokemonController.pokemon.name'));

    // Verifica se o elemento possui texto igual ao nome "Bulbasaur"
    expect(pokemonName.getText()).toEqual('Bulbasaur');
    
  });

});