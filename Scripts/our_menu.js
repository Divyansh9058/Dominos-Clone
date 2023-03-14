
let base="https://dull-gold-badger-suit.cyclic.app/"

let veg_url= base+"veg"
let non_veg_url=base+"non_veg "
let side_order_url=base+"side_order"
let beverage_url=base+"beverage"


   fetch(veg_url)
  .then((res)=>res.json())
  .then((data)=>(display(data)))
  
  function display(data){ 
    document.querySelector(".veg").addEventListener("click",()=>{
    document.getElementById("pizza_name").innerText="VEG PIZZAS"
   });
  
    data.forEach(elem => {
       let card=document.createElement("div");

       let title=document.createElement("h3");
       title.innerText=elem.title

       let image= document.createElement("img");
       image.setAttribute("src",elem.image)

       let dis=document.createElement("p");
       dis.innerText=elem.description

       let button =document.createElement("button")
       button.innerText="ORDER NOW"

       button.addEventListener("click",()=>{
       window.location.href="../Pages/product.html"
      
       })

       card.append(image,title,dis,button)
       document.getElementById("pizza_display").append(card)
    });
  } 
   


   document.querySelector(".veg").addEventListener("click",(data)=>{
    document.getElementById("pizza_name").innerText="NON VEG PIZZAS"
     document.getElementById("pizza_display").innerHTML=null
          fetch(veg_url)
            .then((res)=>res.json())
            .then((data)=>{
                display(data)
            })
   });


   document.querySelector(".non_veg").addEventListener("click",(data)=>{
    document.getElementById("pizza_name").innerText="NON VEG PIZZAS"
     document.getElementById("pizza_display").innerHTML=null
          fetch(non_veg_url)
            .then((res)=>res.json())
            .then((data)=>{
                display(data)
            })
   });


   document.querySelector(".side_order").addEventListener("click",(data)=>{
    document.getElementById("pizza_name").innerText="SIDE ORDER"
     document.getElementById("pizza_display").innerHTML=null
          fetch(side_order_url)
            .then((res)=>res.json())
            .then((data)=>{
                display(data)
            })
   });

   document.querySelector(".beverages").addEventListener("click",(data)=>{
    document.getElementById("pizza_name").innerText="BEVERAGES"
     document.getElementById("pizza_display").innerHTML=null
          fetch(beverage_url)
            .then((res)=>res.json())
            .then((data)=>{
                display(data)
            })
   });

  
