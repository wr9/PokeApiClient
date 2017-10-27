export default {

    filterByWeight: function (pokemon, options) {
        let minWeight = options.find(option => option.label ===  'minWeight').value;
        let maxWeight = options.find(option => option.label ===  'maxWeight').value;
        return pokemon.filter(pokemon => (!minWeight || pokemon.weight >= minWeight) && (!maxWeight || pokemon.weight <= maxWeight));
    },

    filterByHeight: function (pokemon, options) {
        let minHeight = options.find(option => option.label ===  'minHeight').value;
        let maxHeight = options.find(option => option.label ===  'maxHeight').value;
        return pokemon.filter(pokemon => (!minHeight || pokemon.height >= minHeight) && (!maxHeight || pokemon.height <= maxHeight));
    },

    filterByType: function (pokemon, options) {
        let selectedTypes = options.filter(type => type.value).map(type => type.label);
        let filteredPokemon = pokemon;
        selectedTypes.forEach(type => {
            filteredPokemon = filteredPokemon.filter(pokemon => pokemon.types.includes(type));
        })
        return filteredPokemon;
    },

    filterByNumberOfMoves: function (pokemon, options) {
        let minNumberOfMoves = options.find(option => option.label ===  'minNumberOfMoves').value;
        return pokemon.filter(pokemon => !minNumberOfMoves || pokemon.moves.length >= minNumberOfMoves);
    },

    filterByMoves: function (pokemon, options) {
        let selectedMoves = options.filter(move => move.value).map(move => move.label);
        let filteredPokemon = pokemon;
        selectedMoves.forEach(move => {
            filteredPokemon = filteredPokemon.filter(pokemon => pokemon.moves.includes(move));
        })
        return filteredPokemon;
    },

}