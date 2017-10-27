export default {

    groups: [
        {
            name: 'small',
            filters: [
                {
                    label: 'height',
                    options: [
                        {
                            label: 'maxHeight',
                            value: 80
                        }
                    ]
                },
            ],
            selected: false
        },
        {
            name: 'heavy',
            filters: [
                {
                    label: 'weight',
                    options: [
                        {
                            label: 'minWeight',
                            value: 200
                        }
                    ]
                },
            ],
            selected: false
        },
        {
            name: 'powerful',
            filters: [
                {
                    label: 'numberOfMoves',
                    options: [
                        {
                            label: 'minNumberOfMoves',
                            value: 50
                        }
                    ]
                },
            ],
            selected: false
        },
        {
            name: 'flying',
            filters: [
                {
                    label: 'type',
                    options: [
                        {
                            label: 'flying',
                            value: true
                        }
                    ]
                },
            ],
            selected: false
        },
        {
            name: 'biting',
            filters: [
                {
                    label: 'moves',
                    options: [
                        {
                            label: 'bite',
                            value: true
                        }
                    ]
                },
            ],
            selected: false
        },
        {
            name: 'water and tall',
            filters: [
                {
                    label: 'type',
                    options: [
                        {
                            label: 'water',
                            value: true
                        }
                    ]
                },
                {
                    label: 'height',
                    options: [
                        {
                            label: 'minHeight',
                            value: 80
                        }
                    ]
                },
            ],
            selected: false
        },
        {
            name: 'normal',
            filters: [
                {
                    label: 'type',
                    options: [
                        {
                            label: 'normal',
                            value: true
                        }
                    ]
                },
                {
                    label: 'height',
                    options: [
                        {
                            label: 'minHeight',
                            value: 5
                        }
                    ]
                },
                {
                    label: 'weight',
                    options: [
                        {
                            label: 'minWeight',
                            value: 5
                        }
                    ]
                }
            ],
            selected: false
        }
    ]

}