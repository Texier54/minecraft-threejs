
export const UIList = {
    furnace: {
        id: 0,
            name: 'empty',
            visible: false
    },
}

export class UI {


    constructor(props) {

    }

    open(id) {
        document.getElementById(id).style.display = 'block';
    }




}