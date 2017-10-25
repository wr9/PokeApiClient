export default {

    filterByWeight: function (pokemon, options) {
        return pokemon.filter(pokemon => (!options.min || pokemon.weight >= options.min) && (!options.max || options.max < options.min || pokemon.weight <= options.max))
    }

}