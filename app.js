'use strict';

const app = new Vue({
    el: '#app',
    data: {
        gameList: [],
        translations: [],
        currentLanguage: 'Deutsch',
        sort: {
            type: 'name',
            asc: true,
        },
    },
    methods: {
        changeLanguage(lang) {
            this.currentLanguage = lang;
            document.title = this.i18n['siteTitle'];
        },
        translateGame(game) {
            const translatedGame = {
                ...game
            };
            translatedGame.name = game.name[this.currentLanguage] || game.name;
            translatedGame.description = game.description[this.currentLanguage];
            return translatedGame;
        },
        sortGames(a, b) {
            const type = this.sort.type;
            const subtype = this.sort.subtype;
            const asc = this.sort.asc;

            if (asc && !subtype) {
                return a[type] > b[type] ? 1 : -1;
            } else if (!asc && !subtype) {
                return a[type] < b[type] ? 1 : -1;
            } else if (asc && subtype) {
                return a[type][subtype] > b[type][subtype] ? 1 : -1;
            } else {
                return a[type][subtype] < b[type][subtype] ? 1 : -1;
            }
        },
        changeSort({
            type,
            subtype
        }) {
            if (this.sort.type === type) {
                this.sort.asc = !this.sort.asc;
            } else {
                this.sort.type = type;
                this.sort.asc = true;
            }
            this.sort.subtype = subtype;
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
            return this.gameList.map(g => this.translateGame(g)).sort(this.sortGames);
        },
    },
    template: `
        <div>
            <navbar :i18n="i18n" :translations="translations" :currentLanguage="currentLanguage" @change-language="changeLanguage" />
            <game-list :i18n="i18n" :games="games" :currentLanguage="currentLanguage" :sort="sort" @sort-by="changeSort" />
        </div>
    `,
});
