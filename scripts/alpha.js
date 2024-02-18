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
   

       tr.appendChild(td);
       tr.appendChild(td2);
       tr.appendChild(td3);
       selectedContainer.appendChild(tr);

    //    const totalPrice = document.getElementById('total-price').innerText;
    //   const convertedTotalPrice = parseInt(totalPrice);
    //     // const sum = convertedTotalPrice + parseInt(ticketName3);
    //   document.getElementById('total-price').innerText = sum;
    totalCost('total-price', parseInt(ticketName3));
    grandTotal('grand-total', parseInt(ticketName3));

    
    setInnerText('btn-count',count);
    // setInnerText('total-price',sum);

        
    })

}


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

