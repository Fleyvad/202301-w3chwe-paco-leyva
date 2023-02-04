import App from "./components/App/App.js";

const appContainer: HTMLAnchorElement = document.querySelector(".root");
const app = new App(appContainer);
app.render();
