import Component from '../Component.js';

class RenderPageItems extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/ `
        <li>
         <div class="image-container">
                <h2>${image.title}</h2>
                    <img src="${image.url}" title="${image.description}">
             </div>
            <div class="info-container">
                <p class= "number-of-horns">Num of Horns: ${image.horns}</p>
            </div>
        </li>
      `;
    }
}

export default RenderPageItems;
