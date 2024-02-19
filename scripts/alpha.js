const allBtn = document.getElementsByClassName("all-btn");

let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count = count + 1;
     

        const ticketName = e.target.innerText;
        const ticketName2 = "Economoy";
        const ticketName3 = "550";
        const selectedContainer = document.getElementById('selected-ticket');

       const tr = document.createElement('tr');
       const td = document.createElement('td');
       td.innerText = ticketName;
       const td2 = document.createElement('td');
       td2.innerText = ticketName2;
       const td3 = document.createElement('td');
       td3.innerText = ticketName3;

       e.target.style.backgroundColor = '#1DD100FF';

       tr.appendChild(td);
       tr.appendChild(td2);
       tr.appendChild(td3);
       selectedContainer.appendChild(tr);

       const score = document.getElementById('score').innerText;
       const convertedScore = parseInt(score);

        if(convertedScore - parseInt(1) < 36){
            alert('Your ticket is full');
            return;

            
        }


       document.getElementById('score').innerText = convertedScore - parseInt(1);

    totalCost('total-price', parseInt(ticketName3))
    grandTotal('grand-total', parseInt(ticketName3));

    
    setInnerText('btn-count',count);
   

        
    })

}

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click',function(){
    // get the value input
    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    console.log(couponCode);
    

        if(couponCode === "NEW15"){
            hideElementById('apply-btn');
            hideElementById('input-field');
            hideElementById('label');
           
        }
        else {
            alert('invalid');
            return;
        }
      
    })
   
   
   

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
}


function setInnerText(id,value){
    document.getElementById(id).innerText = value; 
}

