//otp verify success
const verifyButton = document.getElementById('otpButton');
verifyButton.addEventListener('click', () => {
    var enteredOtp = document.getElementById('otp');
    console.log(enteredOtp)
    if (number1 == enteredOtp.value) {
      //start
        enteredOtp.disabled=true;
        enteredOtp.value="Otp verified successfully!";
        enteredOtp.style.background="rgb(114, 219, 122) ";
        messageBox.disabled = false;
        requestButton.disabled = false;
      //end
    }
    else {
        alert("Enter a valid otp")
    }
})

//submit then
var send = document.getElementById("submit1");
send.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name1");
    const mobile = document.getElementById("mobile");
    const msg = document.getElementById("msg");
    try {
      //start
          var delForm=document.getElementById("form1")
          delForm.innerHTML="";
          var afterSubmit=document.getElementById("afterSubmit");
          afterSubmit.innerHTML=`<h3 style="text-align:center">Request Sent Successfully</h3>`;
          setTimeout(()=>{
              window.location.href="Donors.html";
          }, 3000) //end
        Email.send({
            Host: "smtp.gmail.com",
            Username: "jd.donateblood@gmail.com",
            Password: "donateblood",
            To: emailid,
            From: "jd.donateblood@gmail.com",
            Subject: "Emergency!!!,Someone needs your help",
            Body: "Hi I'm " + name.value + ",\n" + msg.value + "\n Contact Number: " + mobile.value,
        }).then(function (message) {
            alert("mail sent successfully")
        });
    } catch (err) {
        console.log(err)
    }
    
});
