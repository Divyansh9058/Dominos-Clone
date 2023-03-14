

const usersapi = "https://dull-gold-badger-suit.cyclic.app/users";

let myForm = document.querySelector("form");

    //Create logout button
let logoutBtn = document.createElement("button");
logoutBtn.innerText = "Logout";
// var id = 2

myForm.addEventListener("submit",(e)=>{
    
    e.preventDefault();

    let OTP = Math.floor(1000+Math.random() * 9000);

    if(myForm.phone.value=="0000000000"){
       window.location.replace("admin.html");
   }else{
   fetch(usersapi)
   .then((res) => res.json())
   .then((data) => {
       console.log(data)
       let flag = true

       let userObj = {
           "id":data.length+1,
           "phone":myForm.phone.value,
           "address":null,
           "otp":OTP,
       }

       
       for(let i=0;i<=data.length-1;i++){
           if(data[i].phone==myForm.phone.value){
              dataOtpPatch(OTP,data[i].id)
             // swal(`PLZ NOTE DOWN THE ${OTP}`,"","warning")
               Checkotp(OTP)
            

               flag=false
               break;
           }
       }
       if(flag==true){
           dataOTP(userObj)
           Checkotp(OTP)
       

           id++
           console.log(id)
       }
     }); 
   }
   })
   function dataOtpPatch(OTP,data1){
       fetch(`${usersapi}/${data1}`,{
           method:"PATCH",
           headers:{
               "Content-type":"application/json",
           },
           body:JSON.stringify({otp:OTP})
       })
       .then((res)=>{

           // if (!res.ok) {
           //     throw new Error("Something went wrong");
           //   }

           return res.json()
       })
       .then((data)=>{
           console.log(data)
       })
   }

   function dataOTP(userObj){
       fetch(`${usersapi}`,{
           method:"POST",
           headers:{
               "Content-type":"application/json",
           },
           body:JSON.stringify(userObj)
       })
       .then((res)=>{
           return res.json()
       })
       .then((data)=>{
           console.log(data)
       })
   }




   function Checkotp(OTP){
       swal({
           title: 'OTP FOR LOGIN',
           text: `OTP : ${OTP}`,
           icon: 'info',
           showCancelButton: false,
           confirmButtonText: 'OK'
         }).then((result) => {
           if (result.value) {
             // Step 2: Prompt for OTP
             swal({
               title: 'Enter OTP',
               input: 'text',
               inputAttributes: {
                 autocapitalize: 'off'
               },
               showCancelButton: true,
               confirmButtonText: 'Submit',
               showLoaderOnConfirm: true,
             }).then((result) => {
               if (result.value) {
                 if (result.value==OTP) {
                 
                   swal({
                     title: 'Logged In successfully!',
                     text: 'You are logged in successfully.',
                     icon: 'success'
                   });
                   
                   JSON.parse(localStorage.getItem("login")) || "Login";

                   localStorage.setItem("login",JSON.stringify(myForm.phone.value))

                   this.location.reload()

                   let loginBtn = document.getElementById("login-btn");

                  

                 } else {

          
                   loginBtn.innerText='Login'
       
                  
                  swal({

                     title: 'Invalid OTP',
                     text: 'Try Again',
                     icon: 'error'
                   });
                 }
               }
             });
           }
         });
   }


   let getvalue =  JSON.parse(localStorage.getItem("login")) || "Login";

   let loginbt = document.getElementById("login-btn")
   
   
   loginbt.innerText= "Hi " + getvalue





   loginbt.parentNode.appendChild(logoutBtn);

   
   logoutBtn.addEventListener("click", function() {
       
       loginbt.parentNode.appendChild(logoutBtn).style.display="none";;
   swal({

       title: 'Logout Successfully',
       text: 'Thank you for visiting.',
       icon: 'success'
     })


 localStorage.removeItem("login");
 loginbt.innerText = "Login";
});

  