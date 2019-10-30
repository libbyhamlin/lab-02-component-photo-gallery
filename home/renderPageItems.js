export default function generateCreatureItemHtmlString(image) {
    if (!image) {
        throw new Error('you need to supply a image');
    }

    const html = /*html*/ `
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

    return html;
}
