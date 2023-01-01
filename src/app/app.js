import { Catalog } from "./Catalog"
import Data from "../product.json"
import Nav from "./Nav";
import Cart from "./cart";
import Util from "./Util"
export const run = () => {

const catalog=new Catalog(Data);
const cart = new Cart(catalog.products);
Util.connectElement();
}
