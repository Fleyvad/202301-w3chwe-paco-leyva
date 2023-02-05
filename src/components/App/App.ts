import Component from "../Component/Component.js";
import Header from "../Header/Header.js";
import PokemonCard from "../PokemonCard/PokemonCard.js";

export default class App extends Component {
  #header: Header;
  #pokemonCard: PokemonCard;
  constructor(parentELement: HTMLElement | undefined) {
    super(parentELement, "div");
    this.#header = new Header(this.element, "/pokemon-logo.svg", "header");
    this.#pokemonCard = new PokemonCard(
      this.element,
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      4,
      "squirtle",
      "pokemon-card__container"
    );
  }

  render(): void {
    super.render();
    this.#header.render();
    this.#pokemonCard.render();
  }
}
