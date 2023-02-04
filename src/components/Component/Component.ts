export default class Component {
  #parentElement: HTMLElement | undefined;
  protected element: HTMLElement;

  constructor(
    parentElement: HTMLElement | undefined,
    tag: string,
    cssClass = ""
  ) {
    this.element = document.createElement(tag);
    this.element.className = cssClass;
    this.#parentElement = parentElement;
  }

  render() {
    this.#parentElement?.appendChild(this.element);
  }
}
