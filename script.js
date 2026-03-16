// MCU Movies Dataset (Sample covering key films across phases)
const mcuMovies = [
    {
        id: "captain-america-first-avenger",
        title: "Captain America: The First Avenger",
        releaseDate: "2011-07-22",
        duration: 124,
        phase: 1,
        description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a Super-Soldier serum.",
        imdb: 6.9,
        trailerId: "JerVcgHbO26",
        releaseOrder: 5,
        chronologicalOrder: 1,
        poster: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg"
    },
    {
        id: "captain-marvel",
        title: "Captain Marvel",
        releaseDate: "2019-03-08",
        duration: 123,
        phase: 3,
        description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war.",
        imdb: 6.8,
        trailerId: "Z1BCujX3pw8",
        releaseOrder: 21,
        chronologicalOrder: 2,
        poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg"
    },
    {
        id: "iron-man",
        title: "Iron Man",
        releaseDate: "2008-05-02",
        duration: 126,
        phase: 1,
        description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        imdb: 7.9,
        trailerId: "8ugaeA-nMTc",
        releaseOrder: 1,
        chronologicalOrder: 3,
        poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
    },
    {
        id: "iron-man-2",
        title: "Iron Man 2",
        releaseDate: "2010-05-07",
        duration: 124,
        phase: 1,
        description: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man.",
        imdb: 6.9,
        trailerId: "wKtcmiifycU",
        releaseOrder: 3,
        chronologicalOrder: 4,
        poster: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg"
    },
    {
        id: "hulk",
        title: "The Incredible Hulk",
        releaseDate: "2008-06-13",
        duration: 112,
        phase: 1,
        description: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
        imdb: 6.6,
        trailerId: "xbqNb2PFKKA",
        releaseOrder: 2,
        chronologicalOrder: 5,
        poster: "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg"
    },
    {
        id: "thor",
        title: "Thor",
        releaseDate: "2011-05-06",
        duration: 115,
        phase: 1,
        description: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
        imdb: 7.0,
        trailerId: "JOddp-nlNvQ",
        releaseOrder: 4,
        chronologicalOrder: 6,
        poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg"
    },
    {
        id: "avengers",
        title: "The Avengers",
        releaseDate: "2012-05-04",
        duration: 143,
        phase: 1,
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        imdb: 8.0,
        trailerId: "eOrNdBpGMv8",
        releaseOrder: 6,
        chronologicalOrder: 7,
        poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
    },
    {
        id: "iron-man-3",
        title: "Iron Man 3",
        releaseDate: "2013-05-03",
        duration: 130,
        phase: 2,
        description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
        imdb: 7.1,
        trailerId: "Ke1Y3P9D0Bc",
        releaseOrder: 7,
        chronologicalOrder: 8,
        poster: "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg"
    },
    {
        id: "thor-dark-world",
        title: "Thor: The Dark World",
        releaseDate: "2013-11-08",
        duration: 112,
        phase: 2,
        description: "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
        imdb: 6.8,
        trailerId: "npvJ9FTgZc",
        releaseOrder: 8,
        chronologicalOrder: 9,
        poster: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg"
    },
    {
        id: "winter-soldier",
        title: "Captain America: The Winter Soldier",
        releaseDate: "2014-04-04",
        duration: 136,
        phase: 2,
        description: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat.",
        imdb: 7.8,
        trailerId: "7SlILk2WMTI",
        releaseOrder: 9,
        chronologicalOrder: 10,
        poster: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg"
    },
    {
        id: "gotg",
        title: "Guardians of the Galaxy",
        releaseDate: "2014-08-01",
        duration: 121,
        phase: 2,
        description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        imdb: 8.0,
        trailerId: "d96cjJhvlMA",
        releaseOrder: 10,
        chronologicalOrder: 11,
        poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
    },
    {
        id: "gotg-vol2",
        title: "Guardians of the Galaxy Vol. 2",
        releaseDate: "2017-05-05",
        duration: 136,
        phase: 3,
        description: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
        imdb: 7.6,
        trailerId: "wUn05hdkhjM",
        releaseOrder: 15,
        chronologicalOrder: 12,
        poster: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg"
    },
    {
        id: "age-of-ultron",
        title: "Avengers: Age of Ultron",
        releaseDate: "2015-05-01",
        duration: 141,
        phase: 2,
        description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong.",
        imdb: 7.3,
        trailerId: "tmeOjFno6Do",
        releaseOrder: 11,
        chronologicalOrder: 13,
        poster: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"
    },
    {
        id: "ant-man",
        title: "Ant-Man",
        releaseDate: "2015-07-17",
        duration: 117,
        phase: 2,
        description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero.",
        imdb: 7.3,
        trailerId: "pWdKf3MneyI",
        releaseOrder: 12,
        chronologicalOrder: 14,
        poster: "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg"
    },
    {
        id: "civil-war",
        title: "Captain America: Civil War",
        releaseDate: "2016-05-06",
        duration: 147,
        phase: 3,
        description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
        imdb: 7.8,
        trailerId: "dKrVegVI0Us",
        releaseOrder: 13,
        chronologicalOrder: 15,
        poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg"
    },
    {
        id: "black-widow",
        title: "Black Widow",
        releaseDate: "2021-07-09",
        duration: 134,
        phase: 4,
        description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        imdb: 6.7,
        trailerId: "ybji16oVw1h", // actual ID
        releaseOrder: 24,
        chronologicalOrder: 16,
        poster: "https://image.tmdb.org/t/p/w500/7JPpIjhD2V0sKyFvhB9khUMa30d.jpg"
    },
    {
        id: "spider-man-homecoming",
        title: "Spider-Man: Homecoming",
        releaseDate: "2017-07-07",
        duration: 133,
        phase: 3,
        description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man.",
        imdb: 7.4,
        trailerId: "U0CGsw6h60k",
        releaseOrder: 16,
        chronologicalOrder: 17,
        poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg"
    },
    {
        id: "black-panther",
        title: "Black Panther",
        releaseDate: "2018-02-16",
        duration: 134,
        phase: 3,
        description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future.",
        imdb: 7.3,
        trailerId: "xjDjIWPwcPU",
        releaseOrder: 18,
        chronologicalOrder: 18,
        poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
    },
    {
        id: "doctor-strange",
        title: "Doctor Strange",
        releaseDate: "2016-11-04",
        duration: 115,
        phase: 3,
        description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        imdb: 7.5,
        trailerId: "h7gvFravm4aa",
        releaseOrder: 14,
        chronologicalOrder: 19,
        poster: "https://image.tmdb.org/t/p/w500/xf8PbyQcR5ucXErmZNzdKR0s8ya.jpg"
    },
    {
        id: "thor-ragnarok",
        title: "Thor: Ragnarok",
        releaseDate: "2017-11-03",
        duration: 130,
        phase: 3,
        description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök.",
        imdb: 7.9,
        trailerId: "v7MGUNV8Kss",
        releaseOrder: 17,
        chronologicalOrder: 20,
        poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
    },
    {
        id: "infinity-war",
        title: "Avengers: Infinity War",
        releaseDate: "2018-04-27",
        duration: 149,
        phase: 3,
        description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        imdb: 8.4,
        trailerId: "6ZfuNTqbHE8",
        releaseOrder: 19,
        chronologicalOrder: 22,
        poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
    },
    {
        id: "endgame",
        title: "Avengers: Endgame",
        releaseDate: "2019-04-26",
        duration: 181,
        phase: 3,
        description: "After the devastating events of Infinity War, the remaining Avengers assemble once more in order to reverse Thanos' actions.",
        imdb: 8.4,
        trailerId: "TcMBFSGVi1c",
        releaseOrder: 22,
        chronologicalOrder: 23,
        poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
    },
    {
        id: "no-way-home",
        title: "Spider-Man: No Way Home",
        releaseDate: "2021-12-17",
        duration: 148,
        phase: 4,
        description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
        imdb: 8.2,
        trailerId: "rt-2crZzUa9o",
        releaseOrder: 27,
        chronologicalOrder: 27,
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    },
    {
        id: "deadpool-wolverine",
        title: "Deadpool & Wolverine",
        releaseDate: "2024-07-26",
        duration: 127,
        phase: 5,
        description: "Wolverine is recovering from his injuries when he crosses paths with the loudmouth, Deadpool. They team up to defeat a common enemy.",
        imdb: 8.0,
        trailerId: "73_1biuqZIx8", // placeholder trailer or recent
        releaseOrder: 34,
        chronologicalOrder: 34,
        poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
    },
    // PHASE 3 MISSING
    {
        id: "ant-man-and-the-wasp",
        title: "Ant-Man and the Wasp",
        releaseDate: "2018-07-06",
        duration: 118,
        phase: 3,
        description: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
        imdb: 7.0,
        trailerId: "UUkn-enk2RU",
        releaseOrder: 20,
        chronologicalOrder: 21,
        poster: "https://image.tmdb.org/t/p/w500/cFQEO687n1K6umXbInzocxcnAQz.jpg"
    },
    {
        id: "spider-man-far-from-home",
        title: "Spider-Man: Far From Home",
        releaseDate: "2019-07-02",
        duration: 129,
        phase: 3,
        description: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
        imdb: 7.4,
        trailerId: "Nt9L1jCKGnE",
        releaseOrder: 23,
        chronologicalOrder: 24,
        poster: "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg"
    },
    // PHASE 4 MOVIES
    {
        id: "shang-chi",
        title: "Shang-Chi and the Legend of the Ten Rings",
        releaseDate: "2021-09-03",
        duration: 132,
        phase: 4,
        description: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
        imdb: 7.4,
        trailerId: "8YjFbMbfZaM",
        releaseOrder: 25,
        chronologicalOrder: 25,
        poster: "https://image.tmdb.org/t/p/w500/d08HqqeBQSwN8i8MEvpsZ8Cb438.jpg"
    },
    {
        id: "eternals",
        title: "Eternals",
        releaseDate: "2021-11-05",
        duration: 156,
        phase: 4,
        description: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
        imdb: 6.3,
        trailerId: "x_me3xsvDgk",
        releaseOrder: 26,
        chronologicalOrder: 26,
        poster: "https://image.tmdb.org/t/p/w500/lFByFSLV5WDJEv3KabbdAF959F2.jpg"
    },
    {
        id: "doctor-strange-2",
        title: "Doctor Strange in the Multiverse of Madness",
        releaseDate: "2022-05-06",
        duration: 126,
        phase: 4,
        description: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself.",
        imdb: 6.9,
        trailerId: "aWzlQ2N6qqg",
        releaseOrder: 28,
        chronologicalOrder: 28,
        poster: "https://image.tmdb.org/t/p/w500/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg"
    },
    {
        id: "thor-love-and-thunder",
        title: "Thor: Love and Thunder",
        releaseDate: "2022-07-08",
        duration: 119,
        phase: 4,
        description: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
        imdb: 6.2,
        trailerId: "Go8nTmfrQd8",
        releaseOrder: 29,
        chronologicalOrder: 29,
        poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
    },
    {
        id: "wakanda-forever",
        title: "Black Panther: Wakanda Forever",
        releaseDate: "2022-11-11",
        duration: 161,
        phase: 4,
        description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
        imdb: 6.7,
        trailerId: "_Z3QKkl1WyM",
        releaseOrder: 30,
        chronologicalOrder: 30,
        poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
    },
    // PHASE 5 MOVIES
    {
        id: "quantumania",
        title: "Ant-Man and the Wasp: Quantumania",
        releaseDate: "2023-02-17",
        duration: 125,
        phase: 5,
        description: "Scott Lang and Hope van Dyne, along with Hank Pym and Janet van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",
        imdb: 6.1,
        trailerId: "ZlNFpri-Y40",
        releaseOrder: 31,
        chronologicalOrder: 31,
        poster: "https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
    },
    {
        id: "gotg-vol3",
        title: "Guardians of the Galaxy Vol. 3",
        releaseDate: "2023-05-05",
        duration: 150,
        phase: 5,
        description: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
        imdb: 7.9,
        trailerId: "u3V5KDHRQvk",
        releaseOrder: 32,
        chronologicalOrder: 32,
        poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"
    },
    {
        id: "the-marvels",
        title: "The Marvels",
        releaseDate: "2023-11-10",
        duration: 105,
        phase: 5,
        description: "Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe.",
        imdb: 5.6,
        trailerId: "wS_qbDztgVY",
        releaseOrder: 33,
        chronologicalOrder: 33,
        poster: "https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg"
    },
    // PHASE 4 SHOWS
    {
        id: "wandavision",
        title: "WandaVision",
        releaseDate: "2021-01-15",
        duration: 250,
        phase: 4,
        description: "Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.",
        imdb: 7.9,
        trailerId: "sj9J2ecsSpo",
        releaseOrder: 101,
        chronologicalOrder: 25.1,
        poster: "https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg"
    },
    {
        id: "falcon-winter-soldier",
        title: "The Falcon and the Winter Soldier",
        releaseDate: "2021-03-19",
        duration: 300,
        phase: 4,
        description: "Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities—and their patience.",
        imdb: 7.1,
        trailerId: "IWBsDaFWyTE",
        releaseOrder: 102,
        chronologicalOrder: 25.2,
        poster: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg"
    },
    {
        id: "loki-s1",
        title: "Loki Season 1",
        releaseDate: "2021-06-09",
        duration: 290,
        phase: 4,
        description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”",
        imdb: 8.2,
        trailerId: "nW948Va-l10",
        releaseOrder: 103,
        chronologicalOrder: 24.1,
        poster: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg"
    },
    {
        id: "what-if-s1",
        title: "What If…? Season 1",
        releaseDate: "2021-08-11",
        duration: 315,
        phase: 4,
        description: "Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory.",
        imdb: 7.4,
        trailerId: "x9D0uUKJ5KI",
        releaseOrder: 104,
        chronologicalOrder: 24.2,
        poster: "https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg"
    },
    {
        id: "hawkeye",
        title: "Hawkeye",
        releaseDate: "2021-11-24",
        duration: 270,
        phase: 4,
        description: "Series based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger, Kate Bishop, who took on the role after the original Avenger, Clint Barton.",
        imdb: 7.5,
        trailerId: "5VYb3B1ETlk",
        releaseOrder: 105,
        chronologicalOrder: 26.1,
        poster: "https://image.tmdb.org/t/p/w500/ct5pNE5dDHryHLDnxyZPYcqO1sz.jpg"
    },
    {
        id: "moon-knight",
        title: "Moon Knight",
        releaseDate: "2022-03-30",
        duration: 280,
        phase: 4,
        description: "Steven Grant discovers he's been granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.",
        imdb: 7.3,
        trailerId: "x7Krla_UxRg",
        releaseOrder: 106,
        chronologicalOrder: 27.1,
        poster: "https://image.tmdb.org/t/p/w500/vKDUmKO6F9bSKKyHhg7YGbgcEeF.jpg"
    },
    {
        id: "ms-marvel",
        title: "Ms. Marvel",
        releaseDate: "2022-06-08",
        duration: 260,
        phase: 4,
        description: "Kamala is a superhero fan with an imagination, particularly when it comes to Captain Marvel; Kamala feels like she doesn't fit in at school and sometimes even at home, that is until she gets superpowers like the heroes she's looked up to.",
        imdb: 6.3,
        trailerId: "m9EX0f6V11Y",
        releaseOrder: 107,
        chronologicalOrder: 28.1,
        poster: "https://image.tmdb.org/t/p/w500/3HWWh92kZbD7odwJX7nKmXNZsYo.jpg"
    },
    {
        id: "she-hulk",
        title: "She-Hulk: Attorney at Law",
        releaseDate: "2022-08-18",
        duration: 270,
        phase: 4,
        description: "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.",
        imdb: 5.3,
        trailerId: "g7GvzJ_N_xU",
        releaseOrder: 108,
        chronologicalOrder: 29.1,
        poster: "https://image.tmdb.org/t/p/w500/5xz2orV8f0usyrfGNshcoXHmiaV.jpg"
    },
    // PHASE 5 SHOWS
    {
        id: "secret-invasion",
        title: "Secret Invasion",
        releaseDate: "2023-06-21",
        duration: 260,
        phase: 5,
        description: "Fury and Talos try to stop the Skrulls who have infiltrated the highest spheres of the Marvel Universe.",
        imdb: 5.9,
        trailerId: "Tp_YZNqNBhw",
        releaseOrder: 109,
        chronologicalOrder: 32.1,
        poster: "https://image.tmdb.org/t/p/w500/f5ZMzzCvt2IzVDxr54gHPv9jlC9.jpg"
    },
    {
        id: "loki-s2",
        title: "Loki Season 2",
        releaseDate: "2023-10-05",
        duration: 280,
        phase: 5,
        description: "Loki navigates an ever-expanding and increasingly dangerous multiverse in search of Sylvie, Judge Renslayer, and Miss Minutes.",
        imdb: 8.2,
        trailerId: "dug56u8NN7g",
        releaseOrder: 110,
        chronologicalOrder: 32.2,
        poster: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg"
    },
    {
        id: "echo",
        title: "Echo",
        releaseDate: "2024-01-09",
        duration: 200,
        phase: 5,
        description: "Maya Lopez must face her past, reconnect with her Native American roots and embrace the meaning of family and community if she ever hopes to move forward.",
        imdb: 6.0,
        trailerId: "AFroA_Qf0mI",
        releaseOrder: 111,
        chronologicalOrder: 33.1,
        poster: "https://image.tmdb.org/t/p/w500/vFyJH630cF68LohVYjQW49074Sy.jpg"
    },
    {
        id: "what-if-s2",
        title: "What If…? Season 2",
        releaseDate: "2023-12-22",
        duration: 320,
        phase: 5,
        description: "The Watcher continues to guide viewers through the vast multiverse, introducing brand new and familiar faces throughout the MCU.",
        imdb: 7.4,
        trailerId: "E0_o_5jic3k",
        releaseOrder: 112,
        chronologicalOrder: 33.2,
        poster: "https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg"
    }
];

