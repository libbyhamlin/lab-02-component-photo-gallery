import Component from '../Component.js';
class RenderPageItems extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/ `
    <li class="creature-item">
        <div class="info-container">
                <h2>${image.title}</h2>
                <p class="image-type">${image.keyword}</p>
        </div>
        <div class="image-container">
                <img src="${image.url}" alt="${image.title} image">
        </div>
        <p class="num-horns">${image.horns}</p>
        <p class="description">${image.description}</p>
    </li>
    `;
    }
}

export default RenderPageItems;
