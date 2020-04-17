'use strict';

const app = new Vue({
    el: '#app',
    data: {
        games: [],
        translations: [],
        currentLanguage: 'Deutsch',
    },
    methods: {
        changeLanguage(lang) {
            this.currentLanguage = lang;
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
    template: `
        <div>
            <navbar :i18n="i18n" :translations="translations" :currentLanguage="currentLanguage" @change-language="changeLanguage" />
            <game-list :i18n="i18n" :games="games" :currentLanguage="currentLanguage" />
        </div>
    `,
});
