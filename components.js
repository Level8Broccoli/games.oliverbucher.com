'use strict';

Vue.component('navbar', {
    template: `
<nav class="navbar has-shadow is-dark">
    <div class="container">
        <div class="navbar-brand">
            <div class="navbar-item">
                <h1 class="title has-text-white is-size-5-mobile">
                    {{ i18n.siteTitle }}
                </h1>
            </div>
            <a class="navbar-item is-size-7-mobile" v-for="translation in translations" @click="changeLanguage">
                <strong v-if="translation.language == currentLanguage">{{ translation.language }}</strong>
                <span v-else>{{ translation.language }}</span>
            </a>
        </div>
    </div>
</nav>
`,
    props: ['i18n', 'translations', 'currentLanguage'],
    methods: {
        changeLanguage(e) {
            const lang = e.target.innerText;
            this.$emit('change-language', lang);
        },
    }
});

Vue.component('game-filter', {
    template: `
<section class="section">
    <div class="container">
    <h2 class="title">Filter <button class="button is-small" @click="filter = !filter">Ein/Aus</button></h2>
        <div v-show="filter">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">{{ i18n.playerCount }}</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="number" placeholder="Minimum">
                        </p>
                    </div>
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="number" placeholder="Maxmimum">
                        </p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">{{ i18n.duration }}</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="number" placeholder="Minimum">
                        </p>
                    </div>
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="number" placeholder="Maxmimum">
                        </p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">{{ i18n.age }}</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="number" placeholder="Minimum">
                        </p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary">
                        Send message
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>
    `,
    data() {
        return {
            filter: true,
        };
    },
    props: ['i18n']
});

Vue.component('game-list', {
    template: `
<section class="section">
    <div class="container">
        <div class="table-container">
            <table class="table is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th></th>
                        <th @click="sortByTitle" class="pointer">
                            <span :class="this.sort.type !== 'name' ? 'has-text-grey' : ''">
                                {{ i18n.gameTitle }}
                            </span>
                        </th>
                        <th @click="sortByPlayerCount" class="pointer">
                            <span :class="this.sort.type !== 'playerCount' ? 'has-text-grey' : ''">
                                {{ i18n.playerCount }}
                            </span>
                        </th>
                        <th @click="sortByDuration" class="pointer">
                            <span :class="this.sort.type !== 'duration' ? 'has-text-grey' : ''">
                                {{ i18n.duration }}
                            </span>
                        </th>
                        <th @click="sortByAge" class="pointer">
                            <span :class="this.sort.type !== 'age' ? 'has-text-grey' : ''">
                                {{ i18n.age }}
                            </span>
                        </th>
                        <th @click="sortByComplexity" class="pointer">
                            <span :class="this.sort.type !== 'complexity' ? 'has-text-grey' : ''">
                                {{ i18n.complexity }}
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <game-entry v-for="game in games" :game="game" :key="game.id" :i18n="i18n" :currentLanguage="currentLanguage" />
                </tbody>
            </table>
        </div>
    </div>
</section>
    `,
    props: ['i18n', "games", "currentLanguage", "sort"],
    methods: {
        sortByTitle() {
            this.$emit('sort-by', {
                type: 'name'
            });
        },
        sortByPlayerCount() {
            this.$emit('sort-by', {
                type: 'playerCount',
                subtype: 'min'
            });
        },
        sortByDuration() {
            this.$emit('sort-by', {
                type: 'duration',
                subtype: 'min'
            });
        },
        sortByAge() {
            this.$emit('sort-by', {
                type: 'age',
                subtype: 'min'
            });
        },
        sortByComplexity() {
            this.$emit('sort-by', {
                type: 'complexity'
            });
        },
    }
});

Vue.component('game-entry', {
    template: `
<tr>
    <td>
        <figure class="image is-64x64">
            <img :src="game.coverImg" :alt="game.name" style="object-fit: scale-down; height: 100%; width: 100%;">
        </figure>
    </td>
    <td>
        <strong class="has-text-grey-darker">
            {{ game.name }}
        </strong>
        <div v-if="game.tags" class="tags">
            <span v-for="tag in game.tags" class="tag is-info" :class="tag == 'ch' ? 'is-light' : ''">{{ i18n[tag] }}</span>
        </div>
    </td>
    <td>{{ game.playerCount.min }} &ndash; {{ game.playerCount.max }}</td>
    <td v-html="duration(game.duration)"></td>
    <td>{{ game.age.min }}+</td>
    <td>
        <span class="icon" :class="complexityColor(game.complexity)">
            <i class="fas" :class="'fa-dice-' + complexityScale(game.complexity)"></i>
        </span>
    </td>
</tr>
`,
    props: ['game', 'i18n', 'currentLanguage'],
    methods: {
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
                return 'has-text-greyer';
            }
        },
        duration({
            min,
            max
        }) {
            if (min !== max) {
                return min;
            } else {
                return `${min} &ndash; ${max}`;
            }
        },
    },
});
