'use strict';

var app = new Vue({
    el: '#app',
    data: {
        games: [{
            name: 'Spieltitel',
            img: 'https://source.unsplash.com/random',
            playerCount: {
                min: 2,
                max: 5,
            }
        },
        {
            name: 'Spieltitel2',
            img: 'https://source.unsplash.com/random',
            playerCount: {
                min: 1,
                max: 10,
            }
        }]
    }
})
