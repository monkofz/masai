// fill in javascript code here
document.querySelector("form").addEventListener("submit",arrange);
function arrange(){
event.preventDefault()
let name=document.querySelector("#name").value;
let empid=document.querySelector("#employeeID").value;
let dept=document.querySelector("#department").value;
let exp=document.querySelector("#exp").value;
let email=document.querySelector("#email").value;
let mob=document.querySelector("#mbl").value;
//console.log(name,empid,dept,exp,email,mob)
var tr= document.createElement("tr");
var td1= document.createElement("td");
td1.innerText=name;
var td2= document.createElement("td");
td2.innerText=empid;
var td3= document.createElement("td");
td3.innerText=dept;
var td4= document.createElement("td");
td4.innerText=exp;
var td5= document.createElement("td");
td5.innerText=email;
var td6= document.createElement("td");
td6.innerText=mob;
var tdr=document.createElement("td");
if(Number(exp)>5){
    tdr.innerText="Senior";
}
else if(Number(exp)>2 && Number(exp)<5){
    tdr.innerText="Junior";
}
else{
        tdr.innerText="Fresher";
    }

var td7= document.createElement("td");
td7.innerText="Delete";


tr.append(td1,td2,td3,td4,td5,td6,tdr,td7);
document.querySelector("tbody").append(tr);
}