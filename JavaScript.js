function traffic_light(params) {
   
let green_light=document.getElementById("green_light")
let yellow_light=document.getElementById("yellow_light")
let red_light=document.getElementById("red_light")
   
 
green_light.checked = true;
green_light.style.backgroundColor = "green";

setInterval(() => {
      

    if (green_light.checked) {
        yellow_light.checked = true;
        yellow_light.style.backgroundColor="yellow"
        green_light.checked = false;
        green_light.style.backgroundColor=""
    } 
    else if (yellow_light.checked) {
         yellow_light.checked = false;
        yellow_light.style.backgroundColor=""
       red_light.checked = true;
        red_light.style.backgroundColor="red"   
    }
    
    else {
        green_light.checked = true;
        green_light.style.backgroundColor = "green";
        red_light.checked = false;
        red_light.style.backgroundColor = "";
    }

}, 3000); 
}
traffic_light()
 