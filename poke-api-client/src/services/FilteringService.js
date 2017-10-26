export default {

    filterByWeight: function (pokemon, options) {
        return pokemon.filter(pokemon => (!options.min || pokemon.weight >= options.min) && (!options.max || pokemon.weight <= options.max))
    },

    filterByHeight: function (pokemon, options) {
        return pokemon.filter(pokemon => (!options.min || pokemon.height >= options.min) && (!options.max || pokemon.height <= options.max))
    },

    filterByType: function (pokemon, options) {
        let selectedTypes = options.filter(type => type.selected).map(type => type.name);
        let filteredPokemon = pokemon;
        selectedTypes.forEach(type => {
            filteredPokemon = filteredPokemon.filter(pokemon => pokemon.types.includes(type));
        })
        return filteredPokemon;
    },

    filterByNumberOfMoves: function (pokemon, options) {
        return pokemon.filter(pokemon => !options.minNumberOfMoves || pokemon.moves.length >= options.minNumberOfMoves);
    },

    filterByMoves: function (pokemon, options) {
        let selectedMoves = options.filter(move => move.selected).map(move => move.name);
        let filteredPokemon = pokemon;
        selectedMoves.forEach(move => {
            filteredPokemon = filteredPokemon.filter(pokemon => pokemon.moves.includes(move));
        })
        return filteredPokemon;
    },

}