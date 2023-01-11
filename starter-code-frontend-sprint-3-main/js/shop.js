// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
         id: 1,
         name: 'cooking oil',
         price: 10.5,
         type: 'grocery',
         offer: {
             number: 3,
             percent: 20
         }
     },
     {
         id: 2,
         name: 'Pasta',
         price: 6.25,
         type: 'grocery'
     },
     {
         id: 3,
         name: 'Instant cupcake mixture',
         price: 5,
         type: 'grocery',
         offer: {
             number: 10,
             percent: 30
         }
     },
     {
         id: 4,
         name: 'All-in-one',
         price: 260,
         type: 'beauty'
     },
     {
         id: 5,
         name: 'Zero Make-up Kit',
         price: 20.5,
         type: 'beauty'
     },
     {
         id: 6,
         name: 'Lip Tints',
         price: 12.75,
         type: 'beauty'
     },
     {
         id: 7,
         name: 'Lawn Dress',
         price: 15,
         type: 'clothes'
     },
     {
         id: 8,
         name: 'Lawn-Chiffon Combo',
         price: 19.99,
         type: 'clothes'
     },
     {
         id: 9,
         name: 'Toddler Frock',
         price: 9.99,
         type: 'clothes'
     }
 ]
 // Array with products (objects) added directly with push(). Products in this array are repeated.
 var cartList = [];
 
 // Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
 var cart = [];
 
 var total = 0;
 
 // Look for the product
 function search(id){
 
     let i = 0,
         index = -1,
         founded = false,
         longArray = products.length - 1;
 
     while (i <= longArray && !founded) {
 
         if (id == products[i].id) {
 
             founded = true;
             index = i;
         }
 
         i++
 
     }
 
 
     return index;
 
 }
 
 // Exercise 1
 
 
 
 function buy(id) {
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cartList array
     // let founded= false;
     // i=0;
 
     // while (!founded && i< products.length){
 
     //     if (i== products[i].id){
     //         founded = true;
     //     }
 
     //     else {
     //         i++;
     //     }
 
 
 
     // }
     // console.log(i);
     let index = search(id);
     console.log("Index:", index);
 
     cartList.push(products[index]);
 
     // console.table(cartList);
 
      //llamada función que genera Carrito
      generateCart();
      //llamada función que calcula el total del Carrito
      calculateTotal();
 
 
 }
 
 // Exercise 2
 function cleanCart() {
 
     //  //alert("limpiar cesta");
 
     // //limpiar cesta
     // cartList = [];
     // cart = [];
     // cart.total = 0;
 
     // //función imprime cesta modal 
     // printCart();
     // //ponemos el contador de la cesta a 0
     // document.getElementById('count_product').innerHTML = 0;
     // //console.log(cart);
 
     cartList.length = 0;
 
     console.log(cartList);
 
 }
 
 // Exercise 3
 function calculateTotal() {
     // Calculate total price of the cart using the "cartList" array
 
     let suma = 0;
 
     for (let i=0;i<cartList.length;i++){
 
 
        console.log("Precio Producto: ", cartList[i].price);
        suma = suma + cartList[i].price;
     }
 
     console.log("Suma Total: ",suma);
     return suma;
 
 
 
 }
 
 
 // Exercise 4
 function generateCart() {
     // Using the "cartlist" array that contains all the items in the shopping cart, 
     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
 
     // ------------------------------PRUEBA C-------------------------------------------------------------------------
 
 
 cart = [];
     for(let i=0;i<cartList.length;i++){
         let existe = false; 
         let idCartList = cartList[i].id;  
 
         for(let j=0;j<cart.length; j++){
             let idCart = cart[j].id;
             if(idCartList == idCart){
                 cart[j].quantity++;
                 existe = true;
                 console.log("Entra al if Existeix " );
                 
             }
         }
 
         if(!existe){
             cart.push(cartList[i]);
             cartList[i].quantity = 1;
             console.log("NO Entra al if Existeix");            
         }
     }
 
     console.table(cart);
     applyPromotionsCart();
 
 
 
 
     // ------------------------------FIN PRUEBA C---------------------------------------------------------------------
 
 
 
 }
 
 // Exercise 5
 function applyPromotionsCart() {
     // Apply promotions to each item in the array "cart"
     for (i = 0; i < cart.length; i++) {
         if (cart[i].name == 'cooking oil' && cart[i].quantity >= 3)
             //promoción aceite si compra más de 3 botellas             
             cart[i].subtotalWithDiscount = cart[i].quantity * 10;
 
 
         else if (cart[i].name == 'Instant cupcake mixture' && cart[i].quantity >= 10)
             //con más de 10 productos para hacer pastel
             cart[i].subtotalWithDiscount = (cart[i].subtotal / 3) * 2; 
         else {
             delete cart[i].subtotalWithDiscount;            
         }
         cart[i].subtotal = cart[i].quantity * cart[i].price;
     }
 
 }
 
 
 
 // Exercise 6
 function printCart() {
      // Fill the shopping cart modal manipulating the shopping cart dom
    document.getElementById('cart_list').innerHTML = "";
    document.getElementById('total_price').innerHTML = "";  
    let itemsTable = "";
    let finalPrice = 0;
    
    for (let i = 0; i < cart.length; i++) {
        let quantity = cart[i].quantity;
        let price = cart[i].price;
        let subtotal = price * quantity;
        let subtotalWithDiscount = subtotal;
        if (cart[i].subtotalWithDiscount) {
            subtotalWithDiscount = cart[i].subtotalWithDiscount;
        }
        let item = "<tr>"
                + "<th scope='row'>"+cart[i].name+"</th>"
                + "<td align='right'>"+price+" &euro;</td>"
                + "<td align='center'>"+quantity+"</td>" 
                + "<td align='right'>"+subtotal+" &euro;</td>"
                + "<td align='right'><b>" +subtotalWithDiscount+" &euro;</b></td>"
        itemsTable += item;
        finalPrice += subtotalWithDiscount;
    }
    
    document.getElementById('cart_list').innerHTML = itemsTable;
    document.getElementById('total_price').innerHTML = Math.round(finalPrice * 100) / 100;
    document.getElementById('count_product').innerHTML = cartList.length;
 
 }


 
 
 // ** Nivell II **
 
 // Exercise 7
 function addToCart(id) {
     // Refactor previous code in order to simplify it 
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cart array or update its quantity in case it has been added previously.
 }
 
 // Exercise 8
 function removeFromCart(id) {
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cartList array
 }
 
 function open_modal(){
     console.log("Open Modal");
     printCart();
 }