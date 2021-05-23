function response(){
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var subject = document.getElementById("subject").value;

  if (firstname.length == 0 || lastname.length == 0 || subject.length == 0) {
    return alert("Error: 'You have to fill the empty fields'");
  }else return alert("Stay tuned for our response")
}
