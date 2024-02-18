const allBtn = document.getElementsByClassName("all-btn");

let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count = count + 1;
        setInnerText('btn-count',count);
        const ticketName = e.target.innerText;
        const selectedContainer = document.getElementById('selected-ticket');

       const tr = document.createElement('tr');
       const td 
 
        
    })

}

function setInnerText(id,value){
    document.getElementById(id).innerText = value; 
}