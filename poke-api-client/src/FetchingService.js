export default {

    fetchPokemon: function (id) {
        return fetch('https://pokeapi.co/api/v2/pokemon/' + id + '/').then(response => {
            return response.json()
        })
    },

    generateRandomPokeId: function () {
        const min = 1;
        const max = 949;
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (randomNumber > 802) {
            randomNumber += 9198;
        }
        return randomNumber;
    },

    getRandomPokemon: function () {

        let promise = new Promise((resolve, reject) => {
            let promises = [];
            let pokeList = [];
            for (let i = 0; i < 3; i++) {
                promises.push(this.fetchPokemon(this.generateRandomPokeId()));
            }
            Promise.all(promises).then(responses => {
                responses.forEach(response => {
                    pokeList.push({
                        id: response.id,
                        name: response.name,
                        height: response.height,
                        weight: response.weight,
                        types: response.types.map(type => type.type.name)
                    });
                })
                resolve(pokeList);
            })
        })
        return promise;
    },

    fetchTypes: function () {
        return fetch('https://pokeapi.co/api/v2/type/').then(response => {
            return response.json()
        })
    },
}