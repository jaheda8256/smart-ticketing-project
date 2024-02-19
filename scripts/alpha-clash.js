// document.addEventListener('DOMContentLoaded', function() {
 
//     const scrollButton = document.getElementById("scroll-button");
//     scrollButton.addEventListener("click", function() {
//         // Calculate the height to scroll
        
//        const scrollHeight = window.innerHeight;

//         // Smooth scroll to the calculated height
//         window.scrollTo({
//             top: scrollHeight,
//             behavior: "smooth"
//         });
//     });
// });

function play() {
    hideElementById('ticketing-interface');
    hideElementById('navbar');
    hideElementById('banner-section');
    hideElementById('card-section');
    hideElementById('bus-info');
    hideElementById('footer');
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
    showElementById('footer');
    hideElementById('success');
    


}