// "start": "json-server --watch ./JSON/db.json"

let keys = ["bestseller","newlaunches","parathapizza","vegpizza","gourmet","nonvegpizza","beverages","specialitychicken","sides","pizzamania","lunchcombos","mealfortwo","mealforfour","dessert","chefboss"]

let container = document.getElementById("main-container");
let container1 = document.getElementById("container1");
let fotterdiv  =document.getElementById("fotterdiv");
let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let cartParent = document.getElementById("cartParent");
let data = JSON.parse(localStorage.getItem("cart"))||[];


display(data);

for(let i=0;i<keys.length;i++){

fetch(`https://dull-gold-badger-suit.cyclic.app/${keys[i]}`)
.then((res)=>{
return  res.json();
})
.then((data)=>{

console.log(data)
card(data,keys[i])

})
.catch((error)=>{
    console.log(error);
})

}


// let container = document.getElementById("cart-container");
// let total = document.getElementById("cart-total")



function display(abcd){
    cartParent.innerHTML = null;
   abcd.forEach((element,index)=>{
        let card = document.createElement("div");
        card.setAttribute("class","one1")
        let img = document.createElement("img");
        img.setAttribute("src",element.image);
        let brand = document.createElement("h2");
        brand.innerText = element.product;        
        // let price = document.createElement("h3");
        // let des =document.createElement("p");
        let des = element.desc ? element.desc.substring(0,120)+"..." : "No description"
        des.innerText = element.desc;
        
        // let cate = document.createElement("p");
        let btn1 = document.createElement("button");
        btn1.innerText = "+";
        btn1.setAttribute("class","div33")
        let btn2 = document.createElement("button");
        btn2.innerText = "-";
        btn2.setAttribute("class","div33")
        let btn3 = document.createElement("button");
         btn3.innerText = "Remove";
        //  btn3.setAttribute("class","div33")
        let span =document.createElement("span");
        span.innerText = element.quantity;
        span.setAttribute("class","div33")           
        let simgdiv = document.createElement("div");
        simgdiv.setAttribute("class","simgdiv")
        let dicsdiv = document.createElement("div");
        dicsdiv.setAttribute("class"," dicsdiv")
        let Quntitydiv = document.createElement("div");
        Quntitydiv.setAttribute("class","Quntitydiv")
        let pricesdiv = document.createElement("div");
        pricesdiv.setAttribute("class","pricesdiv")
        let jay1 = document.createElement("div");
        jay1.setAttribute("class","jay1")
        let jay2 = document.createElement("div");
        jay2.setAttribute("class","jay2")
        let jay3 = document.createElement("div");
        jay3.setAttribute("class","jay3")
        let btncheckout =document.createElement("button");
        btncheckout.innerText = "CHECKOUT";
        btncheckout.setAttribute("class"," btncheckout")

        let span1 =document.createElement("span");
        span1.innerText = 0;
    
        // img.setAttribute("src",element.image);
       
        //price.innerText = element.price;
        
        // cate.innerText = element.category;                                   
        // +
        btn1.addEventListener("click",()=>{
            span.innerText++
            element.quantity++
            sum();
        })
        // -
        btn2.addEventListener("click",()=>{
           if(span.innerText>=0) {span.innerText--
            element.quantity--
            sum();}
        })
        // Remove
        btn3.addEventListener("click",()=>{
            data.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(data))
            display(data);
            sum()
        })

        simgdiv.append(img)
        dicsdiv.append(brand,des)
         Quntitydiv.append(btn1,span,btn2,btn3)
        pricesdiv.append(Quntitydiv)
         jay1.append(simgdiv,dicsdiv)
          jay2.append(pricesdiv)
          jay3.append(btncheckout)
          card.append(jay1,jay2);
          cartParent.append(card)

    })
    }