// App State
const state = {
    movies: [],
    watched: new Set(),
    sortBy: 'release', // 'release' or 'chronological'
    filters: {
        search: '',
        phase: 'all',
        year: 'all'
    },
    theme: 'dark'
};

// DOM Elements
const elements = {
    movieGrid: document.getElementById('movie-grid'),
    timelineTrack: document.getElementById('timeline-track'),
    searchBox: document.getElementById('search-input'),
    phaseFilter: document.getElementById('phase-filter'),
    yearFilter: document.getElementById('year-filter'),
    orderToggle: document.getElementById('order-toggle'),
    labelRelease: document.getElementById('label-release'),
    labelChrono: document.getElementById('label-chrono'),
    noResults: document.getElementById('no-results'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),

    // Stats
    moviesWatched: document.getElementById('movies-watched-count'),
    totalMovies: document.getElementById('total-movies-count'),
    progressPercentage: document.getElementById('progress-percentage'),
    progressBar: document.getElementById('watch-progress-bar'),
    timeRemaining: document.getElementById('time-remaining'),
    avengerRank: document.getElementById('avenger-rank'),

    // Modal
    modal: document.getElementById('trailer-modal'),
    modalClose: document.querySelector('.close-modal'),
    videoContainer: document.getElementById('video-container'),

    // Theme
    themeToggle: document.getElementById('theme-toggle'),

    // Audio
    audioToggle: document.getElementById('audio-toggle'),
    ambientAudio: document.getElementById('ambient-audio'),
    hoverAudio: document.getElementById('hover-audio'),

    // Misc
    scrollTopBtn: document.getElementById('scroll-top-btn'),
    currentYear: document.getElementById('current-year')
};

