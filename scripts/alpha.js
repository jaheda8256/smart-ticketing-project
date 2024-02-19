const allBtn = document.getElementsByClassName("all-btn");


let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count = count + 1;
     
        const selectedContainer = document.getElementById('selected-ticket');
        const ticketSeat = e.target.innerText;
        const ticketClass = "Economoy";
        const ticketPrice = "550";
        

       

        // table create
       const tr = document.createElement('tr');
       const td = document.createElement('td');
       td.innerText = ticketSeat;
       const td2 = document.createElement('td');
       td2.innerText = ticketClass;
       const td3 = document.createElement('td');
       td3.innerText = ticketPrice;

       tr.appendChild(td);
       tr.appendChild(td2);
       tr.appendChild(td3);
     

       const score = document.getElementById('score').innerText;
       const convertedScore = parseInt(score);

        if(convertedScore - parseInt(1) < 36){
            alert('Your ticket is full');
            return;   
        }
        selectedContainer.appendChild(tr);
        e.target.style.backgroundColor = '#1DD100FF';
     
// total discount Amount 




document.getElementById('score').innerText = convertedScore - parseInt(1);
totalCost('total-price', parseInt(ticketPrice))
grandTotal('grand-total', parseInt(ticketPrice));  
setInnerText('btn-count',count);
 
})

}

function disableButton() {
    const scrollButton = document.getElementById("button");
    scrollButton.disabled = true;
    
}
// disable seat button
document.addEventListener("DOMContentLoaded", function() {
   let scrollButtons = document.getElementsByClassName("all-btn");

    // Loop through all buttons and add click event listener
    for (let i = 0; i < scrollButtons.length; i++) {
        scrollButtons[i].addEventListener("click", function(event) {
            // Disable the clicked button
            event.target.disabled = true;
        });
    }
});


const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click',function(){
    // get the value input
    const couponCode = document.getElementById('input-field').value;
  console.log(couponCode);

        if(couponCode === "NEW15") {

            hideElementById('apply-btn');
            hideElementById('input-field');
            hideElementById('label');
            
        }
        else if(couponCode === "Couple 20"){
            hideElementById('apply-btn');
            hideElementById('input-field');
            hideElementById('label');
        }

        else {
            alert('invalid');
            return;
        }
       

    });

   

function totalCost(id,value){
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + parseInt(value);
    setInnerText('total-price',sum);
}
function grandTotal(id,value){
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + parseInt(value);
    setInnerText('grand-total',sum);

    // if(totalCost >= 2200 && couponCode === "NEW15"){
    //     setInnerText('grand-total',sum * 0.85);
    //     console.log('dd')
    // }
}


function setInnerText(id,value){
    document.getElementById(id).innerText = value; 
}

