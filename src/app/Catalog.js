import product from "./product";
import Util from "./Util";
export class Catalog{
    products;
    constructor(Data){
        let i;
        let len = Data.products.length;
        this.products=new Array(len);
        for(i=0;i<len;i++){
            this.products[i]=new product(Data.products[i]);
        }
        for(i=0;i<len;i++){
            this.render(i);
        }
        console.log(this);
    }
    render(i){
        const e1 = document.createElement('div');
        e1.setAttribute('class', 'product')
        e1.innerHTML= "<div class='grid-item'>" +
            "<img/>" +
            "<div class='product-txt'>" +
            "<h1>Name</h1>" +
            "<p>Description</p>" +
            "<h6>Price</h6>" +
            "</div>" +
            "<div><input placeholder='0'/></div>" +
            " <button style='Background: white; Border:none;  Border-Radius:4px; -WebKit-Box-Shadow:0 3px 13px -2px rgba(0,0,0.15); Box-Shadow:0 3px 13px -2px Rgba(0, 0, 0, 0.15); font-family:'Ubuntu', Sans-Serif; Overflow: Hidden; '>Add To Cart</button></div>";

        e1.querySelector('h1').innerText = this.products[i]._Name;
        e1.querySelector('p').innerText = this.products[i]._Description;
        e1.querySelector('h6').innerText = this.products[i]._Price.toString(10);
        e1.querySelector('img').src = this.products[i]._ImgUrl;
        e1.querySelector('button').setAttribute('class',this.products[i]._Id+"add");
        document.getElementById('catalog').appendChild(e1);
        Util.connectButtons(i);
        
    }
    
}