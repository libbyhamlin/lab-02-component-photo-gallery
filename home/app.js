import Component from '../Component.js';
import Header from '../home/Header.js';
import images from '../data/images.js';
import ImageList from '../home/ImageList.js';
import FilterItems from '../home/FilterItems.js';
import Footer from '../home/Footer.js';

class App extends Component {
    onRender(dom) {
    // creates the Header
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

    //making props into data
        const props = { Images: images };

    //creates the images list
        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

    //Puts it in the list section class
        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);

    //creates the result of dropdown
        const filterImages = new FilterItems({
            images,
            onFilter: imageKeywords => {
                let filteredImages;
                if (!imageKeywords) {
                    filteredImages = images;
                } else {
                    filteredImages = images.filter(image => {
                        return image.keyword === imageKeywords;
                    });
                }
                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }
        });

        const filterImageDOM = filterImages.renderDOM();

    //creates the filtered Images
        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterImageDOM);

        const footer = new Footer();
        const footerDOM = footer.renderDOM();
        listSection.appendChild(footerDOM);
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <main>
                    <section class="options-section">
                    </section>
                    <section class="list-section">
                    </section>
                </main>
            </div>
        `;
    }
}

export default App;
