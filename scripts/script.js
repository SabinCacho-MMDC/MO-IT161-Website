// profile selection buttons, changes webpage content based on selected profile
let btnSabin = document.getElementById('profile-button sabin');
let btnGio = document.getElementById('profile-button gio');

btnSabin.addEventListener('click', function(){
    changeContent(btnSabin.textContent);
    document.getElementById('about-me').scrollIntoView({behavior: "smooth"});
});

btnGio.addEventListener('click', function(){
    document.getElementById('about-me').scrollIntoView({behavior: "smooth"});
});

// buttons for moving to next content area
document.getElementById('past-works-button').addEventListener('click', () => {
    document.getElementById('past-works').scrollIntoView({behavior: "smooth"});
})

document.getElementById('contact-info-button').addEventListener('click', () => {
    document.getElementById('contact-info').scrollIntoView({behavior: "smooth"});
})

//change page content according to selected profile
function changeContent(name){
    let aboutMeContent = document.getElementById('about-me-content');
    let aboutMeImg = document.getElementById('profile-picture');
    let pastWorkImages = document.querySelectorAll('#past-work-images > td');
    let pastWorkNames = document.querySelectorAll('#past-work-names > td');
    let contactInfo = document.querySelectorAll('#contact-info-entries > td');

    switch(name){
        case "Sabin":
            break;
        case "Gio":
            break;
        default:
    }
}