function initApp() {

    state.movies = [...mcuMovies];
    state.audioEnabled = false;

    loadData();
    populateYearsFilter();
    setupEventListeners();

    elements.currentYear.textContent = new Date().getFullYear();

    if (state.theme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }

    updateUI();
    observeElements();

    document.body.addEventListener("click", () => {
        elements.ambientAudio.play().catch(()=>{});
    }, { once: true });

}

// Data Persistence
function loadData() {
    const savedWatched = localStorage.getItem('mcuWatched');
    if (savedWatched) {
        state.watched = new Set(JSON.parse(savedWatched));
    }

    const savedTheme = localStorage.getItem('mcuTheme');
    if (savedTheme) {
        state.theme = savedTheme;
    }
}

function saveData() {
    localStorage.setItem('mcuWatched', JSON.stringify([...state.watched]));
}

function saveTheme() {
    localStorage.setItem('mcuTheme', state.theme);
}

// Setup Event Listeners
function setupEventListeners() {
    // Sorting & Filtering
    let searchTimeout;
    elements.searchBox.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            state.filters.search = e.target.value.toLowerCase();
            updateUI();
        }, 150);
    });

    elements.phaseFilter.addEventListener('change', (e) => {
        state.filters.phase = e.target.value;
        updateUI();
    });

    elements.yearFilter.addEventListener('change', (e) => {
        state.filters.year = e.target.value;
        updateUI();
    });

    elements.orderToggle.addEventListener('change', (e) => {
        state.sortBy = e.target.checked ? 'chronological' : 'release';

        if (state.sortBy === 'chronological') {
            elements.labelChrono.classList.add('active');
            elements.labelRelease.classList.remove('active');
        } else {
            elements.labelRelease.classList.add('active');
            elements.labelChrono.classList.remove('active');
        }

        updateUI();
    });

    elements.resetFiltersBtn.addEventListener('click', () => {
        elements.searchBox.value = '';
        state.filters.search = '';

        elements.phaseFilter.value = 'all';
        state.filters.phase = 'all';

        elements.yearFilter.value = 'all';
        state.filters.year = 'all';

        updateUI();
    });

    // Theme Toggle
    elements.themeToggle.addEventListener('click', () => {
        if (state.theme === 'dark') {
            state.theme = 'light';
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        } else {
            state.theme = 'dark';
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        }
        saveTheme();
    });

    // Audio Toggle
   elements.audioToggle.addEventListener('click', async () => {

    state.audioEnabled = !state.audioEnabled;

    if (state.audioEnabled) {

        elements.audioToggle.classList.add('active');
        elements.audioToggle.innerHTML = '<i class="fas fa-volume-up"></i>';

        try {
            elements.ambientAudio.currentTime = 0;
            elements.ambientAudio.volume = 0.25;
            await elements.ambientAudio.play();
        } catch (err) {
            alert("Tap again to enable audio 🙂");
            state.audioEnabled = false;
        }

    } else {

        elements.audioToggle.classList.remove('active');
        elements.audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        elements.ambientAudio.pause();

    }

});

    // Global Hover Sound for Interactive Elements
    document.body.addEventListener('mouseover', (e) => {
        if (!state.audioEnabled) return;

        const target = e.target.closest('button, .movie-card, .timeline-node, a, select');
        if (!target) return;

        // If the mouse came from inside the same interactive element, don't replay
        if (e.relatedTarget && target.contains(e.relatedTarget)) return;

        playHoverSound();
    });

    // Modal
    elements.modalClose.addEventListener('click', closeTrailerModal);
    elements.modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            closeTrailerModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.modal.classList.contains('active')) {
            closeTrailerModal();
        }
    });

    // Scroll Hero Button
    document.getElementById('start-watching-btn').addEventListener('click', () => {
        document.getElementById('progress').scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll to Top
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) return;
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 500) {
                elements.scrollTopBtn.classList.remove('hidden');
            } else {
                elements.scrollTopBtn.classList.add('hidden');
            }
            scrollTimeout = null;
        }, 100);
    }, { passive: true });

    elements.scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Audio Helper
