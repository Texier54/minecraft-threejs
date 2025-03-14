

export class Chat {

    content = [];
    element;

    constructor() {
        this.element = document.getElementById('chat');
        window.addEventListener('keydown', this.onKeyDown.bind(this));
    }

    add(msg) {
        this.content.push(msg);
        console.log(this.content);
        this.display();

    }

    display() {
        let content = '';
        this.content.forEach(line => {
            content += '<span style="color: #FEFE3F;">'+line+'</span><br>';
        });

        this.element.innerHTML = content;
        this.element.style.display = 'block';

        setTimeout(() => {
            this.element.style.display = 'none';
        }, 10000);


    }

    onKeyDown(event) {
        if (event.code === 'KeyT') this.display();
    }
}