import { Config, browser, protractor } from "protractor";

export let config: Config = {

    directConnect: true,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--incognito'
            ],
        },
    },

    specs: ['../pokedex/specs/**.final-spec.js']

}
