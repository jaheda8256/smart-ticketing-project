// function play(){
    
//     const ticketingSection = document.getElementById('ticketing-interface');
//     ticketingSection.classList.add('hidden');


//     const ticketingSection2 = document.getElementById('bus-info');
//     ticketingSection2.classList.add('hidden');


//     const ticketingSection3 = document.getElementById('card-section');
//     ticketingSection3.classList.add('hidden');


//     const ticketingSection4 = document.getElementById('banner-section');
//     ticketingSection4.classList.add('hidden');


//     const ticketingSection5 = document.getElementById('navbar');
//     ticketingSection5.classList.add('hidden');


//     const successSection = document.getElementById('success');
//     successSection.classList.remove('hidden');
// }
function play() {
    hideElementById('ticketing-interface');
    hideElementById('navbar');
    hideElementById('banner-section');
    hideElementById('card-section');
    hideElementById('bus-info');
    showElementById('success');
}



function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
    
}

function successById(){
    showElementById('ticketing-interface');
    showElementById('navbar');
    showElementById('banner-section');
    showElementById('card-section');
    showElementById('bus-info');
    hideElementById('success');
    


}