function card(data,key){

    //container.innerHTML=null;
    let main1 = document.createElement("div");
    main1.setAttribute("class","main1")    
    
    let heading = document.createElement("h2");
    heading.innerText = key.toUpperCase();
    
    heading.setAttribute("id",`${key}`);
    
   

    let main = document.createElement("div");
    main.setAttribute("class","main") 
    let cart = [];
    // --------------------------------------------------------------------------------------------------------------
    data.forEach(function(element,index){

        let des = element.desc ? element.desc.substring(0,125)+"..." : "No description"

        let one = document.createElement("div");
        one.setAttribute("class","one")

        let image = document.createElement("img");
        image.setAttribute("src",element.image);
  
        let name= document.createElement("h3");
        name.innerText =  element.product;


        let addtocard = document.createElement("div");
        addtocard.setAttribute("class","addtocard")

        let span1 =document.createElement("span");
        span1.innerText = 0;
        
      let btn = document.createElement("button");
      btn.innerText = "ADD TO CART"
      btn.setAttribute("class","btn")
      btn.addEventListener("click",(e)=>{
        let localdata = JSON.parse(localStorage.getItem("cart"))||[];
        let ans = false;
        localdata.forEach((ele)=>{
            if(ele.id === element.id){
                ans = true;
            }
        })

        if(ans == true){
            alert("Product Already in Cart")
        }else{
        localdata.push({...element,quantity:1})
        localStorage.setItem("cart",JSON.stringify(localdata));
        alert("Product Added To Cart")      
        }
        location.reload()
    })

   

        let addtocard1 = document.createElement("div");
        addtocard1.setAttribute("class","addtocard1")

        let addbtn = document.createElement("button");
        addbtn.innerText = "+"
        addbtn.setAttribute("class","addsubbut")
        let substrctbtn = document.createElement("button");
        substrctbtn.innerText = "-"
        substrctbtn.setAttribute("class","addsubbut")
        let span =document.createElement("span");
        span.innerText = 0;
        span.setAttribute("class","addsubbut")

      addbtn.addEventListener("click",()=>{
        span.innerText++
        element.quantity++
        sum();
    })
    // -
    substrctbtn.addEventListener("click",()=>{
        span.innerText--
        element.quantity--
        sum();
    })   

      let desc= document.createElement("p");
        desc.innerText =  des;

        let size = document.createElement("select");
        
        let prices = document.createElement("select");
        let def = document.createElement("option");


        def.innerText="Size"       
        size.append(def)
        for(let size1 in element.size){
            let selects = document.createElement("option");
            selects.setAttribute("value",size1)
            selects.innerText = size1 
            // for(let price in element.size[size1]){
            //     let sel = document.createElement("option");
            //     sel.innerText = element.size[size1]
            //     prices.append(sel); 
            // }
        size.append(selects);
        }
        prices.innerText = "Hello"
        size.addEventListener("change",(e)=>{
            
            if(e.target.value=="Regular"){
               prices.innerHTML = null;
                for(let key in element.size.Regular){
                    let sel = document.createElement("option");
                sel.innerText = key + element.size.Regular[key]
                prices.append(sel); 
                }
            }
            else if(e.target.value=="Medium"){
             prices.innerHTML = null;
                for(let key in element.size.Medium){
                    let sel = document.createElement("option");
                sel.textContent = key + element.size.Medium[key]
                prices.append(sel); 
                }
            }
            else if(e.target.value=="Large"){
               prices.innerHTML = null;
                for(let key in element.size.Large){
                    let sel = document.createElement("option");
                sel.innerText = key + element.size.Large[key]
                prices.append(sel); 
                }
            }
            else if(e.target.value=="price"){
               prices.innerHTML = null;
                
                let sel = document.createElement("option");
                sel.innerText = element.size.price
                prices.append(sel); 
            
            }else{
                prices.innerHTML = null
            }

        })
        //let price = document.createElement("select");
        // for(let price1 in element.size){
        //     let selects = document.createElement("option");
        //     selects.innerText = price1 
        //     size.append(selects);
        // }
        // let price = document.createElement("h4");
        // price.innerText = "MRP:"+ element.price;

        addtocard1.append(substrctbtn,span,addbtn)
        addtocard.append(addtocard1)
        one.append(image,name,desc,size,prices,btn);
        main.append(one)
        main1.append(heading,main);
        // main2.append(main1) 
        m1.append(main1)  
        // m2.append()
        container.append(m1,m2);
        container1.append(container,fotterdiv)
    })


}
// navbar
function openNav() {
    document.getElementById("mySide").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySide").style.width = "0";
}

const loginBtn = document.getElementById("login-btn");
const slidingLogin = document.getElementById("sliding-login");

loginBtn.addEventListener("click", function () {
    slidingLogin.classList.toggle("active");
});
// navbar done
let bestseller = document.getElementById("bestseller")
let newlaunches = document.getElementById("newlaunches")
let sides = document.getElementById("sides")
let parathapizza = document.getElementById("parathapizza")
let vegpizza = document.getElementById("vegpizza")
let nonvegpizza = document.getElementById("nonvegpizza")
let beverages = document.getElementById("beverages")
let pizzamania = document.getElementById("pizzamania")
let lunchcombos = document.getElementById("lunchcombos")
let mealfortwo = document.getElementById("mealfortwo")
let mealforfour = document.getElementById("mealforfour")
let dessert = document.getElementById("dessert")
let chefboss = document.getElementById("chefboss")
let specialitychicken = document.getElementById("specialitychicken")

let divs = document.querySelector(".one1")



sides.addEventListener("click", () => {
        sides.scrollIntoView({ behavior: 'smooth' });
    });


bestseller.addEventListener("click", function () {
    bestseller.scrollIntoView({ behavior: 'smooth' });
});

newlaunches.addEventListener("click", function () {
    newlaunches.scrollIntoView({ behavior: 'smooth' });
});

parathapizza.addEventListener("click", function () {
    parathapizza.scrollIntoView({ behavior: 'smooth' });
});


vegpizza.addEventListener("click", function() {
    vegpizza.scrollIntoView({behavior: 'smooth'});
        });

nonvegpizza.addEventListener("click", function() {
    nonvegpizza.scrollIntoView({behavior: 'smooth'});
});


beverages.addEventListener("click", function() {
    beverages.scrollIntoView({behavior: 'smooth'});
});


pizzamania.addEventListener("click", function() {
    pizzamania.scrollIntoView({behavior: 'smooth'});
});
                

lunchcombos.addEventListener("click", function() {
    lunchcombos.scrollIntoView({behavior: 'smooth'});
});

mealfortwo.addEventListener("click", function() {
    specialitychicken.scrollIntoView({behavior: 'smooth'});
});


mealforfour.addEventListener("click", function() {
    mealforfour.scrollIntoView({behavior: 'smooth'});
});


dessert.addEventListener("click", function() {
    dessert.scrollIntoView({behavior: 'smooth'});
});


chefboss.addEventListener("click", function() {
    chefboss.scrollIntoView({behavior: 'smooth'});
});


specialitychicken.addEventListener("click", function() {
    specialitychicken.scrollIntoView({behavior: 'smooth'});
});



// scrollup

let mybutton = document.getElementById("MYBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}