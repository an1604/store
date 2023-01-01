import product from "./product";
export default class Cart{
    _CartLines;
    counter;
    constructor(products){
        let i;
        let len = products.length;
        this._CartLines=new Array(len);
        for(i=0;i<len;i++){
            this._CartLines[i]=new product(products[i]);
        }
        // for(i=0;i<len;i++){
            // this.render(i);
        // }
    }
    render(i){
        const e1 = document.createElement('div');
        e1.innerHTML= "<div class='grid-item product'>" +
            "<img/>" +
            "<div class='product-txt'>" +
            "<h1>Name</h1>" +
            "<p>Description</p>" +
            "<h6>Price</h6>" +
            "</div>" +
            "<div><input placeholder='0'/></div>" +
            " <button>Add To Cart</button></div>";

        e1.querySelector('h1').innerText = this.products[i]._Name;
        e1.querySelector('p').innerText = this.products[i]._Description;
        e1.querySelector('h6').innerText = this.products[i]._Price.toString(10);
        e1.querySelector('img').src = this.products[i]._ImgUrl;
        const a =document.getElementById('sideBar'); 
        a.appendChild(e1);
    }
    add(){
        this.render(0);
    }
}