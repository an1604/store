import Cart from "./cart";
import Nav from "./Nav"
import product from "./product";

export default class Util {

    static connectElement() {
        Nav.ShowSideBar();
    }

    static connectButtons(i) {
        const b1 = document.getElementsByClassName('product')[i];
        b1.querySelector('button').addEventListener('click', () => {
            // alert("hello");
            const a =document.getElementById('sideBar');
            a.appendChild(b1);
        })
0    }
    // duplicateProduct(b1){
        // let c = new product();
        // c._Id=b1._Id;
        // c._Description=b1._Description;
        // c._ImgUrl=b1._ImgUrl;
        // c._Name=b1._Name;
        // c._Price=b1._Price;
        // c._Quantity=b1._Quantity;
        // return c;
    // }
}