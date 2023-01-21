//This is the script file

let drinkList=[
    {"id":1, "name":"Coca Cola", "price":"₹50", "desc":"Nothing beats the taste of classic Coca-Cola. It is designed to go with everything. The taste of the classic Coca-Cola has remained unchanged for more than 135 years. Bringing all of us together.", "bgColor":"linear-gradient(0deg, rgba(128,6,28,1) 0%, rgba(244,63,72,1) 74%, rgba(245,106,64,1) 100%)", "bgUrl":`url("/assets/images/starlight.jpg")`, "img":`/assets/images/cola-start-big.png`},
    {"id":2, "name":"Sprite", "price":"₹50", "desc":"Sprite's crisp taste with hit of lemon-lime flavour gives you that unmatched cut-through refreshment. Clear out all the pressure of the week with Sprite's clear, crisp lemon-lime flavour.", "bgColor":"linear-gradient(0deg, rgba(0,127,51,1) 0%, rgba(170,213,144,1) 100%)", "bgUrl":`url("/assets/images/starlight.jpg")`, "img":`/assets/images/sprite.png`},
    {"id":3, "name":"Thumbs Up", "price":"₹50", "desc":"The original way to Taste The Thunder. Made of Strong. Not for the weak. Strong Taste not everyone can handle. For 42 years, this iconic brand has been loved by Indians for its strong taste, signature jingle and larger-than-life campaigns.", "bgColor":"linear-gradient(0deg, rgba(63,9,5,1) 0%, rgba(195,44,38,1) 59%, rgba(208,148,124,1) 100%)", "bgUrl":`url("/assets/images/starlight.jpg")`, "img":`/assets/images/thumbsUp.png`},
    {"id":4, "name":"Fanta", "price":"₹50", "desc":"Adds a zest to the brand with its orangey fizzy flavour, making life of all the #ColourfulPeople more playful. Add a dash of fun to your life with the orangey taste of Fanta.", "bgColor":"linear-gradient(0deg, rgba(238,113,5,1) 0%, rgba(243,151,32,1) 100%)", "bgUrl":`url("/assets/images/starlight.jpg")`, "img":`/assets/images/fanta.png`},
    {"id":5, "name":"Limca", "price":"₹50", "desc":"Limca's lemony flavor provides refreshment like no other. It celebrates the ones who get tired after sweating it out and keep moving forward. Limca celebrates those who sweat it out and keep moving forward. An ode to the doers of everyday India! #MatThak", "bgColor":"linear-gradient(0deg, rgba(206,214,221,1) 0%, rgba(237,245,248,1) 100%)", "bgUrl":`url("/assets/images/starlight.jpg")`, "img":`/assets/images/limca.png`},
    {"id":6, "name":"Maaza", "price":"₹50", "desc":"Maaza is the perennial mango fan's 1st choice to relax and unwind. Its indulgent taste leaves you with a 'sip to surrender' feeling. Universally loved for its sweet and smooth taste, Maaza is enticing mango lovers since 1976. Engage, indulge and enjoy round the year. ", "bgColor":"linear-gradient(0deg, rgba(248,170,0,1) 0%, rgba(255,232,160,1) 100%)", "bgUrl":`url("/assets/images/starlight.jpg")`, "img":`/assets/images/maaza.png`},
    {"id":7, "name":"7 Up", "price":"₹50", "desc":"Enjoy the deliciously uncomplicated taste of Simple 7UP, a soda made with only real ingredients. How refreshing.", "bgColor":"linear-gradient(0deg, rgba(123,204,73,1) 0%, rgba(172,237,158,1) 100%)", "bgUrl":`url("/assets/images/starlight.jpg")`, "img":`/assets/images/7up.png`},
    {"id":8, "name":"Rimzim", "price":"₹50", "desc":"RimZim Jeera Masala Soda Drink. Rimzim is a jeera flavored sparkling beverage and aims to create unique brand identity in the jeera soda space.", "bgColor":"linear-gradient(0deg, rgba(129,31,25,1) 0%, rgba(211,93,62,1) 100%)", "bgUrl":`url("/assets/images/starlight.jpg")`, "img":`/assets/images/rimzim.png`},
    {"id":9, "name":"Mirinda", "price":"₹50", "desc":"Mirindas great orangey taste and sparkling bubbles encourage you to be carefree, spontaneous and playful!With no artificial flavor, a sip of Mirinda, with its bold taste, will switch on the Pagalpanti in you!", "bgColor":"linear-gradient(0deg, rgba(226,71,27,1) 0%, rgba(231,133,17,1) 100%)", "bgUrl":`url("/assets/images/starlight.jpg")`, "img":`/assets/images/mirinda.png`},
];

let loader = document.getElementsByClassName("loading");
let main = document.getElementsByClassName("main");
let scroller = document.getElementById("main");
let count=0;

setTimeout(() => {
    loader[0].classList.add('load1')
},1000)

setTimeout(() => {
    // console.log("Timeout");s
    // console.log(main);
    loader[0].style.display = "none";
    main[0].style.display = "flex";
},3000)

function imgSlider(anything){
    document.querySelector('.home-cola').src=anything;
}