function playHoverSound() {
    if (!state.audioEnabled || !elements.hoverAudio) return;

    // Reset time to allow quick re-triggering
    elements.hoverAudio.currentTime = 0;
    elements.hoverAudio.volume = 0.3; // keep it subtle

    // Play with a catch to prevent browser policy errors
    elements.hoverAudio.play().catch(e => { });
}

// Filters & Processing
function getProcessedMovies() {
    let result = [...state.movies];

    // Search Filter
    if (state.filters.search) {
        result = result.filter(m => m.title.toLowerCase().includes(state.filters.search));
    }

    // Phase Filter
    if (state.filters.phase !== 'all') {
        const phaseNum = parseInt(state.filters.phase);
        result = result.filter(m => m.phase === phaseNum);
    }

    // Year Filter
    if (state.filters.year !== 'all') {
        result = result.filter(m => m.releaseDate.substring(0, 4) === state.filters.year);
    }

    // Sort
    result.sort((a, b) => {
        if (state.sortBy === 'release') {
            return a.releaseOrder - b.releaseOrder;
        } else {
            return a.chronologicalOrder - b.chronologicalOrder;
        }
    });

    return result;
}

function getStats() {
    const total = state.movies.length;
    let watchedCount = 0;
    let unwatchedTime = 0;

    state.movies.forEach(m => {
        if (state.watched.has(m.id)) {
            watchedCount++;
        } else {
            unwatchedTime += m.duration;
        }
    });

    const percentage = total === 0 ? 0 : Math.round((watchedCount / total) * 100);
    const remainingHours = Math.floor(unwatchedTime / 60);
    const remainingMinutes = unwatchedTime % 60;

    return {
        total,
        watchedCount,
        percentage,
        remainingTimeStr: `${remainingHours}h ${remainingMinutes}m`
    };
}

