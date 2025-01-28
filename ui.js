
export const UIList = {
    0: {
        slot: {
            0: {
                type: 'input'
            },
            1: {
                type: 'input'
            },
            2: {
                type: 'input'
            },
            3: {
                type: 'input'
            },
            4: {
                type: 'ouput'
            }
        },
        grid: 2,
        id: 0,
        name: 'empty',
        visible: false
    },
    61: {
        slot: {
            0: {
                type: 'input'
            },
            1: {
                type: 'input'
            },
            2: {
                type: 'ouput'
            }
        },
        grid: 1,
        id: 0,
            name: 'empty',
            visible: false
    },
    58: {
        slot: {
            0: {
                type: 'input'
            },
            1: {
                type: 'input'
            },
            2: {
                type: 'input'
            },
            3: {
                type: 'input'
            },
            4: {
                type: 'input'
            },
            5: {
                type: 'input'
            },
            6: {
                type: 'input'
            },
            7: {
                type: 'input'
            },
            8: {
                type: 'input'
            },
            9: {
                type: 'ouput'
            }
        },
        grid: 3,
        id: 0,
        name: 'empty',
        visible: false
    },
    54: {
        slot: {
            0: {
                type: 'input'
            },
            1: {
                type: 'input'
            },
            2: {
                type: 'input'
            },
            3: {
                type: 'input'
            },
            4: {
                type: 'input'
            },
            5: {
                type: 'input'
            },
            6: {
                type: 'input'
            },
            7: {
                type: 'input'
            },
            8: {
                type: 'input'
            },
        },
        grid: 9,
        id: 0,
        name: 'empty',
        visible: false
    },
}

export class UI {



    constructor(player, inventory) {
        this.player = player;
        this.inventory = inventory;
    }

    open(id) {

        this.player.controls.unlock();



        this.inventory.show(id);




    }




}