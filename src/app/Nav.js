export default class Nav{

    static ShowSideBar(){
        let bool = false;
        document.getElementById('sideBar').style.display = "none";
        const cartButton= document.getElementById("shoppingCart");
        cartButton.addEventListener("click", () =>{
            if(bool){
                document.getElementById('sideBar').style.display = "none";
                bool = false
            }
            else {
                document.getElementById('sideBar').style.display = "";
                bool = true
            }
        })
    }
}