// UI Updates
function updateUI() {
    const processed = getProcessedMovies();
    renderMovieGrid(processed);
    renderTimeline([...state.movies].sort((a, b) => a.chronologicalOrder - b.chronologicalOrder));
    updateStats();
}

function updateStats() {
    const stats = getStats();

    // Animate numbers
    animateValue(elements.moviesWatched, parseInt(elements.moviesWatched.textContent) || 0, stats.watchedCount, 1000);
    elements.totalMovies.textContent = stats.total;

    animateValue(elements.progressPercentage, parseInt(elements.progressPercentage.textContent) || 0, stats.percentage, 1000, '%');

    // Progress bar width
    setTimeout(() => {
        elements.progressBar.style.width = `${stats.percentage}%`;
    }, 100);

    elements.timeRemaining.textContent = stats.remainingTimeStr;

    // Update Avenger Rank
    updateAvengerRank(stats.percentage);
}

function updateAvengerRank(percentage) {
    let rank = "";
    if (percentage >= 100) {
        rank = "Watcher of the Multiverse";
    } else if (percentage >= 75) {
        rank = "Earth's Mightiest Hero";
    } else if (percentage >= 50) {
        rank = "Avenger Trainee";
    } else if (percentage >= 25) {
        rank = "S.H.I.E.L.D. Agent";
    } else if (percentage > 0) {
        rank = "New Recruit";
    }

    // Only update if it changed
    if (elements.avengerRank && elements.avengerRank.textContent !== rank) {
        // Trigger confetti ONLY if transitioning INTO 100% from a lower state
        if (rank === "Watcher of the Multiverse" && elements.avengerRank.textContent !== "") {
            fireConfetti();
        }

        elements.avengerRank.textContent = rank;

        if (rank === "") {
            elements.avengerRank.style.display = "none";
        } else {
            elements.avengerRank.style.display = "inline-block";
        }

        // Add a nice pop animation
        elements.avengerRank.classList.remove('pop-anim');
        void elements.avengerRank.offsetWidth; // trigger reflow
        elements.avengerRank.classList.add('pop-anim');
    }
}

