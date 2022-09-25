// p3.js
//   The javascript file for p3 ( backstore product list)

//

var grape = 0.55;
var sizeG = 10;
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let count = localStorage.getItem("count");
let grapeType = localStorage.getItem("grapeType");
let grapes = localStorage.getItem("grapes");
let bagSize = localStorage.getItem("bagSize");
let bag = localStorage.getItem("bag");

if (count == null) count = 0;
count = parseInt(count);

if (quantity !== null) quantity.innerHTML = count;

if (grapeType !== null) dropbtn.innerHTML = grapeType;

if (bagSize !== null) btt.innerHTML = bagSize;

price.value = grapes*bag*count;

function moreDetails() {
    var dots = document.getElementById("3dots");
    var button = document.getElementById("button");
    var more = document.getElementById("more");

    if(dots.style.display === "none")
    {
        dots.style.display = "inline";
        button.innerHTML = "More Details";
        more.style.display = "none";
    }
    else
    {
        dots.style.display = "none";
        button.innerHTML = "Less Details";
        more.style.display = "inline";
    }
}

function plus(){
  count++;
  localStorage.setItem("count", count);
  quantity.innerHTML = count;
  price.value = grapes*bag*count;
  price.value = grape*sizeG*count;
}

function minus(){
  if(count > 1) count--;
  localStorage.setItem("count", count);
  quantity.innerHTML = count;
  price.value = grapes*bag*count;
  price.value = grape*sizeG*count;
}

function type(num){

    if (num===1)
    {dropbtn.innerHTML="Red grapes";
    grape = 0.55;
    localStorage.setItem("grapeType", dropbtn.innerHTML);
    localStorage.setItem("grapes", grape);}
    else if(num===2)
    {dropbtn.innerHTML="Green grapes";
    grape = 0.60;
    localStorage.setItem("grapeType", dropbtn.innerHTML);
    localStorage.setItem("grapes", grape);}
    else if(num===3)
    {dropbtn.innerHTML="Purple grapes";
    grape = 0.65;
    localStorage.setItem("grapeType", dropbtn.innerHTML);
    localStorage.setItem("grapes", grape);}

    document.getElementById("demo").value = grape+"/100g";
    price.value = grapes*bag*count;
    price.value = grape*sizeG*count;
}

function size(num){

    switch(num)
    {
        case 1: {btt.innerHTML="1kg";
        this.sizeG = 10;
        localStorage.setItem("bagSize", btt.innerHTML);
        localStorage.setItem("bag", sizeG); break;}
        case 2: {btt.innerHTML="2kg";
        this.sizeG = 20;
        localStorage.setItem("bagSize", btt.innerHTML);
        localStorage.setItem("bag", sizeG); break;}
        case 3: {btt.innerHTML="3kg";
        this.sizeG = 30;
        localStorage.setItem("bagSize", btt.innerHTML);
        localStorage.setItem("bag", sizeG); break;}
    }

    price.value = grapes*bag*count;
    price.value = grape*sizeG*count;
}
