import Component from "../Component/Component.js";
import Header from "../Header/Header.js";

export default class App extends Component {
  #header: Header;
  constructor(parentELement: HTMLElement | undefined) {
    super(parentELement, "div");
    this.#header = new Header(this.element, "/pokemon-logo.svg", "header");
  }

  render(): void {
    super.render();
    this.#header.render();
  }
}