function fireConfetti() {
    if (typeof confetti !== 'function') return;
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) { return Math.random() * (max - min) + min; }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) { return clearInterval(interval); }
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

function animateValue(obj, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function populateYearsFilter() {
    const years = [...new Set(state.movies.map(m => m.releaseDate.substring(0, 4)))].sort();

    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        elements.yearFilter.appendChild(option);
    });
}

function renderMovieGrid(movies) {

    elements.movieGrid.innerHTML = '';

    if (movies.length === 0) {
        elements.noResults.classList.remove('hidden');
        return;
    }

    elements.noResults.classList.add('hidden');

    movies.forEach((movie, index) => {
        const isWatched = state.watched.has(movie.id);
        const releaseYear = movie.releaseDate.substring(0, 4);
        const delay = (index % 10) * 0.05; // staggered animation

        const card = document.createElement('div');
        card.className = `movie-card glass-panel section-fade ${isWatched ? 'watched' : ''}`;
        card.style.animationDelay = `${delay}s`;

        // Use placeholder structure if poster fails
        card.innerHTML = `
            <div class="movie-poster-container skeleton">
                <span class="movie-badge phase-${movie.phase}">Phase ${movie.phase}</span>
                <span class="movie-rating"><i class="fas fa-star"></i> ${movie.imdb}</span>
                <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy" onload="this.parentElement.classList.remove('skeleton')">
                <div class="movie-overlay">
                    <button class="btn-trailer" data-id="${movie.trailerId}">
                        <i class="fas fa-play"></i> Watch Trailer
                    </button>
                </div>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span><i class="fas fa-calendar-alt"></i> ${releaseYear}</span>
                    <span><i class="fas fa-clock"></i> ${movie.duration}m</span>
                </div>
                <p class="movie-desc">${movie.description}</p>
                <div class="movie-actions">
                    <label class="watch-checkbox-container">
                        <input type="checkbox" class="watch-toggle" data-id="${movie.id}" ${isWatched ? 'checked' : ''}>
                        <span class="checkmark"></span>
                        <span class="watch-text">${isWatched ? 'Watched' : 'Mark as Watched'}</span>
                    </label>
                </div>
            </div>
        `;

        elements.movieGrid.appendChild(card);
    });

    // Reattach listeners to new elements
    document.querySelectorAll('.watch-toggle').forEach(el => {
        el.addEventListener('change', handleWatchToggle);
    });

    document.querySelectorAll('.btn-trailer').forEach(el => {
        el.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-trailer');
            openTrailerModal(btn.dataset.id);
        });
    });

    // Observer for fade-ins of new cards
    observeElements();
}

