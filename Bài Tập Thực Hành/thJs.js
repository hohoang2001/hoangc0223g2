
function tinhtien(){
 let sotien = document.getElementById("sotien").value;
 let form = document.getElementById("form").value;
 let to = document.getElementById("to").value;
 let Result;
if (form == "VND" && to == "USD"){
   Result = "Result: " + (sotien / 23000) + "USD";
}
    else if (form == "USD" && to == "VND") {
            Result = "Result: " + (sotien * 23000) + "VND";
   }
       else if (form == "USD") {
               Result = "Result: " + sotien + "$";
      }
          else {
                Result = "Result: " + sotien + "VND";
         }
document.getElementById("Result").innerHTML=Result;



}
