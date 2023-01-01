export default class CarLine{
    _Id
    _Name
    _Description
    _Price
    _Quantity
    _ImgUrl

    constructor(Data) {
        this._Id = Data.Id;
        this._Name = Data.Name;
        this._Description = Data.Description;
        this._Price = Data.Price;
        this._Quantity = Data.Quantity;
        this._ImgUrl = Data.ImgUrl;
    }
    get _Id(){return this._Id}
    get _Description(){return this._Description}
    get _ImgUrl(){return this._ImgUrl}
    get _Name(){return this._Name}
    get _Price(){return this._Name}
    get _Quantity(){return this._Quantity}
    
   set _Id(i){this._Id=i}
   set _Description(i){ this._Description=i}
   set _ImgUrl(i){ this._ImgUrl=i}
   set _Name(i){ this._Name=i}
   set _Price(i){ this._Name=i}
   set _Quantity(i){ this._Quantity=i}

    printProduct(){
        console.log("Item Name:" + this.name);
        console.log("Disription:" +this.description);
        console.log("Price: " + this.price);
    }
    updatePrice(x){
        this.price+=x;
    }
    updateQuantity(x){this.quantity+=x;}

}
