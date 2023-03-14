const billTotal=document.getElementById("billTotal");
const tipPercent=document.getElementById("tipPercent");
let noOfPeoples=document.getElementById("noOfPeople");
let totalPerPerson=document.getElementById("totalAmount");
let noOfPeople=Number(noOfPeoples.innerHTML);

const calculateBill=()=>{
    const bill=Number(billTotal.value);
    const tip=Number(tipPercent.value)/100;
    const totaltip=bill*tip;
    const totalAmount=(bill + totaltip);
    const totalAmountPerPerson=totalAmount/noOfPeople;
    totalPerPerson.innerText=`${"$" + totalAmountPerPerson.toFixed(2)}`;
    
}
const incrementValue=()=>{
    noOfPeoples.innerHTML=noOfPeople+=1;
}

const decrementValue=()=>{
    if(noOfPeople>1){
      noOfPeoples.innerHTML=noOfPeople-=1;
    }
}

