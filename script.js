setTimeout(()=>{
    const hidden = document.querySelectorAll('.hide')
    hidden.forEach((el)=>{
        el.classList.remove('hide')
    })
    const img = document.querySelector('#loader-img')
    img.classList.add('hide')
},5000)


// let span = document.getElementsByTagName('span');
let span = document.getElementsByClassName('cbtn');
let product = document.getElementsByClassName('details');    
let product_page = Math.ceil(product.length/4);
let l =0;
let movePer = 25.34;
let maxMove = 150;

// mobile view

let mobile_view = window.matchMedia("(max-width: 700px)");

if(mobile_view.matches){
    movePer = 50.36;
    maxMove = 856;

}

let right_mover = () =>{

    l = l + movePer;

    if(product==1) {l=0}

    for(const i of product){

        if(l>maxMove){l = l - movePer;}
        i.style.left = '-' + l + '%';

    }

}

let left_mover = () =>{
    l = l - movePer;
    if(l<=0) {l=0}
    for(const i of product){
        if(product_page > 1)
        i.style.left = '-' + l + '%';
    }
}

span[1].onclick = () =>{right_mover();}
span[0].onclick = () =>{left_mover();}