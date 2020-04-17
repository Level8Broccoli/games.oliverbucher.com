'use strict';

app.gameList = [{
        id: 1,
        bggUrl: 'https://boardgamegeek.com/boardgame/195842/kampf-gegen-das-bunzlitum',
        name: 'Kampf gegen das Bünzlitum',
        playerCount: {
            min: 3,
            max: 10,
        },
        duration: {
            min: 30,
            max: 30,
        },
        age: {
            min: 18,
        },
        complexity: 1,
        tags: ['niveaulos', 'party', 'adult', 'ch', ],
        description: {
            Deutsch: 'Kampf gegen das Bünzlitum ist ein bitterböses Schweizer Kult-Kartenspiel für bis zu 10 Fieslinge ohne Schamgefühl.',
            English: 'Game only available in German.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepagezoom/img/rJnQdPpIyRPudWFEW7Yq8f258wU=/fit-in/1200x900/filters:no_upscale()/pic2949384.jpg',
    },
    {
        id: 2,
        bggUrl: 'https://boardgamegeek.com/boardgame/147151/concept',
        name: 'Concept',
        playerCount: {
            min: 4,
            max: 12,
        },
        duration: {
            min: 40,
            max: 40,
        },
        age: {
            min: 10,
        },
        complexity: 1.41,
        tags: ['creative', 'coop', 'ch', ],
        description: {
            Deutsch: 'Montagsmaler aber mit Icons.',
            English: 'In Concept, your goal is to guess words through the association of icons.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepagezoom/img/FcJBBUgQiZuuatrvaRxjG6i2fU4=/fit-in/1200x900/filters:no_upscale()/pic4991925.jpg',
    },
    {
        id: 3,
        bggUrl: 'https://boardgamegeek.com/boardgame/98778/hanabi',
        name: 'Hanabi',
        playerCount: {
            min: 2,
            max: 5,
        },
        duration: {
            min: 25,
            max: 25,
        },
        age: {
            min: 8,
        },
        complexity: 1.7,
        tags: ['coop', 'memory', 'ch', ],
        description: {
            Deutsch: 'Versucht gemeinsam die Feuerwerkskarten in der richtigen Reihenfolge zu legen. Twist: Ihr seht nur die Karten der anderen, aber nicht eure eigenen.',
            English: 'Hanabi is a cooperative game in which players try to create the perfect fireworks show by placing the cards on the table in the right order.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepagezoom/img/F6yCXBMt2zZumJaL3yJf6vp1dZ8=/fit-in/1200x900/filters:no_upscale()/pic2007286.jpg',
    },
    {
        id: 4,
        bggUrl: 'https://boardgamegeek.com/boardgame/171131/captain-sonar',
        name: 'Captain Sonar',
        playerCount: {
            min: 2,
            max: 8,
        },
        duration: {
            min: 45,
            max: 60,
        },
        age: {
            min: 14,
        },
        complexity: 2.13,
        tags: ['team', 'realtime', 'ch', ],
        description: {
            Deutsch: 'Zwei Teams versuchen das gegnerische Uboot zu finden und zu versenken. Das alles in Echtzeit und mit vier unterschiedlichen Rollen.',
            English: 'In Captain Sonar, you and your teammates control a state-of-the-art submarine and are trying to locate an enemy submarine in order to blow it out of the water before they can do the same to you. ',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepagezoom/img/V-uAsFAay67K_QcKwzu4ZCR5TsE=/fit-in/1200x900/filters:no_upscale()/pic3013621.png',
    },
    {
        id: 5,
        bggUrl: 'https://boardgamegeek.com/boardgame/225694/decrypto',
        name: 'Decrypto',
        playerCount: {
            min: 3,
            max: 8,
        },
        duration: {
            min: 15,
            max: 45,
        },
        age: {
            min: 12,
        },
        complexity: 1.81,
        tags: ['team', 'words', 'ch', ],
        description: {
            Deutsch: 'Zwei Teams versuchen ihre eigenen Codes an Teamkollegen weiterzugeben und dabei die Codes des anderen Teams zu erraten.',
            English: 'Players compete in two teams in Decrypto, with each trying to correctly interpret the coded messages presented to them by their teammates while cracking the codes they intercept from the opposing team.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepagezoom/img/kcann6owho859IyNxVuqelXrgtA=/fit-in/1200x900/filters:no_upscale()/pic3759421.jpg',
    },
    {
        id: 6,
        bggUrl: 'https://boardgamegeek.com/boardgame/134352/two-rooms-and-boom',
        name: 'Two Rooms and a Boom',
        playerCount: {
            min: 6,
            max: 30,
        },
        duration: {
            min: 7,
            max: 20,
        },
        age: {
            min: 8,
        },
        complexity: 1.43,
        tags: ['team', 'roleplay', 'realtime', 'party', 'lying', ],
        description: {
            Deutsch: 'Team Rot versucht den Bomber in das selbe Zimmer wie der Präsident des Team Blau zu schleusen. Nur weiss man zu beginn nicht, wer im selben Team steckt.',
            English: 'A social deduction/hidden role party game for six or more players – there are two teams: the Red Team and the Blue Team. The Blue Team has a President. The Red Team has a Bomber. Players are equally distributed between two rooms (i.e., separate playing areas). The game consists of five timed rounds. At the end of each round, some players will be swapped into opposing rooms. If the Red Team\'s Bomber is in the same room as the President at the end of the game, then the Red Team wins otherwise the Blue Team wins. Lying encourage',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepagezoom/img/1rgpFADAqzPHwgIW3es7wZI_8EA=/fit-in/1200x900/filters:no_upscale()/pic2335221.png',
    },
    {
        id: 7,
        bggUrl: 'https://boardgamegeek.com/boardgame/215311/downforce',
        name: 'Downforce',
        playerCount: {
            min: 2,
            max: 6,
        },
        duration: {
            min: 20,
            max: 40,
        },
        age: {
            min: 10,
        },
        complexity: 1.78,
        tags: ['race', 'betting', 'ch', ],
        description: {
            Deutsch: 'Ein Rennspiel, in dem dem geheime Wetten abgeschlossen werden können.',
            English: 'Downforce is a card-driven betting, racing, and betting game.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepagezoom/img/kM9jdgGsozthagPypw5vd9ZT-Hk=/fit-in/1200x900/filters:no_upscale()/pic3432548.png',
    },
    {
        id: 8,
        bggUrl: 'https://boardgamegeek.com/boardgame/239188/chronicles-crime',
        name: 'Chronicles of Crime',
        playerCount: {
            min: 1,
            max: 4,
        },
        duration: {
            min: 60,
            max: 90,
        },
        age: {
            min: 14,
        },
        complexity: 2.12,
        tags: ['app', 'coop', 'realtime', 'puzzle', 'ch', ],
        description: {
            Deutsch: 'Chronicles of Crime ist ein kooperatives Detektiv-Spiel, bei dem eine App, ein Brettspiel und ein Hauch von Virtual Reality miteinander kombiniert werden.',
            English: 'Chronicles of Crime is a cooperative game of crime investigation, mixing an app, a board game and a touch of Virtual Reality.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepagezoom/img/TzfUaQJFt9ZB1QkxlhU7V27DFm0=/fit-in/1200x900/filters:no_upscale()/pic4317519.jpg',
    },
    {
        id: 9,
        bggUrl: 'https://boardgamegeek.com/boardgame/284083/crew-quest-planet-nine',
        name: {
            Deutsch: 'Die Crew: Reist gemeinsam zum 9. Planeten',
            English: 'The Crew: The Quest for Planet Nine',
        },
        playerCount: {
            min: 2,
            max: 5,
        },
        duration: {
            min: 20,
            max: 20,
        },
        age: {
            min: 10,
        },
        complexity: 2.2,
        tags: ['coop', 'memory', 'trickTaking', 'ch', ],
        description: {
            Deutsch: 'Um den vielfältigen Herausforderungen gerecht zu werden, ist Kommunikation im Team unerlässlich. Aber das ist im Weltraum schwieriger als erwartet.',
            English: 'In order to meet the varied challenges, communication is essential in the team. But this is more difficult than expected in space.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepagezoom/img/yLWtkMKP9vzfHvOOt2egX-CZmz4=/fit-in/1200x900/filters:no_upscale()/pic5078567.jpg',
    },
    {
        id: 10,
        bggUrl: 'https://boardgamegeek.com/boardgame/218333/rhino-hero-super-battle',
        name: 'Rhino Hero: Super Battle',
        playerCount: {
            min: 2,
            max: 4,
        },
        duration: {
            min: 10,
            max: 20,
        },
        age: {
            min: 5,
        },
        complexity: 1.11,
        tags: ['race', 'dex', 'ch', ],
        description: {
            Deutsch: 'Rhino Hero ist wieder im Einsatz - und diesmal muss nicht nur der wackelige Wolkenkratzer erklommen werden, sondern es kommt auch zu erbitterten Kämpfen zwischen den vier Superhelden Rhino Hero, Giraffenjunge, Big E. und Batguin. Wer wird die Kämpfe gewinnen und sich nicht von den gemeinen, hängenden Klammeraffen stören lassen?',
            English: 'Rhino Hero is back on the job — and this time not only does the wobbly skyscraper need to be climbed, but there will also be fierce battles between the four super-heroes Rhino Hero, Giraffe Boy, Big E. and Batguin. Who will win the battles and not let themselves be bothered by the mean, hanging spider monkeys?',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/psSnPftmcN-PnpViv9OWP42loSE=/fit-in/900x600/filters:no_upscale()/pic3873067.jpg',
    },
    {
        id: 11,
        bggUrl: 'https://boardgamegeek.com/boardgame/244274/crusoe-crew',
        name: {
            Deutsch: 'Kuala',
            English: 'The Crusoe Crew',
        },
        playerCount: {
            min: 1,
            max: 4,
        },
        duration: {
            min: 45,
            max: 45,
        },
        age: {
            min: 7,
        },
        complexity: 1,
        tags: ['coop', 'story', 'puzzle', 'ch', ],
        description: {
            Deutsch: 'In Kuala verkörperst du eine Figur in einer packenden Geschichte, in der deine Entscheidungen deinen Fortschritt bestimmen.',
            English: 'In The Crusoe Crew you embody a character in an immersive story in which your choices guide your progress.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/bm-xcH8gNLgwbgm1Vzm3gY9akt0=/fit-in/900x600/filters:no_upscale()/pic4403063.png',
    },
    {
        id: 12,
        bggUrl: 'https://boardgamegeek.com/boardgame/39856/dixit',
        name: 'Dixit',
        playerCount: {
            min: 3,
            max: 12,
        },
        duration: {
            min: 30,
            max: 30,
        },
        age: {
            min: 8,
        },
        complexity: 1.23,
        tags: ['story', 'creative', 'party', 'ch', ],
        description: {
            Deutsch: 'Der Erzähler legt eine Karte verdeckt auf den Tisch und erzählt etwas dazu. Die anderen Spieler legen ebenfalls eine passende Karte verdeckt auf den Stapel. Nun gilt es herauszufinden, welche Karte dem Erzähler gehört. Der Erzähler erhält jedoch keine Punkte, wenn es alle herausgefunden haben (zu einfach) oder keiner (zu schwer).',
            English: 'The narrator puts a card face down on the table and tells something about it. The other players also place a matching card face down on the deck. Now it is time to find out which card belongs to the narrator. However, the narrator does not receive any points if everyone has found out (too easy) or none (too hard).',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/tXcbYnGJzT7Pg4_4Z05dBvlrrJY=/fit-in/900x600/filters:no_upscale()/pic3483909.jpg',
    },
    {
        id: 13,
        bggUrl: 'https://boardgamegeek.com/boardgame/188834/secret-hitler',
        name: 'Secret Hitler',
        playerCount: {
            min: 5,
            max: 10,
        },
        duration: {
            min: 45,
            max: 45,
        },
        age: {
            min: 13,
        },
        complexity: 1.7,
        tags: ['team', 'lying', 'party', 'roleplay', ],
        description: {
            Deutsch: 'Secret Hitler ist ein dramatisches Spiel politischer Intrigen und Verrat, das im Deutschland der 1930er Jahre spielt. Jeder Spieler wird zufällig und heimlich einem Liberalen oder Faschisten zugeordnet, und ein Spieler ist der Geheime Hitler. Die Faschisten koordinieren sich, um Misstrauen zu säen und ihren kaltblütigen Führer einzusetzen die Liberalen müssen den Geheimen Hitler finden und aufhalten, bevor es zu spät ist. Die liberale Mannschaft hat immer eine Mehrheit.',
            English: 'Secret Hitler is a dramatic game of political intrigue and betrayal set in 1930s Germany. Each player is randomly and secretly assigned to be a liberal or a fascist, and one player is Secret Hitler. The fascists coordinate to sow distrust and install their cold-blooded leader the liberals must find and stop the Secret Hitler before it\'s too late. The liberal team always has a majority.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/lLzsghVIr1cEC6Dii4_GA0ySWpQ=/fit-in/900x600/filters:no_upscale()/pic5164305.jpg',
    },
    {
        id: 14,
        bggUrl: 'https://boardgamegeek.com/boardgame/136991/loony-quest',
        name: 'Looney Quest',
        playerCount: {
            min: 2,
            max: 5,
        },
        duration: {
            min: 20,
            max: 30,
        },
        age: {
            min: 6,
        },
        complexity: 1.2,
        tags: ['drawing', 'realtime', ],
        description: {
            Deutsch: 'Im Zeichenspiel Loony Quest studieren die Spieler herausfordernde Levelkarten und versuchen dann, den Umriss nachzubilden, um Ziele zu erreichen und Hindernisse auf ihren Pausenblättern zu umgehen. Sobald sie fertig sind, legen die Spieler ihre Blätter auf die Levelkarte, um zu sehen, ob die Zeichnungen mit den Zielen übereinstimmen, die sie treffen - oder vermeiden wollten.',
            English: 'In the drawing game Loony Quest, players study challenging level cards, then try to replicate the outline to meet targets and avoid obstacles on their tracing sheets. Once finished, players place their sheets on top of the level card to see whether the drawings line up with the targets they meant to hit — or avoid.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/QsnjLdVxcBZh6dBm65c0b3VLyng=/fit-in/900x600/filters:no_upscale()/pic3043308.jpg',
    },
    {
        id: 15,
        bggUrl: 'https://boardgamegeek.com/boardgamefamily/57676/railroad-ink',
        name: 'Railroad Ink',
        playerCount: {
            min: 1,
            max: 6,
        },
        duration: {
            min: 20,
            max: 30,
        },
        age: {
            min: 8,
        },
        complexity: 1.44,
        tags: ['drawing', 'ch', ],
        description: {
            Deutsch: 'In dem Mehrspieler-Puzzlespiel Railroad Ink ist es Ihr Ziel, so viele Ausgänge auf Ihrem Spielbrett wie möglich zu verbinden.',
            English: 'In the multiplayer puzzle game Railroad Ink, your goal is to connect as many exits on your board as possible.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/uBxwHLf1MnCJPSuEHCX-2cBxTP8=/fit-in/900x600/filters:no_upscale()/pic4968592.png',
    },
    {
        id: 16,
        bggUrl: 'https://boardgamegeek.com/boardgame/244608/menara',
        name: 'Menara',
        playerCount: {
            min: 1,
            max: 4,
        },
        duration: {
            min: 10,
            max: 60,
        },
        age: {
            min: 6,
        },
        complexity: 1.59,
        tags: ['dex', 'coop', 'ch', ],
        description: {
            Deutsch: 'Als eng verbundenes Team in Menara nutzen die Spieler Säulen und wundersam geformte Tempelböden, um ein spektakulär aufragendes Bauwerk voller Ecken und Winkel zu errichten. Kooperation und statisches Geschick sind gefragt, denn für jeden Konstruktionsfehler muss man dem Tempel ein weiteres Stockwerk hinzufügen.',
            English: 'As a tight-knit team in Menara, players use pillars and wondrously-shaped temple floors to build a spectacularly soaring structure full of nooks and crannies. Cooperation and static skills are in demand since for each mistake in construction, you have to add another floor to the temple.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepagezoom/img/ipZGo3hnR1aajYTxENdgcYX8Ryw=/fit-in/1200x900/filters:no_upscale()/pic3944407.jpg',
    },
    {
        id: 17,
        bggUrl: 'https://boardgamegeek.com/boardgamefamily/57030/kosmos-adventure-games-series',
        name: 'Adventure Games',
        playerCount: {
            min: 1,
            max: 4,
        },
        duration: {
            min: 75,
            max: 75,
        },
        age: {
            min: 8,
        },
        complexity: 1.78,
        tags: ['coop', 'story', 'puzzle', 'ch', ],
        description: {
            Deutsch: 'Erkunden Sie Orte, kombinieren Sie Gegenstände und erleben Sie Geschichten in Adventure Games, einer Reihe von kooperativen Spielen des deutschen Verlags KOSMOS.',
            English: 'Explore places, combine items, and experience stories in Adventure Games, a series of co-operative games from German publisher KOSMOS. ',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/B_GYjDUr1dOClyhTDmUjjf4C-Vw=/fit-in/900x600/filters:no_upscale()/pic4863953.png',
    },
    {
        id: 18,
        bggUrl: 'https://boardgamegeek.com/boardgame/147370/robot-turtles',
        name: 'Robot Turtles',
        playerCount: {
            min: 2,
            max: 5,
        },
        duration: {
            min: 15,
            max: 15,
        },
        age: {
            min: 3,
        },
        complexity: 1.35,
        tags: ['puzzle', 'programming', ],
        description: {
            Deutsch: 'Robot Turtles ist ein Brettspiel für Kinder im Alter von 3-8 Jahren. Die Kinder werden es nicht kennen, aber während sie spielen, lernen sie die Grundlagen der Programmierung.',
            English: 'Robot Turtles is a board game for kids ages 3-8. Kids won\'t know it, but while they\'re playing, they\'re learning the fundamentals of programming.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/mqaOy3xoCCAdhGxtCy-kv3-vyhs=/fit-in/900x600/filters:no_upscale()/pic2047441.jpg',
    },
    {
        id: 19,
        bggUrl: 'https://boardgamegeek.com/boardgame/206915/tempel-des-schreckens',
        name: 'Tempel des Schreckens',
        playerCount: {
            min: 3,
            max: 10,
        },
        duration: {
            min: 15,
            max: 15,
        },
        age: {
            min: 8,
        },
        complexity: 1.14,
        tags: ['team', 'bluffing', 'party', ],
        description: {
            Deutsch: 'Endlich habt ihr den Tempel des Schreckens mit seinen Goldschätzen erreicht. Erwartet euch nun Reichtum oder das pure Verderben?',
            English: 'You\'ve finally reached the Temple of Secrets with its immense treasure of gold — but what awaits you here? Fabulous wealth or total destruction? The proud and mysterious temple guards who are hiding amongst the adventurers are trying to lure them onto the wrong track in order to protect their gold. Skillfully and with a deceitful tongue, they try to convince you to open the grave chambers behind which lies a dangerous fire trap. Can you trust anyone in the group when you don\'t know whether they\'re friend or foe?',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/Y369WctkIlFhQmCfUWbyuq765jg=/fit-in/900x600/filters:no_upscale()/pic3141267.png',
    },
    {
        id: 20,
        bggUrl: 'https://boardgamegeek.com/boardgame/150145/skull-king',
        name: 'Skull King',
        playerCount: {
            min: 2,
            max: 6,
        },
        duration: {
            min: 30,
            max: 30,
        },
        age: {
            min: 8,
        },
        complexity: 1.76,
        tags: ['trickTaking', 'betting', 'ch', ],
        description: {
            Deutsch: 'Skull King ist ein Trickspiel ähnlich wie der \'Differenzler Jass\', bei dem die Spieler angeben müssen, wie viele Stiche sie pro Runde zu gewinnen glauben. Ein einzigartiges Element dieses Spiels ist, dass gleichzeitig geboten wird, was zu Runden führt, die manchmal über- oder unterboten werden.',
            English: 'Skull King is a trick-taking game similar to \'Oh Hell!\', \'Wizard\', \'Eucher\' and \'Spades\', with players needing to state how many tricks they think they\'ll win each round. A unique element of this game is that betting takes place simultaneously, leading to rounds that are sometimes over, or under-bid.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/KjdH24s43HNaNpmUAkx7qB0nfxc=/fit-in/900x600/filters:no_upscale()/pic1886632.png',
    },
    {
        id: 21,
        bggUrl: 'https://boardgamegeek.com/boardgame/178900/codenames',
        name: 'Codenames',
        playerCount: {
            min: 2,
            max: 8,
        },
        duration: {
            min: 15,
            max: 15,
        },
        age: {
            min: 10,
        },
        complexity: 1.3,
        tags: ['team', 'party', 'words', 'ch', ],
        description: {
            Deutsch: 'Bei Codenamen treten zwei Teams gegeneinander an, um zu sehen, wer zuerst mit all seinen Agenten Kontakt aufnehmen kann. Die Spymaster geben Ein-Wort-Hinweise, die auf mehrere Wörter auf der Tafel verweisen können. Ihre Teamkollegen versuchen, Wörter in der richtigen Farbe zu erraten, während sie diejenigen vermeiden, die zum gegnerischen Team gehören. Und jeder will dem Attentäter ausweichen.',
            English: 'In Codenames, two teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/BwJJTrofiaH0Muxuo5rv0VCmuCY=/fit-in/900x600/filters:no_upscale()/pic2582929.jpg',
    },
    {
        id: 22,
        bggUrl: 'https://boardgamegeek.com/boardgame/175117/celestia',
        name: 'Celestia',
        playerCount: {
            min: 2,
            max: 6,
        },
        duration: {
            min: 30,
            max: 30,
        },
        age: {
            min: 8,
        },
        complexity: 1.32,
        tags: ['bluffing', 'ch', ],
        description: {
            Deutsch: 'In Celestia steigen Sie mit einem Team von Abenteurern in ein Flugzeug, um viele Reisen durch die Städte von Celestia zu unternehmen und ihre wunderbaren Schätze zu bergen. Ihre Reise wird nicht sicher sein, aber Sie werden versuchen, der reichste Abenteurer zu sein, indem Sie die wertvollsten Schätze sammeln!',
            English: 'In Celestia you board an aircraft with a team of adventurers to perform many trips through the cities of Celestia and recover their wonderful treasures. Your journey will not be safe, but you will attempt to be the richest adventurer by collecting the most precious treasures!',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/eHGT0BNj7JbWL87oAqbtdO7bnpw=/fit-in/900x600/filters:no_upscale()/pic2577990.jpg',
    },
    {
        id: 23,
        bggUrl: 'https://boardgamegeek.com/boardgame/28023/jamaica',
        name: 'Jamaica',
        playerCount: {
            min: 2,
            max: 6,
        },
        duration: {
            min: 30,
            max: 60,
        },
        age: {
            min: 8,
        },
        complexity: 1.65,
        tags: ['race', 'ch', ],
        description: {
            Deutsch: 'Hierbei handelt es sich um ein taktisches Piratenrennspiel mit Spielerinteraktion und Seitentoren (z.B. Umwege für Schätze). Der Gewinner ist der Spieler, der seine Position im Rennen am besten mit seinem Erfolg bei den Seitentoren ausgleicht.',
            English: 'This is a pirate-themed tactical race game with player interaction and side goals (e.g. detouring for treasure). The winner is the player who best balances their position in the race with their success at the side goals.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/S3vB9iH4B0QhsHhc_P6uU9hyyoY=/fit-in/900x600/filters:no_upscale()/pic1502119.jpg',
    },
    {
        id: 24,
        bggUrl: 'https://boardgamegeek.com/boardgame/9209/ticket-ride',
        name: {
            Deutsch: 'Zug um Zug',
            English: 'Ticket to Ride',
        },
        playerCount: {
            min: 2,
            max: 5,
        },
        duration: {
            min: 30,
            max: 60,
        },
        age: {
            min: 8,
        },
        complexity: 1.86,
        tags: ['ch', ],
        description: {
            Deutsch: 'Die Spieler sammeln Karten von verschiedenen Waggontypen, die sie dann zur Beanspruchung von Bahnstrecken verwenden. Je länger die Strecken sind, desto mehr Punkte erhalten sie. Zusätzliche Punkte erhalten diejenigen, die Zielkarten erfüllen - Zielkarten, die entfernte Städte verbinden.',
            English: 'Players collect cards of various types of train cars they then use to claim railway routes. The longer the routes, the more points they earn. Additional points come to those who fulfill Destination Tickets – goal cards that connect distant cities.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/JrPAWdwNO6pAJGQ0snkUw7A0OcI=/fit-in/900x600/filters:no_upscale()/pic38668.jpg',
    },
    {
        id: 25,
        bggUrl: 'https://boardgamegeek.com/boardgame/82168/escape-aliens-outer-space',
        name: 'Escape from the Aliens in Outer Space',
        playerCount: {
            min: 2,
            max: 8,
        },
        duration: {
            min: 20,
            max: 45,
        },
        age: {
            min: 12,
        },
        complexity: 1.86,
        tags: ['team', 'bluffing', 'ch', ],
        description: {
            Deutsch: 'Escape from the Aliens in Outer Space ist ein Kartenspiel der Strategie und des Bluffs, das auf einem schwer beschädigten Weltraumforschungsschiff spielt. Die Bordsysteme sind ausgefallen und haben das Schiff in die Dunkelheit gestürzt. Aber noch schlimmer: Eine mysteriöse außerirdische Seuche hat sich an Bord eingeschlichen und verwandelt die menschliche Besatzung in schreckliche Monster! Die verbliebenen Besatzungsmitglieder versuchen verzweifelt, ihr Leben zu retten, indem sie aus dem heruntergekommenen Raumschiff fliehen, aber in der Dunkelheit lauern die Außerirdischen ... hungrig nach Menschenfleisch.',
            English: 'Escape from the Aliens in Outer Space is a card game of strategy and bluff set on a badly damaged deep space research ship. On-board systems have failed, plunging the ship into darkness. But even worse: A mysterious alien plague has crept aboard and is transforming the human crew into horrendous monsters! The remaining crewmen desperately try to save their lives by escaping from the derelict spaceship, but in the darkness the aliens are lurking...hungry for human flesh.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/8gt1MO6UUn53Yu0gPpv647eDSd0=/fit-in/900x600/filters:no_upscale()/pic2792336.png',
    },
    {
        id: 26,
        bggUrl: 'https://boardgamegeek.com/boardgame/275467/letter-jam',
        name: 'Letter Jam',
        playerCount: {
            min: 2,
            max: 6,
        },
        duration: {
            min: 45,
            max: 45,
        },
        age: {
            min: 10,
        },
        complexity: 2.03,
        tags: ['coop', 'words', 'ch', ],
        description: {
            Deutsch: 'Letter Jam ist ein kooperatives Wortspiel für 2 bis 6 Spieler, bei dem sich die Spieler gegenseitig dabei helfen, aus den Buchstaben am Tisch sinnvolle Wörter zu bilden. Der Trick besteht darin, die Buchstabenkarte so zu halten, dass sie nur für andere Spieler und nicht für Sie sichtbar ist.',
            English: 'Letter Jam is a 2-6 player cooperative word game where players assist each other in composing meaningful words from letters around the table. The trick is holding the letter card so that it’s only visible to other players and not to you.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/rEwj6edARkCUXyGDb6QHcuJQPNU=/fit-in/900x600/filters:no_upscale()/pic4853794.jpg',
    },
    {
        id: 27,
        bggUrl: 'https://boardgamegeek.com/boardgame/219215/werewords',
        name: {
            Deutsch: 'Werwörter',
            English: 'Werewords',
        },
        playerCount: {
            min: 4,
            max: 10,
        },
        duration: {
            min: 10,
            max: 10,
        },
        age: {
            min: 8,
        },
        complexity: 1.18,
        tags: ['coop', 'traitor', 'words', 'app', 'ch', ],
        description: {
            Deutsch: 'Bei Werwörtern erraten die Spieler ein Geheimwort, indem sie Fragen mit""Ja"" oder ""Nein"" stellen. Finden Sie das Zauberwort heraus, bevor die Zeit abgelaufen ist, und Sie gewinnen! Einer der Spieler ist jedoch insgeheim ein Werwolf, der nicht nur gegen Sie arbeitet, sondern das Wort auch kennt. Wenn Sie das Wort nicht rechtzeitig erraten, können Sie trotzdem gewinnen, indem Sie den Werwolf identifizieren!',
            English: 'In Werewords, players guess a secret word by asking ""yes"" or ""no"" questions. Figure out the magic word before time is up, and you win! However, one of the players is secretly a werewolf who is not only working against you, but also knows the word. If you don\'t guess the word in time, you can still win by identifying the werewolf!',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/mh7NsK9LY7ay-VgJytFTfknuk04=/fit-in/900x600/filters:no_upscale()/pic4415135.jpg',
    },
    {
        id: 28,
        bggUrl: 'https://boardgamegeek.com/boardgame/83195/ghost-blitz',
        name: {
            Deutsch: 'Geistesblitz',
            English: 'Ghost Blitz',
        },
        playerCount: {
            min: 2,
            max: 8,
        },
        duration: {
            min: 20,
            max: 20,
        },
        age: {
            min: 5,
        },
        complexity: 1.14,
        tags: ['dex', 'ch', ],
        description: {
            Deutsch: 'Das blitzschnelle Form- und Farberkennungsspiel, das sicher die Reflexe von Kindern, Familien und Spielern gleichermaßen auf die Probe stellt.',
            English: 'The lightning fast shape and color recognition game that is sure to test the reflexes of kids, families and gamers alike.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/39Zbr5IMi5Azj9KCR8X-zF_SDqM=/fit-in/900x600/filters:no_upscale()/pic2034769.jpg',
    },
    {
        id: 29,
        bggUrl: 'https://boardgamegeek.com/boardgame/273477/obscurio',
        name: 'Obscurio',
        playerCount: {
            min: 2,
            max: 8,
        },
        duration: {
            min: 40,
            max: 40,
        },
        age: {
            min: 8,
        },
        complexity: 1.91,
        tags: ['traitor',
            'creative',
            'coop',
            'ch',
        ],
        description: {
            Deutsch: 'Das Grimoire führt ihr Team mit Hilfe von Bildern, auf denen sie auf bestimmte Details hinweisen, zum Ausgang. Gemeinsam müssen die anderen Spieler so schnell wie möglich den Ausgang finden und dabei vermeiden, die falschen Karten zu ziehen. Ein Mitglied der Mannschaft ist jedoch ein Verräter, der die anderen Spieler in die Irre führen will. Auf dem Weg zum Ausgang der Bibliothek gibt es eine Vielzahl von Fallen, die die Kommunikation zwischen den Spielern erschweren!',
            English: 'The Grimoire guides their team towards the exit using images, upon which they point at certain details. Working together, the other players have to find the exit as quickly as possible while avoiding picking the wrong cards. However, a member of the team is a traitor looking to lead the other players astray. A wide variety of traps are on your way to the exit of the library, making player communication harder!',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepagezoom/img/5vIXY0-uojENNohqdB07ezvsv30=/fit-in/1200x900/filters:no_upscale()/pic4611791.jpg',
    },
    {
        id: 30,
        bggUrl: 'https://boardgamegeek.com/boardgame/199478/flamme-rouge',
        name: 'Flamme Rouge',
        playerCount: {
            min: 2,
            max: 4,
        },
        duration: {
            min: 30,
            max: 45,
        },
        age: {
            min: 8,
        },
        complexity: 1.67,
        tags: ['race', ],
        description: {
            Deutsch: 'Flamme Rouge ist ein rasantes, taktisches Radrennspiel, bei dem jeder Spieler ein Team von zwei Fahrern steuert: einen Rouleur und einen Sprinteur. Das Ziel der Spieler ist es, als Erster mit einem ihrer Fahrer die Ziellinie zu überqueren. Die Spieler bringen ihre Fahrer vorwärts, indem sie Karten von einem bestimmten Kartensatz dieses Fahrers ziehen und spielen und diesen nach und nach aufbrauchen. Verwenden Sie Windschatten, um Erschöpfung zu vermeiden und Ihr Team für einen gut getimten Sprint zum Sieg zu positionieren.',
            English: 'Flamme Rouge is a fast-paced, tactical bicycle racing game where each player controls a team of two riders: a Rouleur and a Sprinteur. The players’ goal is to be the first to cross the finish line with one of their riders. Players move their riders forward by drawing and playing cards from that riders specific deck, depleting it as they go. Use slipstreams to avoid exhaustion and position your team for a well timed sprint for the win.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/b-A7fjmhsvR9AbtmoEt7Ba_aCNE=/fit-in/900x600/filters:no_upscale()/pic3482521.jpg',
    },
    {
        id: 31,
        bggUrl: 'https://boardgamegeek.com/boardgame/39463/cosmic-encounter',
        name: 'Cosmic Encounter',
        playerCount: {
            min: 3,
            max: 5,
        },
        duration: {
            min: 60,
            max: 120,
        },
        age: {
            min: 12,
        },
        complexity: 2.57,
        tags: ['alliance', 'bluffing', 'ch', ],
        description: {
            Deutsch: 'In Cosmic Encounter ist jeder Spieler der Anführer einer außerirdischen Rasse. Wenn ein Spieler an der Reihe ist, wird er oder sie zur Offensive. Die Offensive trifft auf einen anderen Spieler auf einem Planeten, indem er eine Gruppe seiner Schiffe durch das Hyperraumtor zu diesem Planeten bewegt. Die Offensive zieht aus dem Schicksalsdeck, das Farben, Wildnis und Besonderheiten enthält. Er oder sie nimmt dann das Hyperraumtor und zeigt auf einen Planeten in dem System, das durch die gezogene Schicksalskarte angezeigt wird. Beide Seiten können Verbündete einladen, eine Begegnungskarte sowie Spezialkarten ausspielen und versuchen, die Begegnung zu ihren Gunsten zu beeinflussen.',
            English: 'In Cosmic Encounter, each player is the leader of an alien race. On a player\'s turn, he or she becomes the offense. The offense encounters another player on a planet by moving a group of his or her ships through the hyperspace gate to that planet. The offense draws from the destiny deck which contains colors, wilds and specials. He or she then takes the hyperspace gate and points at one planet in the system indicated by the drawn destiny card. The offense vs. the defenses ships are in the encounter and both sides are able to invite allies, play an encounter card as well as special cards to try and tip the encounter in their favor.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/djutUbnd9feqHovy7jffiG-BSY8=/fit-in/900x600/filters:no_upscale()/pic4243113.jpg',
    },
    {
        id: 32,
        bggUrl: 'https://boardgamegeek.com/boardgame/129622/love-letter',
        name: 'Love Letter',
        playerCount: {
            min: 2,
            max: 4,
        },
        duration: {
            min: 20,
            max: 20,
        },
        age: {
            min: 8,
        },
        complexity: 1.19,
        tags: ['ch', ],
        description: {
            Deutsch: 'Love Letter ist ein Spiel von Risiko, Deduktion und Glück für 2-4 Spieler. Ihr Ziel ist es, Ihren Liebesbrief in die Hände von Prinzessin Annette zu bekommen, während Sie die Briefe von konkurrierenden Bewerbern ablenken. Von einem Stapel mit nur sechzehn Karten beginnt jeder Spieler mit nur einer Karte in der Hand eine Karte wird aus dem Spiel entfernt. In einem Spielzug ziehen Sie eine Karte und spielen eine Karte aus, wobei Sie versuchen, andere aufzudecken und aus dem Spiel zu werfen. Mächtige Karten führen zu frühen Gewinnen, machen Sie aber zum Ziel. Verlassen Sie sich jedoch zu lange auf schwächere Karten, und Ihr Brief könnte ins Feuer geworfen werden!',
            English: 'Love Letter is a game of risk, deduction, and luck for 2–4 players. Your goal is to get your love letter into Princess Annette\'s hands while deflecting the letters from competing suitors. From a deck with only sixteen cards, each player starts with only one card in hand one card is removed from play. On a turn, you draw one card, and play one card, trying to expose others and knock them from the game. Powerful cards lead to early gains, but make you a target. Rely on weaker cards for too long, however, and your letter may be tossed in the fire!',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/hOPZoId2WWSL0V21868AyN6nhQs=/fit-in/900x600/filters:no_upscale()/pic1401448.jpg',
    },
    {
        id: 33,
        bggUrl: 'https://boardgamegeek.com/boardgame/230916/chop-chop',
        name: 'Chop! Chop!',
        playerCount: {
            min: 2,
            max: 5,
        },
        duration: {
            min: 15,
            max: 15,
        },
        age: {
            min: 6,
        },
        complexity: 1,
        tags: ['coop', ],
        description: {
            Deutsch: 'Ein halb-kooperatives Strategiespiel für Mäusespieler: Ein Spieler spielt die Katze, die anderen die Mäuse. Abwechselnd spielt eine Maus und dann die Katze. Die Mäuse müssen zehn Käsestücke sammeln, während die Katze versucht, die vier Mäuse zu fangen.',
            English: 'A semi-cooperative strategy game for mice players: One player plays the cat, the others, the mice. Alternately, one mouse plays, and then the cat. The mice need to collect ten pieces of cheese, whilst the cat tries to catch the four mice.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/MekJiompTwN3PZIQuqljvZP8ET4=/fit-in/900x600/filters:no_upscale()/pic3750948.jpg',
    },
    {
        id: 34,
        bggUrl: 'https://boardgamegeek.com/boardgame/203427/fabled-fruit',
        name: {
            Deutsch: 'Fabelsaft',
            English: 'Fabled Fruit',
        },
        playerCount: {
            min: 2,
            max: 5,
        },
        duration: {
            min: 20,
            max: 30,
        },
        age: {
            min: 8,
        },
        complexity: 1.59,
        tags: ['ch', ],
        description: {
            Deutsch: 'Fabled Fruit ist ein Fabel-Spiel, ein neues und einzigartiges Konzept für Spielerlebnisse, bei denen sich das Gameplay mit der Zeit verändert. Das Spiel beginnt in einem anfänglichen, einfachen Zustand, aber je tiefer man in das Spielsystem eindringt, desto mehr entwickeln sich die Mechanismen und das Gameplay mit der Zeit.',
            English: 'Fabled Fruit is a Fable game, a new and unique concept in game experiences, where the gameplay changes over time. The game starts in an initial, simple state, but as you explore deeper into the game system, the mechanisms and gameplay will evolve over time.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/ZGDkfW6hK75Mm_uXRgFVnFYJSbE=/fit-in/900x600/filters:no_upscale()/pic3086825.jpg',
    },
    {
        id: 35,
        bggUrl: 'https://boardgamegeek.com/boardgame/146312/ghost-fightin-treasure-hunters',
        name: {
            Deutsch: 'Geister, Geister, Schatzsuchmeister!',
            English: 'Ghost Fightin\' Treasure Hunters!',
        },
        playerCount: {
            min: 2,
            max: 4,
        },
        duration: {
            min: 30,
            max: 30,
        },
        age: {
            min: 5,
        },
        complexity: 1.66,
        tags: ['coop', 'ch', ],
        description: {
            Deutsch: 'In Geister, Geister, Schatzsuchmeister! sind vier unerschrockene Schatzsucher auf der Suche nach kostbaren, versteckten Juwelen, aber die Phantome in diesem Haus geben ihr Kopfgeld nicht so leicht auf. Da ihre schaurige Zahl immer größer wird, müssen die Schatzsucher zusammenarbeiten, um alle acht Juwelen zu erbeuten und aus dem Haus zu entkommen, bevor es vollständig von Geistern heimgesucht wird, sonst droht ihnen ihr eigener grausamer Untergang.',
            English: 'In Ghost Fightin\' Treasure Hunters four intrepid treasure hunters are on a quest, searching for precious hidden jewels, but the phantoms in this house do not give up their bounty easily. As their ghoulish numbers grow, the treasure hunters must work together to acquire all eight jewels and escape the house before it becomes fully haunted or else face their own gruesome demise.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/bP5YjGeL_0DYxeuSE6JTQMH98YY=/fit-in/900x600/filters:no_upscale()/pic2336485.jpg',
    },
    {
        id: 36,
        bggUrl: 'https://boardgamegeek.com/boardgame/177524/icecool',
        name: 'ICECOOL',
        playerCount: {
            min: 2,
            max: 4,
        },
        duration: {
            min: 30,
            max: 30,
        },
        age: {
            min: 5,
        },
        complexity: 1.02,
        tags: ['dex', 'ch', ],
        description: {
            Deutsch: 'ICECOOL ist ein Schnipps-Spiel, bei dem in jeder Runde einer der Spieler die Rolle des Fängers übernimmt - sein Ziel wird es sein, sich gegenseitig Pinguine zu fangen und dafür Punkte zu bekommen. Die anderen werden versuchen, durch mehrere Türen zu rennen und so auf ihrem Weg Fische (die ihnen Punkte geben) zu gewinnen.',
            English: 'ICECOOL is a flicking game in which each round one of the players takes the role of the Hall Monitor (also called ""the Catcher"") – his aim will be to catch each other penguin and get points for that. The others (also known a""Runners"") will try to run through several doors, thus gaining fish (that give them points) on their way.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/4X9duGZHgkCwBa3lpuZHgto6axo=/fit-in/900x600/filters:no_upscale()/pic2937209.png',
    },
    {
        id: 37,
        bggUrl: 'https://boardgamegeek.com/boardgame/191004/my-first-stone-age',
        name: {
            Deutsch: 'Stone Age Junior',
            English: 'My First Stone Age',
        },
        playerCount: {
            min: 2,
            max: 4,
        },
        duration: {
            min: 15,
            max: 15,
        },
        age: {
            min: 4,
        },
        complexity: 1.13,
        tags: ['memory', ],
        description: {
            Deutsch: 'Reisen Sie mit Jonon und Jada, zwei Steinzeitkindern, in die Vergangenheit, um wieder zu entdecken, wie die ersten Menschen die Welt um sich herum besiedelten.',
            English: 'Travel to the past with Jonon and Jada, two stone age children, to rediscover how the first humans settled the world around them.',
        },
        coverImg: 'https://cf.geekdo-images.com/imagepage/img/ZeDa3GUOOA7ldzb3fb1_NJAXMg8=/fit-in/900x600/filters:no_upscale()/pic2895370.png',
    },
];
