'use strict';

var app = new Vue({
    el: '#app',
    data: {
        games: [],
        translations: [],
        currentLanguage: 'Deutsch',
    },
    methods: {
        changeLanguage(e) {
            const lang = e.target.innerText;
            this.currentLanguage = lang;
        },
        complexityScale(num) {
            if (num <= 1) {
                return 'one';
            } else if (num <= 2) {
                return 'two';
            } else if (num <= 3) {
                return 'three';
            } else if (num <= 4) {
                return 'four';
            } else {
                return 'five';
            }
        },
        complexityColor(num) {
            if (num <= 1) {
                return 'has-text-success';
            } else if (num <= 2) {
                return 'has-text-info';
            } else if (num <= 3) {
                return 'has-text-warning';
            } else if (num <= 4) {
                return 'has-text-danger';
            } else {
                return 'has-text-grey-darker';
            }
        },
        nameOfTheGame(game) {
            return game.name[this.currentLanguage] || game.name;
        },
    },
    computed: {
        i18n() {
            if (this.translations.length > 0) {
                return this.translations.find(t => t.language == this.currentLanguage);
            }
            return '';
        },
    },
});
