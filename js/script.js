
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
const thumdsCont = document.querySelector(".container-thumbs");
//const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

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
thumdsCont.innerHTML += thumbs;

/* let itemClick = document.getElementsByClassName("item")[0];
console.log(itemClick);
itemClick.classList.add('active'); */

let clickControl = 0

let thumbClick = document.getElementsByClassName("thumb")[clickControl];
thumbClick.classList.add('active');
let itemClick = document.getElementsByClassName("item")[clickControl];
itemClick.classList.add('active');



//catturo il click per il next
document.querySelector(".next").addEventListener("click",

    function(){
        clickControl++
        //se la classe active è presente la elimino 
        if (clickControl){
            document.querySelector(".item.active").classList.remove('active');
            document.querySelector(".thumb.active").classList.remove('active');
            
        }
        // controllo sul click. arrivato all'ultima immagine torna indietro
        if (clickControl == 5){
            clickControl = 0
        }

        //ad ogni click aggiungo la classe all'elemento successivo nell'array
        let itemClick = document.getElementsByClassName("item")[clickControl]
        itemClick.classList.add('active');

        //thumbClick.classList.remove('active');

        //ad ogni click aggiungo la classe all'elemento successivo nell'array
        let thumbClick = document.getElementsByClassName("thumb")[clickControl]
        thumbClick.classList.add('active');
        console.log(clickControl);
    }

);

//catturo il click per il previous

document.querySelector(".previous").addEventListener("click",

    function(){
        clickControl--
        //se la classe active è presente la elimino 
        if (clickControl || !clickControl){

            document.querySelector(".item.active").classList.remove('active');
            document.querySelector(".thumb.active").classList.remove('active');
            
        }
        // controllo sul click. arrivato all'ultima immagine torna indietro
        if (clickControl < 0){
            clickControl = 4
        }

        //ad ogni click aggiungo la classe all'elemento successivo nell'array
        let itemClick = document.getElementsByClassName("item")[clickControl]
        itemClick.classList.add('active');

        //thumbClick.classList.remove('active');

        //ad ogni click aggiungo la classe all'elemento successivo nell'array
        let thumbClick = document.getElementsByClassName("thumb")[clickControl]
        thumbClick.classList.add('active');
        console.log(clickControl);
    }
    
);
console.log(clickControl);
