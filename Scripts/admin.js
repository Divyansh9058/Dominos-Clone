

let btn=document.querySelector("#btn");
let Category = document.querySelector("#filter");
let product= document.querySelector("#product");
let img =document.querySelector("#img") 
let desc=document.querySelector("#desc")
let checkbox1 = document.querySelector("#a1")
let checkbox2 = document.querySelector("#a2"); 
let checkbox3 = document.querySelector("#a3");
let checkbox4 = document.querySelector("#a4");
let desc1=document.querySelector("#desc1");
let desc2=document.querySelector("#desc2");
let desc3=document.querySelector("#desc3");

let desc4=document.querySelector("#desc4")
let desca=document.querySelector("#desca")

let descb=document.querySelector("#descb")
let descc=document.querySelector("#descc")

   var id=Number(103)
 var Regular;
 checkbox1.addEventListener("change",function(){
    Regular=checkbox1.value;
console.log(Regular)
})

var Medium;
checkbox2.addEventListener("change",function(){
    Medium=checkbox2.value;
    console.log(Medium)
    })
    var Large;
    checkbox3.addEventListener("change",function(){
        Large=checkbox3.value;
        console.log(Large)
        })
        let  price=null;
        checkbox4.addEventListener("change",function(){
            price=checkbox4.value;
            console.log( price)
            })
    


 
           

 btn.addEventListener("click",function(events){
  events.preventDefault()
   if(price==null){
    userobj={
        id:id,
        category:Category.value,
        product:product.value,
        image: img.value,
        desc:desc.value,
        size:{
            
           
            
            [Regular]:{
                [desc1.value]:desca.value
            },
            [Medium]:{
                [desc2.value]:descb.value
            },
         [Large]:{
            [desc3.value]:descc.value
            }
        
           
            
        }

   }
   if(Medium==undefined ){
    userobj={
        id:id,
        category:Category.value,
        product:product.value,
        image: img.value,
        desc:desc.value,
        size:{
            
            
            
            [Regular]:{
                [desc1.value]:desca.value
            },
           
         [Large]:{
            [desc3.value]:descc.value
            }
        
           
            
        }
    } 
   }
   if(Large==undefined){
   
    userobj={
        id:id,
        category:Category.value,
        product:product.value,
        image: img.value,
        desc:desc.value,
        size:{
            
            
            
            [Regular]:{
                [desc1.value]:desca.value
            },
            [Medium]:{
                [desc2.value]:descb.value
            },
         
        
           
            
        }
    }
   }
   if(Medium==undefined && Large==undefined)
   userobj={
    id:id,
    category:Category.value,
    product:product.value,
    image: img.value,
    desc:desc.value,
    size:{
        
         
        
        [Regular]:{
            [desc1.value]:desca.value
        },
       
        
    }
}
}
if(Regular==undefined && Large==undefined){
    userobj={
        id:id,
        category:Category.value,
        product:product.value,
        image: img.value,
        desc:desc.value,
        size:{
            
           
            
          
            [Medium]:{
                [desc2.value]:descb.value
            },
        
           
            
        }
    }
}
if(Regular==undefined && Medium==undefined){
    userobj={
        id:id,
        category:Category.value,
        product:product.value,
        image: img.value,
        desc:desc.value,
        size:{
             [Large]:{
            [desc3.value]:descc.value
            }
        }

    }
}
if(price!==null){
    userobj={
        id:id,
        category:Category.value,
        product:product.value,
        image: img.value,
        desc:desc.value,
        size:{
            
         [price]:desc4.value, 
            
           
        
           
            
        }  
}
}
   create(userobj,Category);
   id++
     })
    
    function create(userObj,Category) {
        fetch(`https://dull-gold-badger-suit.cyclic.app/${Category.value}`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userObj),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            
            console.log(data);
          });
      }
//       ***************************************************************************************
//    *************************** UPDATE FIELD****************************************************
//     *********************************************************************************************
//     ************************************************************************************************
   

