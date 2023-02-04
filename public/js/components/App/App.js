import Component from "../Component/Component.js";
import Header from "../Header/Header.js";
export default class App extends Component {
    #header;
    constructor(parentELement) {
        super(parentELement, "div");
        this.#header = new Header(this.element, "/pokemon-logo.svg", "header");
    }
    render() {
        super.render();
        this.#header.render();
    }
}
