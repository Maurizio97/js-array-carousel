
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


// elementi di pagina utili 
const itemsCont = document.querySelector(".container-items");
const thumdsCont = document.querySelector(".container-thumbs")
let item = "";
let thumbs = "";

for ( let i = 0; i < items.length; i++) {
    item += `
    <div class="item">
        <img src="${items[i]}" alt="${title[i]}">
    
        <div class="text">
            <h2>
                ${title[i]}
            </h2>
            <p>
                ${text[i]}
            </p>
        </div>
    </div> 
    `;

    thumbs += `
    <div class="thumb">
        <img src="${items[i]}" alt="${title[i]}">
    </div>
    `;
}

itemsCont.innerHTML += item;
thumdsCont.innerHTML += thumbs

