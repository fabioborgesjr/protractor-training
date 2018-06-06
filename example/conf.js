exports.config = {
  /**
     ** Framework de testes que será utilizado
     */
    framework: 'jasmine2',

    /**
     ** Comando que fará com que o Protractor rode os testes diretamente contra o navegador.
	 * Compatível somente com Chrome e Firefox.
     * Desse modo, torna-se desnecessário o comando 'seleniumAddress'.
	 * Caso as propriedades directConnect e seleniumAddress estejam definidas neste arquivo de configuração,
	 * o valor da propriedade directConnect irá prevalecer.
     */
	directConnect:false,
	
	/**
     ** URL do servidor Selenium em execução.
	 * No exemplo abaixo, o servidor do Selenium foi executado localmente na porta 5555
    */
    seleniumAddress: 'http://localhost:5555/wd/hub', 

    /**
     ** Navegador que será utilizado na execução dos testes. 
     * Por padrão será utilizado o navegador Chrome para os testes.
     * Caso haja necessidade de utilizar outro navegador basta configurá-lo no objeto capabilities:
     * O driver do navegador deve estar instalado previamente.
     * É possível atribuir opções específicas para os navegadores que serão executados.
     * As opções variam entre os navegadores e estão disponíveis para Chrome e Firefox.
     * Para o Chrome, as opções específicas são definidas em ChromeOptions
     * No caso do Firefox, as opções específicas seriam definidas dentro de 'moz:firefoxOptions':
        'moz:firefoxOptions': {
            'args': ['--safe-mode']
        }
     */
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            'args': ['--incognito']
        }
        /*
        'browserName': 'firefox',
        'moz:firefoxOptions': {
          'args': ['--safe-mode']
        }
        */
    },

    /**
     ** É possível utilizar vários navegadores em um mesmo teste.
     * Para isso, basta utilizar o objeto multiCapabilities e especificar os navegadores:
     * multiCapabilities: [{
        browserName: 'firefox'
        }, {
        browserName: 'chrome'
        }, {
        browserName: 'internet explorer'
        }]
    */

    /**
     ** Caminho para os testes que serão executados.
     * Podem ser utilizados wildcards ou separar por vírgula para designar mais de um teste.
    */
   specs: ['spec.js'],

    /**
     * Armazena uma URL base para ser utilizada nos testes para acessar páginas de um dominio
    */
    baseUrl: 'http://pokedex-angular-example.herokuapp.com'  
}