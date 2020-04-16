app.games = [{
        name: {
            Deutsch: 'Deutscher Titel',
            English: 'Englischer Titel',
        },
        img: 'https://source.unsplash.com/random/300x600',
        playerCount: {
            min: 2,
            max: 5,
        },
        duration: {
            min: 20,
            max: 300,
        },
        age: {
            min: 10,
        },
        complexity: 5,
    }, {
        name: {
            Deutsch: 'Deutscher Titel',
            English: 'Englischer Titel',
        },
        tags: ['chAvailable'],
        img: 'https://source.unsplash.com/random/300x600',
        playerCount: {
            min: 2,
            max: 5,
        },
        duration: {
            min: 20,
            max: 300,
        },
        age: {
            min: 10,
        },
        complexity: 5,
    },
    {
        name: {
            Deutsch: 'Deutscher Titel',
            English: 'Englischer Titel',
        },
        tags: ['coop', 'familyFriendly', 'adultsOnly'],
        img: 'https://source.unsplash.com/random/345x393',
        playerCount: {
            min: 1,
            max: 10,
        },
        duration: {
            min: 20,
            max: 300,
        },
        age: {
            min: 8,
        },
        complexity: 2.3,
    }
];

app.translations = [{
        language: 'Deutsch',
        siteTitle: 'Spiel-Empfehlungen',
        gameTitle: 'Name',
        playerCount: 'Anzahl Spieler',
        duration: 'Dauer (Minuten)',
        age: 'Empfohlenes Alter',
        complexity: 'Komplexität (1-5)',
        coop: 'Kooperativ',
        familyFriendly: 'Familie',
        adultsOnly: '18+',
        chAvailable: 'Erhältlich in CH',
    },
    {
        language: 'English',
        siteTitle: 'Game Suggestions',
        gameTitle: 'Name',
        playerCount: 'Player Count',
        duration: 'Duration (minutes)',
        age: 'Suggested age',
        complexity: 'Complexity (1-5)',
        coop: 'Cooperative',
        familyFriendly: 'Family',
        adultsOnly: '18+',
        chAvailable: 'Available in CH',
    }
];
