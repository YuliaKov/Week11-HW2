const imgJacket = document.getElementById('imgJacket');
const jacketColor = document.getElementById('jacketColor');
const imgSneakers = document.getElementById('imgSneakers');
const sneakersColor = document.getElementById('SneakersColor');
const imgJeans = document.getElementById('imgJeans');
const jeansColor = document.getElementById('jeansColor');
const imgBelt = document.getElementById('imgBelt');
const beltColor = document.getElementById('beltColor');
const jacketQty = document.getElementById('jacketQty');
const sneakersQty = document.getElementById('sneakersQty');
const jeansQty = document.getElementById('jeansQty');
const beltQty = document.getElementById('beltQty');
const jacketPrice = document.getElementById('jacketPrice');
const sneakersPrice = document.getElementById('sneakersPrice');
const jeansPrice = document.getElementById('jeansPrice');
const beltPrice = document.getElementById('beltPrice');
let totalSum = document.getElementById('totalSum');


function chooseJacketColor() {
    if(jacketColor.value == "nothing")
    imgJacket.src = "";
    if(jacketColor.value == "black")
    imgJacket.src = "./img/jacket-bl.jpg";
    if(jacketColor.value == "beige")
    imgJacket.src = "./img/jacket-beige.jpg";
}

function chooseSneakersColor() {
    if(sneakersColor.value == "nothing")
    imgSneakers.src = "";
    if(sneakersColor.value == "grey")
    imgSneakers.src = "./img/sneakers-grey.jpg";
    if(sneakersColor.value == "beige")
    imgSneakers.src = "./img/sneakers-beige.jpg";
    if(sneakersColor.value == "green")
    imgSneakers.src = "./img/sneakers-green.jpg";
}

function chooseJeansColor() {
    if(jeansColor.value == "nothing")
    imgJeans.src = "";
    if(jeansColor.value == "black")
    imgJeans.src = "./img/jeans-black.jpg";
    if(jeansColor.value == "white")
    imgJeans.src = "./img/jeans-white.jpg";
    if(jeansColor.value == "blue")
    imgJeans.src = "./img/jeans-blue.jpg";
}

function chooseBeltColor() {
    if(beltColor.value == "nothing")
    imgBelt.src = "";
    if(beltColor.value == "black")
    imgBelt.src = "./img/belt-black.jpg";
    if(beltColor.value == "brown")
    imgBelt.src = "./img/belt-brown.jpg";
    if(beltColor.value == "blue")
    imgBelt.src = "./img/belt-blue.jpg";
}

function chooseJacketQty() {
    let sumJacketPrice = 9990;
if(jacketQty.value == "0")
    sumJacketPrice = sumJacketPrice*0;
    jacketPrice.innerText = sumJacketPrice + " руб.";
if(jacketQty.value == "1")
    sumJacketPrice = sumJacketPrice*1;
    jacketPrice.innerText = sumJacketPrice + " руб.";
if(jacketQty.value == "2")
    sumJacketPrice = sumJacketPrice*2;
    jacketPrice.innerText = sumJacketPrice + " руб.";
if(jacketQty.value == "3")
    sumJacketPrice = sumJacketPrice*3;
    sumJacketPrice = sumJacketPrice.toFixed(2);
    jacketPrice.innerText = sumJacketPrice;
}

function chooseSneakersQty() {
    let sumSneakersPrice = 5990;
    if(sneakersQty.value == "0")
        sumSneakersPrice = sumSneakersPrice*0;
        sneakersPrice.innerText = sumSneakersPrice + " руб.";
    if(sneakersQty.value == "1")
        sumSneakersPrice = sumSneakersPrice*1;
        sneakersPrice.innerText = sumSneakersPrice + " руб.";
    if(sneakersQty.value == "2")
        sumSneakersPrice = sumSneakersPrice*2;
        sneakersPrice.innerText = sumSneakersPrice + " руб.";
    if(sneakersQty.value == "3")
        sumSneakersPrice = sumSneakersPrice*3;
        sumSneakersPrice = sumSneakersPrice.toFixed(2);
        sneakersPrice.innerText = sumSneakersPrice;
    }

    function chooseJeansQty() {
        let sumJeansPrice = 4990;
        if(jeansQty.value == "0")
            sumJeansPrice = sumJeansPrice*0;
            jeansPrice.innerText = sumJeansPrice + " руб.";
        if(jeansQty.value == "1")
            sumJeansPrice = sumJeansPrice*1;
            jeansPrice.innerText = sumJeansPrice + " руб.";
        if(jeansQty.value == "2")
            sumJeansPrice = sumJeansPrice*2;
            jeansPrice.innerText = sumJeansPrice + " руб.";
        if(jeansQty.value == "3")
            sumJeansPrice = sumJeansPrice*3;
            sumJeansPrice = sumJeansPrice.toFixed(2);
            jeansPrice.innerText = sumJeansPrice;
        }

        function chooseBeltQty() {
            let sumBeltPrice = 1990;
            if(beltQty.value == "0")
                sumBeltPrice = sumBeltPrice*0;
                beltPrice.innerText = sumBeltPrice + " руб.";
            if(beltQty.value == "1")
                sumBeltPrice = sumBeltPrice*1;
                beltPrice.innerText = sumBeltPrice + " руб.";
            if(beltQty.value == "2")
                sumBeltPrice = sumBeltPrice*2;
                beltPrice.innerText = sumBeltPrice + " руб.";
            if(beltQty.value == "3")
                sumBeltPrice = sumBeltPrice*3;
                sumBeltPrice = sumBeltPrice.toFixed(2);
                beltPrice.innerText = sumBeltPrice;
            }

            function countTotalSum() {
                const totalJacketPrice = jacketPrice.textContent;
                const jacketPriceNumber = Number(totalJacketPrice);
                const totalSneakersPrice = sneakersPrice.textContent;
                const sneakersPriceNumber = Number(totalSneakersPrice);
                const totalJeansPrice = jeansPrice.textContent;
                const jeansPriceNumber = Number(totalJeansPrice);
                const totalBeltPrice = beltPrice.textContent;
                const beltPriceNumber = Number(totalBeltPrice);
                let totalSumNum = jacketPriceNumber + sneakersPriceNumber + jeansPriceNumber + beltPriceNumber;
                totalSumNum = totalSumNum.toFixed(2);
                totalSum.textContent = totalSumNum;
            }
            
            function discount() {
                const makeDiscount = totalSum.textContent;
                const makeDiscountNumber = Number(makeDiscount);
                let totalWithDiscount = makeDiscountNumber*0.8;
                totalWithDiscount = totalWithDiscount.toFixed(2);
                totalSum.textContent = totalWithDiscount;
            }