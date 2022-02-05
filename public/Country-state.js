

window.onload = function() {
var states= document.getElementById("states");
var cities= document.getElementById("cities");

fetch("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json")
.then((response ) =>
{
   return response.json();
})
.then((result) => {
    let a=result;
    let b=new Set();
    let j=0;
    for(let i=0;i<a.length;i++) 
    {  
        //console.log(a[i]);
        if(a[i].country_code=="IN")
        {
           // console.log(a[i].state_name);
            b.add(a[i].state_name); 
        }
    }
    b.forEach(i => {
        //console.log(i);
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        states.appendChild(option); 
    }); 

    states.addEventListener('input',function(event)
    {  
        cities.innerHTML="";
        var stateselect = event.target.value;
       // console.log(stateselect);
        for(let i=0;i<a.length;i++) 
    {  
        
        if(a[i].state_name==stateselect)
        {
           // console.log(a[i].name);
            var option1 = document.createElement('option');
            option1.value = a[i].name;
            option1.text = a[i].name;
            cities.appendChild(option1); 
        }
    }
    })
})
.catch(error => console.log('error', error));
 };
 