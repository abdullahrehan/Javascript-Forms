
function check(){
   
   var x=document.querySelectorAll("input");

   var z="This field is required";
   var i;
   var tx;

 for(i=0;i<4;i++)
{
    
    
    if(x[i].value==""){
      
        var txt=document.querySelectorAll("P");
        txt[i].innerHTML=z;
        txt[i].style.color="red";
        
    
    }
    else{
        var tx=document.querySelectorAll("P");
        tx[i].innerHTML="Completed";
        tx[i].style.color="green";
        
        
    }



}

}




