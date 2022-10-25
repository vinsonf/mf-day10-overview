
const images = [
    'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=pexels-pixabay-87651.jpg&fm=jpg',
    'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2022/04/earth/24035530-2-eng-GB/Earth_card_full.jpg',
    'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2022/04/earth/24035530-2-eng-GB/Earth_card_full.jpg',
]
const titles = [
    'Earth',
    'Earth2',
    'Earth3'
]
const descriptions = [
    'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
    'Earth2 is the third planet from the Sun and the only astronomical object known to harbor life.',
    'Earth3 is the third planet from the Sun and the only astronomical object known to harbor life.',
];

const img = document.querySelector('#img');
img.src = 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=pexels-pixabay-87651.jpg&fm=jpg';
const p = document.querySelector('p');
p.textContent = 'This is a planet';
const h1 = document.querySelector('h2');
h1.textContent = 'Earth';

let i = 0;

function changeImage() {
    i++;
    if (i >= images.length) {
        i = 0;
    }
    img.src = images[i];
    h1.textContent = titles[i];
    p.textContent = descriptions[i];
  
  
}
function previousImage() {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    img.src = images[i];
    h1.textContent = titles[i];
    p.textContent = descriptions[i];
  
  
}