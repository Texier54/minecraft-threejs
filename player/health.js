export class Health {
    constructor(heartsElement, maxHealth = 20, health = 20) {
        this.heartsEl = heartsElement;
        this.maxHealth = maxHealth;
        this.health = health;
        this.render();
    }

    render() {
        const heartCount = Math.ceil(this.maxHealth / 2);
        this.heartsEl.innerHTML = '';

        for (let i = 0; i < heartCount; i++) {
            const span = document.createElement('span');
            span.className = 'heart';

            const heartValue = (i * 2) + 2;

            if (this.health >= heartValue) span.classList.add('full');
            else if (this.health === heartValue - 1) span.classList.add('half');
            else span.classList.add('empty');

            this.heartsEl.appendChild(span);
        }
    }

    setMaxHealth(v) {
        this.maxHealth = Math.max(2, v);
        this.health = Math.min(this.health, this.maxHealth);
        this.render();
    }

    setHealth(v) {
        this.health = Math.max(0, Math.min(v, this.maxHealth));
        this.render();
    }

    add(v) {
        this.setHealth(this.health + v);
    }

    remove(v) {
        this.setHealth(this.health - v);
    }
}