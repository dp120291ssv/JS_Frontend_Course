class Accordeon {
    static CONTENT_CLASS = 'accordeon-content';
    static TITLE_CLASS = 'accordeon-title';
    static VISIBLE_CLASS = 'accordeon-visible';

    constructor(container) {
        this._container = container;
        console.log('Accordeon started');

        this.bindClasses();
        this.bindEventListener();
    }

    bindClasses() {
        const contentElements = this._container.querySelectorAll('.content');

        for (let i = 0; i < contentElements.length; i++) {
            contentElements[i].classList.add(Accordeon.CONTENT_CLASS);
        }

        const titleElements = this._container.querySelectorAll('.title');
        for (let i = 0; i < titleElements.length; i++) {
            titleElements[i].classList.add(Accordeon.TITLE_CLASS);
        }
    }

    bindEventListener() {
        this._container.addEventListener('click', (event) => {
            if (event.target.parentNode.classList.contains(Accordeon.VISIBLE_CLASS)) {
                event.target.parentNode.classList.remove(Accordeon.VISIBLE_CLASS)
                console.log("test")
            } else {
                this._container.querySelectorAll('.title').forEach((child) => child.classList.remove(Accordeon.VISIBLE_CLASS));
                event.target.parentNode.classList.add(Accordeon.VISIBLE_CLASS)
            }
        });
    }

    // toggleItem(el) {
    //     el.classList.toggle(Accordeon.VISIBLE_CLASS);
    // }
}