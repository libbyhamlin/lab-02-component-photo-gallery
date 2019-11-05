import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/ `
        <header>
            <img class="icon" src='../data/13-Weedle.png' alt="Horned Type Pokemon">
            <h1>Weedle</h1>
        </header>
    `;
    }
}
export default Header;

//This file contains the header component.
