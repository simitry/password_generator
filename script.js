/*let name;
name = window.prompt("please enter your name");
document.getElementById("welcome").textContent = `Welcome ${name}`;
*/
let passlenght;
document.getElementById("mybutton").onclick = function(){
    passlenght=document.getElementById("plenght").value;
    passlenght = Number(passlenght);
    console.log(passlenght , typeof(passlenght));
}

document.getElementById("mybutton2").onclick = function(){

    while(passlenght<=6){
        return "password must equal or contain more than 6 characters";
    }
    
    let vallower =false;
    let valupper =false;
    let valnumber =false;
    let valspecial =false;
    let cb1 =document.getElementById("lower");
    let cb2 =document.getElementById("upper");
    let cb3 =document.getElementById("numero");
    let cb4 =document.getElementById("character");

    if(cb1.checked){
        vallower = true;
    }
    if(cb2.checked){
        valupper = true;
    }
    if(cb3.checked){
        valnumber = true;
    }
    if(cb4.checked){
        valspecial = true;
    }
    
    const lowercase = "abcdefjhigklmnopqrstuvwxyz";
    const uppercase = "ABCDEFJHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const chars = "!@#$%^&*()_+{}|:\<>?"; 

    let allowchars="";
    let password = "";

    allowchars += vallower? lowercase:"";
    allowchars += valupper? uppercase:"";
    allowchars += valnumber? numbers:"";
    allowchars += valspecial? chars:"";

    console.log(allowchars);

    for(let i = 0; i<passlenght ; i++){
        const randomindex=Math.floor(Math.random() * allowchars.length);
        password += allowchars[randomindex];
    }

    document.getElementById("label").textContent = `${password}`;

}