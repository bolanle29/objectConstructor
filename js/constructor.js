function Registration (Fname, Mname, Lname, School, Email){
    this. Fname =Fname,
    this.Mname = Mname,
    this.Lname = Lname,
    // this.State = State,
    this.School = School,
    this.Email = Email

    
   
   
    this.message = function() {
        return (`Congratulations ${this.Fname} ${this.Mname} ${this. Lname}
         Registration successful! Your register registration number is ABE29579. Other details
          has been sent to your e-mail address ${this.Email}`)
    }
}
   
   
   let reg = new Registration();
//    console.log(reg.message())
 
document.getElementById("sub").addEventListener("click", function(){

let Fname = document.getElementById("Fname").value;
let Mname = document.getElementById("Mname").value;
let Lname = document.getElementById("Lname").value;
// State = document.getElementById("State").value;
let School = document.getElementById("School").value;
let Email = document.getElementById("Email").value;
 console.log(Fname + " " + Mname)

let reg = new Registration(Fname, Mname, Lname, School, Email);


 document.getElementById("info").innerHTML +=reg.message();
});