function renderTimeline(movies) {
    elements.timelineTrack.innerHTML = '';

    movies.forEach(movie => {
        const isWatched = state.watched.has(movie.id);
        const year = movie.releaseDate.substring(0, 4); // Display by release year conceptually in timeline

        const node = document.createElement('div');
        node.className = `timeline-node ${isWatched ? 'watched' : ''}`;
        node.dataset.id = movie.id;

        node.innerHTML = `
            <div class="timeline-year">${year}</div>
            <div class="timeline-point"></div>
            <img src="${movie.poster}" alt="${movie.title}" class="timeline-poster" loading="lazy">
            <h4 class="timeline-title">${movie.title}</h4>
        `;

        // Scroll to movie in grid when clicking timeline
        node.addEventListener('click', () => {
            elements.searchBox.value = movie.title;
            state.filters.search = movie.title.toLowerCase();
            updateUI();
            document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
        });

        elements.timelineTrack.appendChild(node);
    });

    // No VanillaTilt initialization
}

// Interaction Handlers
function handleWatchToggle(e) {
    const id = e.target.dataset.id;
    const isChecked = e.target.checked;

    if (isChecked) {
        state.watched.add(id);
    } else {
        state.watched.delete(id);
    }

    saveData();
    updateStats();

    // Partially update UI classes instead of full re-render for performance
    const card = e.target.closest('.movie-card');
    const watchText = card.querySelector('.watch-text');

    if (isChecked) {
        card.classList.add('watched');
        watchText.textContent = 'Watched';
    } else {
        card.classList.remove('watched');
        watchText.textContent = 'Mark as Watched';
    }

    // Update corresponding timeline node
    const timelineNode = document.querySelector(`.timeline-node[data-id="${id}"]`);
    if (timelineNode) {
        if (isChecked) {
            timelineNode.classList.add('watched');
        } else {
            timelineNode.classList.remove('watched');
        }
    }

    // Trigger Binge Mode "Up Next"
    if (isChecked) {
        showUpNextToast(id);
    }
}