let update=document.getElementById("update")
let idd=document.getElementById("id1")
let Categoryy = document.querySelector("#filter1");
let productt= document.querySelector("#productt");
let imgg =document.querySelector("#imgg") 
let descs=document.querySelector("#descc")
let checkbox11 = document.querySelector("#a11")
let checkbox22 = document.querySelector("#a22"); 
let checkbox33 = document.querySelector("#a33");
let checkbox44 = document.querySelector("#a44");
let desc11=document.querySelector("#desc11");
let desc22=document.querySelector("#desc22");
let desc33=document.querySelector("#desc33");

let desc44=document.querySelector("#desc44")
let descaa=document.querySelector("#descaa")

let descbb=document.querySelector("#descbb")
let desccc=document.querySelector("#desccc")
var r
checkbox11.addEventListener("change",function(){
  r=checkbox11.value;
console.log(r)
})


var m;
checkbox22.addEventListener("change",function(){
  m=checkbox22.value;
  console.log(m)
  })
  var l;
  checkbox33.addEventListener("change",function(){
      l=checkbox33.value;
      console.log(l)
      })
      var p=null;
      checkbox44.addEventListener("change",function(){
          p=checkbox44.value;
          console.log( p)
          })
  

 update.addEventListener("click",function(events){
events.preventDefault();
    console.log("yes");
    id=idd.value;
   var category1=Categoryy.value;
   var product1=productt.value;
   var image1=imgg.value;
var descw=descs.value;
let Obj={};
    if (id) {
      Obj["id"] = id
    }
  
    if (category1){ 
      Obj["category"] =category1 
    }
    if (product1)
    { Obj["product"] = product1
  }
    if ( image1){
      Obj["image"] =  image1
    }
    if (descw) {
      Obj["desc"] = descw
    }
  if(r){
    
    Obj.size={
      [r]:{
          [desc11.value]:descaa.value
      }, 
  }
    } 
  
  if(m){
      
    Obj.size={
        [m]:{
            [desc22.value]:descbb.value
        }, 
    }
      } 
    
    if(l){
     
      Obj.size={
        [l]:{
            [desc33.value]:desccc.value
        }, 
    }
      } 
    
  if(l && m){
       
    Obj.size={
              [m]:{
                  [desc22.value]:descbb.value
              }, 
          
          [l]:{
              [desc33.value]:desccc.value
          }
            
          }   
  
  if(l && r){
      
    Obj.size={
              [r]:{
                  [desc11.value]:descaa.value
              },
              [l]:{
                  [desc33.value]:desccc.value
              } 
          
            }   
  }
  if(r && m){
     
    Obj.size={
              [r]:{
                  [desc11.value]:descaa.value
              },
              [m]:{
                  [desc22.value]:descbb.value
              } 
          }
                
          }
  if(p){
    
    Obj.size={
              
          [p]:desc44.value, 
     } 
    }
  }
   
  
 updateitem(Obj,Categoryy,idd)
 })
 function updateitem(updateobj,Category,idde){
  let idvalinnum=Number(idde.value);
 fetch(`https://dull-gold-badger-suit.cyclic.app/${Category.value}/${idvalinnum}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateobj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    
    })
    .catch((err) => alert(JSON.stringify(err)));
}

// ***********************************************************************************************
// **************************deleted>>>>>............................................................
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..............>>>>>>>>>>>>>>>>>>>>>>>>>>>........
function deleteitem(category,iddf){
  fetch(`https://dull-gold-badger-suit.cyclic.app/${category}/${iddf}`, {
     method: "DELETE",
     
   })
     .then((res) => res.json())
     .then((data) => {
      console.log(data);
     
     })
     .catch((err) => alert(JSON.stringify(err)));
 }
 let id2=document.querySelector("#id2");
 let DELETE1=document.querySelector("#del")
 let sel=document.querySelector("#filter2")
 DELETE1.addEventListener("click",function(){

  let idvalinnum=Number(id2.value);
select=sel.value;
  deleteitem(select,idvalinnum)
 })
see=document.querySelector("#see");
see.addEventListener("click",function(){
  window.location.href="../Pages/product.html"
})
see1=document.querySelector("#see1");
see1.addEventListener("click",function(){
  window.location.href="../Pages/product.html"
})
see2=document.querySelector("#see2");
see2.addEventListener("click",function(){
  window.location.href="../Pages/product.html"
})