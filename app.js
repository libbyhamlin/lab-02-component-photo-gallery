import images from './data/images.js';
import htmlToDom from './util/html-to-DOM.js';
import generateCreatureItemHtmlString from './home/render-creature-items.js';

// reference the list
const creatureList = document.querySelector('.images');

//loop the cat data
images.forEach(images => {
  //call template function to get html
    const htmlString = generateCreatureItemHtmlString(images);

  //make DOM from html
    const dom = htmlToDom(htmlString);

  // append to the list
    creaturelist.appendChild(dom);
});

//This file has the top level component
