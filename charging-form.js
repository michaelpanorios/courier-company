function charges(){
  var postalcode = document.getElementById("postalcode").value;
  var packweight = document.getElementById("packweight").value;
 
  if (postalcode.length!=5) return alert("Error: 'Postal Code must match 5 digits'")
  if (packweight<0) return alert("Error: 'Package weight must be positive number'")
 

  if (10000<=postalcode && postalcode<20001){
      if (packweight<=5) {
        return alert ("Total cost: "+0.5*packweight+0.5)
      }else
        return alert ("Total cost: "+(2.5+0.3*(packweight-5)+0.5)) 
  } 
  
  if (20001<=postalcode && postalcode<30001){
    if (packweight<=5) {
        return alert ("Total cost: "+0.5*packweight+1)
    }else
        return alert ("Total cost: "+(2.5+0.2*(packweight-5)+1))
  }

  if (30001<=postalcode && postalcode<40001){
    if (packweight<=5) {
        return alert ("Total cost: "+1*packweight+1.5)
    }else
        return alert ("Total cost: "+(5+0.25*(packweight-5)+1.5))
  }

  if (40001<=postalcode && postalcode<50001){
    if (packweight<=5) {
        return alert ("Total cost: "+1.5*packweight+2)
    }else
        return alert ("Total cost: "+(7.5+0.2*(packweight-5)+2))
  }

  if (50001<=postalcode && postalcode<=99999){
    if (packweight<=5){
        return alert ("Total cost: "+2*packweight+2.5)
    }else
        return alert ("Total cost: "+(10+0.15*(packweight-5)+2.5))
  }

}

