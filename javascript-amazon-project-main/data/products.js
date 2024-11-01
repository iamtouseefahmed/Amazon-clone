function product(id , image , name , starrating , ratingcount, priceCents) {
   this.id = id, 
   this.image = image,
   this.name = name,
   this.starrating = starrating,
   this.ratingcount = ratingcount,
   this.priceCents = priceCents

}

let product1 = product( "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", "images/products/athletic-cotton-socks-6-pairs.jpg" , 
  "Black and Gray Athletic Cotton Socks - 6 Pairs"  , 4.5 , 87 , 1090 );
 
let product2 = product("15b6fc6f-327a-4ec4-896f-486349e85a3d" ,  "images/products/intermediate-composite-basketball.jpg"
  , "Intermediate Size Basketball" , 4 , 127 , 2095
);
 
let product3 = product( "83d4ca15-0f35-48f5-b7a3-1ea210004f2e" ,  "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
  , 4.5 , 56 , 799
);

let product4 = product( "54e0eccd-8f36-462b-b68a-8182611d9add" , "images/products/black-2-slot-toaster.jpg" , 
    "2 Slot Toaster - Black" , 5 , 2197 , 1899
);



  let productarray = [product1 , product2 , product3 , product4];

  console.log(productarray.name); 

 productarray.forEach((products) => {
    const html  = `
    <div class="product-container">
             <div class="product-image-container">
               <img class="product-image"
                 src="${products.image}">
             </div>
   
             <div class="product-name limit-text-to-2-lines">
               ${products.name}
             </div>
   
             <div class="product-rating-container">
               <img class="product-rating-stars"
                 src="images/ratings/rating-${products.starrating * 10 } .png">
               <div class="product-rating-count link-primary">
                 ${products.ratingcount}
               </div>
             </div>
   
             <div class="product-price">
               ${products.priceCents / 100}
             </div>
   
             <div class="product-quantity-container">
               <select>
                 <option selected value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
               </select>
             </div>
   
             <div class="product-spacer"></div>
   
             <div class="added-to-cart">
               <img src="images/icons/checkmark.png">
               Added
             </div>
   
             <button class="add-to-cart-button button-primary">
               Add to Cart
             </button>
           </div>
   
   `; 
     console.log(html);
    });
