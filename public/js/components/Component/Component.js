export default class Component {
    #parentElement;
    element;
    constructor(parentElement, tag, cssClass = "") {
        this.element = document.createElement(tag);
        this.element.className = cssClass;
        this.#parentElement = parentElement;
    }
    render() {
        this.#parentElement?.appendChild(this.element);
    }
}
