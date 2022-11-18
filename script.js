const bar = document.querySelector('#bar')
const close = document.querySelector('#close')
const nav = document.querySelector('#navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


////////////////////////////
let test = 'will change ';

const proContainer = document.querySelectorAll('.containerancorclass')
proContainer.forEach(e => {
    
    e.addEventListener('click', () => {
        console.log('______________________________________')
    console.log('working')
    console.log(e)
    const priceTag = e.getElementsByTagName('h4')
    const productNameTag = e.getElementsByTagName('h5')
    const price = priceTag[0].innerHTML
    const productName = productNameTag[0].innerHTML
    console.log(price)
    console.log(productName)
        console.log('paced the data to the UpdateShopData function')
        UpdateShopeData(price, productName);
    })
    //console.log(kk)
});

const singalProductName = document.querySelector('.updatesingalproductname')

function UpdateShopeData(price, productName) {

    console.log(`receved the data to UpdateShopeData function price = ${price} productName = ${productName}`);

   
    console.log(singalProductName);
    singalProductName.innerHTML = 'changed';



}


console.log(test);










