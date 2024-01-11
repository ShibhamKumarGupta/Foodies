function loginhome() {
    window.location = "Foodies-login.html";

}

function logout(){
        localStorage.removeItem('udata');
        document.location="Foodies-login.html";
        alert("Successfully Logged out");
    }
    


function login() {
    var email = document.getElementById("email-id").value;
    var pass = document.getElementById("pass").value;
    if (email != '' && pass != '') {
        var arr=new Array(email,pass);
        var jdata=JSON.stringify(arr);
        localStorage.setItem('udata',jdata);
        window.location = "index.html";
        
    }
    else {
        alert("Enter valid Username and password!!");
    }
}

function register(){
    var mobile=document.getElementById("mobile").value; 
    var firstname=document.getElementById("first-name").value;
    var lastname=document.getElementById("last-name").value;
    var pass=document.getElementById("pass").value;
    var emailid=document.getElementById("email-id").value;
    
    if(emailid!='' && pass!='' && lastname!='' && firstname!='' && mobile!=''){
    alert("Successfully Registered");
    window.location="Foodies-login.html";
    }
    else{
        alert("Please fill all the columns properly..");
    }
}

// counter 
document.addEventListener("DOMContentLoaded", () =>{
    function counter(id, start, end, duration){
        let obj=document.getElementById(id),
        current = start,
        range= end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current==end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1",0,1639,3000);
    counter("count2",0,3372,3000);
    counter("count3",100,5749,2500);
    counter("count4",0,2871,3000);
})