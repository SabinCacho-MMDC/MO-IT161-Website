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
    let pastWorkNodes = document.querySelectorAll('#past-work');
    let contactInfoNodes = document.querySelectorAll("#contact-info-entries");
    let contactInfo, imageSources, pastWorkNames = [];

    switch(name){
        default:
        case "Sabin":
            aboutMeContent.textContent = "Hello! I'm Sabin Miguel B. Cacho, and this is my portfolio. I am a Third Year Software Development student at Mapua Malayan Digital College. I have been studying Software Dev't for around 5 years now—having started during Senior Highschool. My passions lie in the logical, critical nature of programming, where everything has a particular purpose and meaning. Coding, to me, feels like one big, strange puzzle—one where I start with the final image, but none of the pieces; where I am supposed to find or create my own pieces to end up at the final image I began with. "
            aboutMeImg.src = "styles/img/CACHO_ID_Picture.png"
            contactInfo = [
                "0998-510-3116",
                "lr.smcacho@mmdc.mcl.edu.ph",
                "sabincacho@gmail.com",
                "Sabin Cacho",
                "@sabintakespictures",
                "@sabincacho"
            ];
            imageSources = [
                "styles/img/pastworks/h2over.jpg",
                "styles/img/pastworks/ligma.png",
                "styles/img/pastworks/iris.png"
            ]
            pastWorkNames = [
                "H2Over",
                "Library Integration Graphic Mobile Application",
                "Project IRIS"
            ]
            changeContactInfo(contactInfoNodes, contactInfo);
            changePastWorks(pastWorkNodes, imageSources, pastWorkNames);
            break;
        case "Gio":
            aboutMeContent.textContent = "Hi there! I'm Giancarlo M. Jamandri, and this is my portfolio. I am a 2nd year College student taking up IT specializing in Cybersecurity and Networks at Mapua Malayan Digital College. I am Sophomore but this is my first year taking the Cybersecurity specialization, in my first year I was focused on general IT at Southville International School and Colleges. I may be an IT student but a passion of mine growing up has always been of the arts in terms of drawing and as well as video editing, a sub product of doing video editing is also a bit of voice acting for personal projects.";
            aboutMeImg.src = "styles/img/JAMANDRI_ID_Picture.jpg"
            contactInfo = [
                "+63-283-555-0962",
                "geodude@gmail.com",
                "Giancarlo Jamandri",
                "Gian Jam",
                "@g113",
                "@g113"
            ];
            imageSources = [
                "styles/img/pastworks/diablo-foley.png",
                "styles/img/pastworks/miguelito.png",
                "styles/img/pastworks/radbro.png"
            ]
            pastWorkNames = [
                "Diablo Foley",
                "Miguel o'Hara Illustration",
                "Radagon Illustration"
            ]
            changeContactInfo(contactInfoNodes, contactInfo);
            changePastWorks(pastWorkNodes, imageSources, pastWorkNames);
            break;
    }
}

function changeContactInfo(contactInfoNodes, contactInfo){
    for (let i = 0; i < contactInfoNodes.length; i++){
        contactInfoNodes[i].childNodes[3].textContent = contactInfo[i];
    }
}

function changePastWorks(pastWorkNodes, imageSources, pastWorkNames){
    for (let i = 0; i< pastWorkNodes.length; i++){
        pastWorkNodes[i].childNodes[1].src = imageSources[i];
        pastWorkNodes[i].childNodes[3].textContent = pastWorkNames[i];
    }
}

function changeSelectedWork(workItem){
    let selectedWorkDiv = document.getElementById('past-work-selected');
    selectedWorkDiv.childNodes[1].childNodes[1].src = workItem.childNodes[1].src;
    findPastWorkDesc(workItem.childNodes[3].textContent, selectedWorkDiv);
    selectedWorkDiv.style.display = 'flex';
}

function hideSelectedWork(div){
    div.style.display = 'none';
}

function findPastWorkDesc(name, div){
    switch(name){
        case "Diablo Foley":
            div.childNodes[3].childNodes[1].textContent = "This Video was a product of a Finals project when I was in senior high for the subject Sound Design. In our finals task, we were assigned video game trailers with no audio and it is our job to provide the music, sound effects, voices/voice acting (if possible). Finishing the project gave helped me appreciate sound design in any media in general.";
            break;
        case "Miguel o'Hara Illustration":
            div.childNodes[3].childNodes[1].textContent = "This artwork of Spider-Man 2099 was based from the movie \"Spider-Man Across the Spider-Verse\" which came out in June of 2023. It was drawn digitally a month after the movies' release. The movie was simply so captivating that I had to draw at least one frame from the film.";
            break;
        case "Radagon Illustration":
            div.childNodes[3].childNodes[1].textContent = "The subject in this artwork is a character named Radagon from the video game \"Elden Ring\". It was drawn digitally, it is a direct reference to the cutscene wherein you meet Radagon, the final boss of the base game of \"Elden Ring\".";
            break;
        case "H2Over":
            div.childNodes[3].childNodes[1].textContent = "This was an incredibly simple video game with it's narrative centered around the world's usable water supply and how humanity should realize how precious it actually is. The game was programmed in C# using Visual Studio 2019."
            break;
        case "Library Integration Graphic Mobile Application":
            div.childNodes[3].childNodes[1].textContent = "This was a final project for my Mobile Development class back in 2023. The application was a mobile app for a library and it's customers. Users could check the app for book availability and to borrow books."
            break;
        case "Project IRIS":
            div.childNodes[3].childNodes[1].textContent = "Project IRIS was a website development as a final requirement for our Web Development class back in 2019. The project was started during the start of the COVID pandemic, so we saw it appropriate to base the idea on that. The website is mainly for finding hospitals with vacancies and/or connecting to a doctor virtually."
            break;
    }
}

// function changeColorPalette(name){
//     switch(name){
//         default:
//         case "Sabin":
//             document.documentElement.style.setProperty('--light','rgb(166, 207, 152)');
//             document.documentElement.style.setProperty('--dark','rgb(85, 124, 85)');
//             break;
//         case "Gio":
//             document.documentElement.style.setProperty('--light','rgb(246, 136, 147)');
//             document.documentElement.style.setProperty('--dark','rgb(218, 52, 77)');
//             break;
//     }
// }