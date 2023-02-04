import Component from "../Component/Component.js";
export default class Header extends Component {
    #logotype;
    constructor(parentElement, textSrc, cssClass) {
        super(parentElement, "header", cssClass);
        this.#logotype = textSrc;
    }
    render() {
        super.render();
        this.element.innerHTML = `
    <img src="${this.#logotype}" alt="pokemon logotype">
`;
    }
}
