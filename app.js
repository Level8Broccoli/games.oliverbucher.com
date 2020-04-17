'use strict';

const app = new Vue({
    el: '#app',
    data: {
        gameList: [],
        translations: [],
        currentLanguage: 'Deutsch',
    },
    methods: {
        changeLanguage(lang) {
            this.currentLanguage = lang;
        },
        translateGame(game) {
            const translatedGame = {
                ...game
            };
            translatedGame.name = game.name[this.currentLanguage] || game.name;
            translatedGame.description = game.description[this.currentLanguage];
            return translatedGame;
        },
    },
    computed: {
        i18n() {
            if (this.translations.length > 0) {
                return this.translations.find(t => t.language == this.currentLanguage);
            }
            return '';
        },
        games() {
            return this.gameList.map(g => this.translateGame(g)).sort((a, b) => a.name > b.name);
        },
    },
    template: `
        <div>
            <navbar :i18n="i18n" :translations="translations" :currentLanguage="currentLanguage" @change-language="changeLanguage" />
            <game-list :i18n="i18n" :games="games" :currentLanguage="currentLanguage" />
        </div>
    `,
});