function changeCircleColor(bg,color){
    const circle = document.querySelector('.home-circle');
    const title = document.querySelector('#title');
    circle.style.backgroundImage="url("+bg+")";
    title.style.color=color;
}

//Bottle Spin

document.addEventListener("DOMContentLoaded", function() {

    console.log("In func");
	var pointer = document.getElementById("rotating-bottle"),
	pointerBox = pointer.getBoundingClientRect(),
	centerPoint = window.getComputedStyle(pointer).transformOrigin,
	centers = centerPoint.split(" ");
    var ScrollDebounce = true;
	function rotatePointer(e) {
		var pointerEvent = e;
        if (e.targetTouches && e.targetTouches[0]) {
            e.preventDefault(); 
            pointerEvent = e.targetTouches[0];
            mouseX = pointerEvent.pageX;
            mouseY = pointerEvent.pageY;
        } else {
            mouseX = e.clientX,
            mouseY = e.clientY;
        }

        var centerY = pointerBox.top + (pointer.height / 2),
        centerX = pointerBox.left + (pointer.width / 2) ,
        radians = Math.atan2(mouseY - centerY, mouseX - centerX),
        degrees = ((radians * (180 / Math.PI)*-1)-90); 
        pointer.style.transform = 'rotate('+(degrees)+'deg)';
    }

    function scroll(e){
        // console.log(e.deltaY);
        e.preventDefault();
        if (ScrollDebounce) {
            ScrollDebounce = false;
            scroller.scrollBy({
                left:e.deltaY>0?screen.width:-(screen.width),
                behavior : "smooth"
            });
            console.log(scroller.scrollLeft);
            if((scroller.scrollLeft===screen.width||scroller.scrollLeft===3*screen.width)&&count<1){
                // console.log("ON page");
                count=1;
                document.querySelector(".about-anim").style.display="flex";
                setTimeout(()=>{
                    document.querySelector(".about-desc").style.display="flex";
                },6500)
            }
            // if(scroller.scrollLeft===0){
            //     document.querySelector(".about-anim").style.display="none";
            //     document.querySelector(".about-desc").style.display="none";
            // }
            setTimeout(function () { ScrollDebounce = true; }, 1000);
        }
        // scroller.scrollRight += e.deltaY;
    }

    window.addEventListener('wheel',scroll, { passive: false })
    window.addEventListener('mousemove', rotatePointer);
    window.addEventListener('touchmove', rotatePointer);
    window.addEventListener('touchstart', rotatePointer);
})

const card = document.querySelectorAll(".card1");
const containers = document.querySelectorAll(".card-container");
//Items
const title = document.querySelectorAll(".title");
const drink = document.querySelectorAll(".drink1 img");
const purchase = document.querySelectorAll(".purchase");
const description = document.querySelectorAll(".info h3");

const productContainer = document.querySelector(".product-container");


const detailContainer = document.querySelector(".detail-container");
const drinkName = document.querySelector(".drink-name");
const drinkPrice = document.querySelector(".drink-price");
const drinkDesc = document.querySelector(".drink-body");
const drinkImg = document.querySelector(".drink-img");
const drinkBg = document.querySelector(".drink-bg");
let descIndex=0;
// const sizes = document.querySelector(".sizes");

//Moving Animation Event

window.addEventListener('load', () => {
    containers.forEach((container,index) => {
        container.addEventListener('mousemove', (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card[index].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        //Animate In
        container.addEventListener("mouseenter", (e) => {
            card[index].style.transition = "none";
            title[index].style.transform = "translateZ(150px)";
            drink[index].style.transform = "translateZ(200px) rotateZ(-45deg)";
            description[index].style.transform = "translateZ(125px)";
            purchase[index].style.transform = "translateZ(75px)";
        });
        //Animate Out
        container.addEventListener("mouseleave", (e) => {
            card[index].style.transition = "all 0.5s ease";
            card[index].style.transform = `rotateY(0deg) rotateX(0deg)`;
            title[index].style.transform = "translateZ(0px)";
            drink[index].style.transform = "translateZ(0px) rotateZ(0deg)";
            description[index].style.transform = "translateZ(0px)";
            purchase[index].style.transform = "translateZ(0px)";
        });

        container.addEventListener("click", (e)=>{
            productContainer.style.display="none";
            detailContainer.style.display="flex";
            descIndex=index;
            setDetails();
        })
    });
});

document.querySelector(".drink-previous").addEventListener("click", (e)=>{
    if(descIndex>0)descIndex--;
    else descIndex=8;
    setDetails();
})

document.querySelector(".drink-next").addEventListener("click", (e)=>{
    if(descIndex<8)descIndex++;
    else descIndex=0;
    setDetails();
})

document.querySelector(".drink-back").addEventListener("click", (e)=>{
    productContainer.style.display="flex";
    detailContainer.style.display="none";
})

function setDetails(){
    detailContainer.style.background = drinkList[descIndex].bgColor;
    drinkName.innerHTML = drinkList[descIndex].name;
    drinkPrice.innerHTML = drinkList[descIndex].price;
    drinkDesc.innerHTML = drinkList[descIndex].desc;
    drinkImg.src = drinkList[descIndex].img;
    drinkBg.style.background = drinkList[descIndex].bgUrl;
}