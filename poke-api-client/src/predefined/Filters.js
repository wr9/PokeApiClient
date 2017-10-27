import FilteringService from './../services/FilteringService';

export default {

    filters: [
        {
            label: 'weight',
            options: [
                {
                    label: 'minWeight',
                    value: '',
                    placeholder: 'min weight'
                },
                {
                    label: 'maxWeight',
                    value: '',
                    placeholder: 'max weight'
                },
            ],
            filter: FilteringService.filterByWeight
        },
        {
            label: 'height',
            options: [
                {
                    label: 'minHeight',
                    value: '',
                    placeholder: 'min height'
                },
                {
                    label: 'maxHeight',
                    value: '',
                    placeholder: 'max height'
                },
            ],
            filter: FilteringService.filterByHeight
        },
        {
            label: 'numberOfMoves',
            options: [
                {
                    label: 'minNumberOfMoves',
                    value: '',
                    placeholder: 'min number of moves'
                }
            ],
            filter: FilteringService.filterByNumberOfMoves
        }
    ]

}