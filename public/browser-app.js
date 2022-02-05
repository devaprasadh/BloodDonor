const formDOM = document.querySelector('#form1');

// register



formDOM.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("here")
    var uname=document.getElementById("name");
    var gender=document.getElementById("gender")
    var email=document.getElementById("email");
    var bloodtype=document.getElementById("blood-type");
    var states=document.getElementById("states");
    var cities=document.getElementById("cities");
    var status = document.getElementsByName("status")
    var age = document.getElementById("Age")

    for(i = 0; i < status.length; i++) {
        if(status[i].checked)
        {
        var status1=status[i].value;
        }
    }
    var user={
    name:uname.value,
    email:email.value,
    gender:gender.value,
    age:age.value,
    bloodType:bloodtype.value,
    status:status1,
    cities:cities.value,
    states:states.value
    };

    try{
        await axios.post('/donor/register', user);
        alert("success")

    }catch(err){
        alert("fail")
    }

});