

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