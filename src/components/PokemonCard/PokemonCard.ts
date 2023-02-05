import Component from "../Component/Component.js";

export default class PokemonCard extends Component {
  #imgPokemon: string;
  #number: number;
  #namePokemon: string;
  constructor(
    parentElement: HTMLElement,
    texSrc: string,
    numberList: number,
    namePokemon: string,
    cssClass = ""
  ) {
    super(parentElement, "div", cssClass);
    this.#imgPokemon = texSrc;
    this.#number = numberList;
    this.#namePokemon = namePokemon;
  }

  render() {
    super.render();
    this.element.innerHTML = `
    <img class="pokemon-card__img" src="${this.#imgPokemon}" alt="squirtle">
    <h4 class="pokemon-card__number" >${this.#number}</h4>
    <h3 class="pokemon-card__names" >${this.#namePokemon}</h3>
    `;
  }
}
