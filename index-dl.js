document.querySelector("#sign").addEventListener("click",function (){
    document.querySelector(".signin").style.display="flex";
})

let otp;
document.querySelector(".submit").addEventListener("click",function (){
    let lsdata=JSON.parse(localStorage.getItem("urban"))||[];
    let number = document.querySelector("#number").value;
    document.querySelector("#number").value="";
    otp=Math.random()*8999+1000;
    otp = otp.toFixed();
    let obj={
        number:number,
        otp:otp,
    }
    console.log(obj.otp);
    localStorage.setItem("urban",JSON.stringify(obj));
})
document.querySelector(".login").addEventListener("click",function (){
   let value = document.querySelector("#OTP").value;
   let lsdata=JSON.parse(localStorage.getItem("urban"))||[];
   if (value ==lsdata.otp)
   {
    alert("Login Succesful");
    document.querySelector(".signin").style.display="none";
    let x="My Bookings";
    document.querySelector(".element_add").append(x);
    document.querySelector("#sign").innerText="Logout-Verified Customer";
    document.querySelector(".navbar>div:nth-child(2)").style.width="45%";
   }
})