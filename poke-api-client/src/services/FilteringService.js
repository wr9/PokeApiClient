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

    filterByMoves: function (pokemon, options) {
        let selectedMoves = options.moves.filter(move => move.selected).map(move => move.name);
        let filteredPokemon = pokemon.filter(pokemon => !options.minCount || pokemon.moves.length >= options.minCount);
        selectedMoves.forEach(move => {
            filteredPokemon = filteredPokemon.filter(pokemon => pokemon.moves.includes(move));
        })
        return filteredPokemon;
    },

}