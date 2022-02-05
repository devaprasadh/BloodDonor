

const getDonors = async () =>{
    try{
        const donor= await axios.get('donor/all')
        const users = donor.data.donors;
        console.log(users.length);
        var bloodtype=document.getElementById("blood-type");
        var States1=document.getElementById("states");
  
        var Cities1=document.getElementById("cities");
        for(i=0;i<users.length;i++)
        { 
            console.log('inside for loop')
      
            if(States1.value==users[i].states && Cities1.value==users[i].cities && bloodtype.value==users[i].bloodType)
            {
                console.log("inside if");
                var fetch1 = document.getElementById('row1').innerHTML;  
                dynamic.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-3 ">
                <div id="cards${i}" class="card my-3">
                <div class="card-body">
                <h1 class="card-title">${users[i].bloodType}</h1>
                <p id="letter">
                <span>NAME  </span>   :   ${users[i].name}<br>
                <span>GENDER</span> :   ${users[i].gender}<br>
                <span>AGE   </span>    :   ${users[i].age}<br>
                </p>
                <a href="Mailform.html?id=${users[i].email}" class="btn btn-primary" id=${users[i].email}>REQUEST</a>
                </div>
                </div>
                </div>` + fetch1 ;
                btn.disabled = true;
            }  
            else if(i==users.length-1&&States1.value!==users[i].states && Cities1.value!==users[i].cities && bloodtype.value!==users[i].bloodType)
            { 
                dynamic.innerHTML ="";
                alert("SORRY!!! DONOR NOT AVAILABLE IN YOUR REGION")
            }
      
        } 
    
        
    }catch(err){
        alert(err.message)
        
    }

    
}

    
    var dynamic = document.getElementById('row1');
    var btn=document.getElementById('submit1');
    
    btn.addEventListener('click',(e)=>
    {
      e.preventDefault();
      dynamic.innerHTML ="";
      getDonors();
   

    
    }) 
    document.getElementById("states").addEventListener('focus',()=>
    {
      var btn=document.getElementById('submit1');
      btn.disabled=false;
    //   var dynamic = document.getElementById('row1');
    //   dynamic.innerHTML ="";
    });
    
   
    
  
    