function showUpNextToast(currentMovieId) {
    // Find the current movie's chronological order
    const currentMovie = state.movies.find(m => m.id === currentMovieId);
    if (!currentMovie) return;

    // Find all movies with a higher chronological order
    const upcoming = state.movies.filter(m => m.chronologicalOrder > currentMovie.chronologicalOrder);
    // Sort them just in case
    upcoming.sort((a, b) => a.chronologicalOrder - b.chronologicalOrder);

    // Find the exactly next *unwatched* movie
    const nextMovie = upcoming.find(m => !state.watched.has(m.id));

    if (nextMovie) {
        const toast = document.getElementById('up-next-toast');
        document.getElementById('toast-poster').src = nextMovie.poster;
        document.getElementById('toast-title').textContent = nextMovie.title;

        // Setup buttons
        const trailerBtn = document.getElementById('toast-trailer-btn');
        // clone to remove old listeners
        const newTrailerBtn = trailerBtn.cloneNode(true);
        trailerBtn.parentNode.replaceChild(newTrailerBtn, trailerBtn);

        newTrailerBtn.addEventListener('click', () => {
            openTrailerModal(nextMovie.trailerId);
        });

        const closeBtn = document.getElementById('toast-close-btn');
        closeBtn.onclick = hideUpNextToast;

        // Show
        toast.classList.remove('hidden');
        // short delay for CSS transition
        setTimeout(() => toast.classList.add('show'), 50);

        // Auto-hide after 15 seconds
        if (state.toastTimeout) clearTimeout(state.toastTimeout);
        state.toastTimeout = setTimeout(hideUpNextToast, 15000);
    }
}

function hideUpNextToast() {
    const toast = document.getElementById('up-next-toast');
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 500);
}

function openTrailerModal(trailerId) {

    const youtubeUrl = `https://www.youtube.com/watch?v=${trailerId}`;

    window.open(youtubeUrl, "_blank");

}

function closeTrailerModal() {
    elements.modal.classList.remove('active');
    elements.videoContainer.innerHTML = ''; // Stop video playing
    document.body.style.overflow = ''; // Restore scrolling
}

// Intersection Observer for scroll animations
let fadeObserver = null;
function observeElements() {
    if (fadeObserver) {
        fadeObserver.disconnect();
    }

    fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once faded in
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: "50px 0px 50px 0px"
    });

    document.querySelectorAll('.section-fade').forEach(el => {
        fadeObserver.observe(el);
    });
}

// Start
document.addEventListener('DOMContentLoaded', () => {
    initApp();

});
