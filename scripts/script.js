// profile selection buttons, changes webpage content based on selected profile
let btnSabin = document.getElementById('profile-button sabin');
let btnGio = document.getElementById('profile-button gio');

btnSabin.addEventListener('click', function(){
    changeContent(btnSabin.textContent);
    document.getElementById('about-me').scrollIntoView({behavior: "smooth"});
});

btnGio.addEventListener('click', function(){
    changeContent(btnGio.textContent);
    document.getElementById('about-me').scrollIntoView({behavior: "smooth"});
});

// buttons for moving to next content area
document.getElementById('past-works-button').addEventListener('click', () => {
    document.getElementById('past-works').scrollIntoView({behavior: "smooth"});
    this.display = 'hidden';
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
    let contactInfoNodes = document.querySelectorAll("#contact-info-entries > td");
    let info = []

    switch(name){
        case "Sabin":
            aboutMeContent.textContent = "Hello! I'm Sabin Miguel B. Cacho, and this is my portfolio. I am a Third Year Software Development student at Mapua Malayan Digital College. I have been studying Software Dev't for around 5 years now—having started during Senior Highschool—until now. My passions lie in the logical, critical nature of programming, where everything has a particular purpose and meaning. Coding, to me, feels like one big, strange puzzle—one where I start with the final image, but none of the pieces; where I am supposed to find or create my own pieces to end up at the final image I began with. "
            aboutMeImg.src = "/styles/img/CACHO_ID_Picture.png"
            info = [
                "0998-510-3116",
                "lr.smcacho@mmdc.mcl.edu.ph",
                "sabincacho@gmail.com",
                "Sabin Cacho",
                "@sabintakespictures",
                "@sabincacho"
            ];
            changeContactInfo(contactInfoNodes, info);
            break;
        case "Gio":
            aboutMeContent.textContent = "Hi there! I'm Giancarlo M. Jamandri, and this is my portfolio. I am a 2nd year College student taking up IT specializing in Cybersecurity and Networks at Mapua Malayan Digital College. I am Sophomore but this is my first year taking the Cybersecurity specialization, in my first year I was focused on general IT at Southville International School and Colleges. I may be an IT student but a passion of mine growing up has always been of the arts in terms of drawing and as well as video editing, a sub product of doing video editing is also a bit of voice acting for personal projects.";
            aboutMeImg.src = "/styles/img/JAMANDRI_ID_Picture.jpg"
            info = [
                "+63-283-555-0962",
                "geodude@gmail.com",
                "Giancarlo Jamandri",
                "Gian Jam",
                "@g113",
                "@g113"
            ];
            changeContactInfo(contactInfoNodes, info);
            break;
        default:
    }
}

function changeContactInfo(contactInfoNodes, contactInfo){
    for (let i = 0; i < contactInfoNodes.length; i++){
        contactInfoNodes[i].textContent = contactInfo[i];
    }
}