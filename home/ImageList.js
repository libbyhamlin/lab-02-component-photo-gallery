import Component from '../Component.js';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    renderHTML() {
        return /*html*/ `
        <ul class="horned Creatures"></ul>
     `;
    }
    onRender(dom) {
        const image = this.props.image;

        image.forEach(image => {
            const props = { image: image };
            const imageItem = new ImageItem(props);
            const imageItemDOM = imageItem.renderDOM();
            dom.appendChild(imageItemDOM);
        });
    }
}

export default ImageList;
