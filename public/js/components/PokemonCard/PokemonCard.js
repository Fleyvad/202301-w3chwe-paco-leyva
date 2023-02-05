import Component from "../Component/Component.js";
export default class PokemonCard extends Component {
    #imgPokemon;
    #number;
    #namePokemon;
    constructor(parentElement, texSrc, numberList, namePokemon, cssClass = "") {
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
