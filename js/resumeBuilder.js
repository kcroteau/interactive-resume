var bio = {
    "name": "Kelly Lee Winters",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(407) 123-2457",
        "email": "crotek88@yahoo.com",
        "github": "kcroteau",
        "twitter": "@kellywinters88",
        "location": "DeLand, FL"
},
    "welcomeMessage":"Front-End Web Development resume- thanks for reading",
    "skills": [ "awesomeness", "networking", "serving" ],
    "bioPic": "images/fry.jpg"
};

var education = {
    "schools" : [
        {
            "name": "Rensselaer Polytechnic Institute (RPI)",
            "location": "Troy, NY",
            "degree": "Bachelor of Science in Business and Management",
            "major": "Managment Information System",
            "dates": "1999",
            "url": "http://www.rpi.edu"
        },
        {
            "name": "Berkshire Community College",
            "location": "Pittsfield, MA",
            "degree": "Business Administration A.A. Degree",
            "major": "Managment",
            "dates": "1997",
            "url": "http://www.berkshirecc.edu"
        }

        ],
    "onlineCourses" : [
    {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "February 2015",
        "url": "http://www.udacity.com"
    }
    ]
};


var work = {
    "jobs": [
	{
	   "employer": "AT&T",
       "title": "Network Engineer",
       "location": "Florida",
       "dates": "July 1999 - Present",
       "description": "Support LAN/WAN networks"
	},

	{
        "employer": "Various",
        "title": "Manager",
        "location": "Massachusetts",
        "dates": "1985 - 1997",
        "description": "Ecclesiastes 9:10 - Whatever your hand finds to do, do it with your might, for there is no work or thought or knowledge or wisdom in Sheol, to which you are going."
	},	
		]
};

var projects = {
    "projects" : [
    {
        "title": "P1-Mock website Udacity Mug",
        "dates": "2015",
        "description":"You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
        "images": [ "http://image.spreadshirtmedia.com/image-server/v1/compositions/1003663094/views/1,width=190,height=190,appearanceId=588.png/mug-blue_design.png"
    ]
}]
 
};

bio.display = function()
{

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedtwitter);

var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);   
    $("#header").append(formattedPic);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);


$("#header").append(HTMLskillsStart);

for (var i=0; i< bio.skills.length;i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
}
    
 $("#footerContacts").append(formattedMobile,formattedEmail,formattedtwitter);

}

bio.display();

work.display = function() {

    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
  }
}
work.display();

projects.display = function() {
    for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length>0) {
        for (image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            $(".project-entry:last").append(formattedImage);
        }
    }
}
}
projects.display();

education.display = function() { 
    for (school in education.schools) {
    $("#education").append(HTMLschoolStart); 
    var formattedName = HTMLschoolName.replace( "%data%", education.schools[school].name); 
    var formattedDegree = HTMLschoolDegree.replace( "%data%", education.schools[school].degree); 
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree) 

    var formattedDates = HTMLschoolDates.replace( "%data%", education.schools[school].dates); 
    $(".education-entry:last").append(formattedDates); 
    
    var formattedMajor = HTMLschoolMajor.replace( "%data%", education.schools[school].major); 
    $(".education-entry:last").append(formattedMajor) 
   
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
  
}; 

    for (onlineCourse in education.onlineCourses) { 
    $("#education").append(HTMLonlineClasses); 

    var formattedTitle = HTMLonlineTitle.replace( "%data%", education.onlineCourses[onlineCourse].title);
    var formattedSchool = HTMLonlineSchool.replace( "%data%", education.onlineCourses[onlineCourse].school);
       
    var formattedSchoolTitle = formattedTitle + formattedSchool; 
    $(".education-entry:last").append(formattedSchoolTitle); 

    var formattedSchoolDate = HTMLonlineDates.replace( "%data%", education.onlineCourses[onlineCourse].dates);
    $(".education-entry:last").append(formattedSchoolDate); 

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
    $(".education-entry:last").append(formattedURL);

    } 

}; 
education.display();

// log clicks to console

$(document).click(function(loc){
  logClicks(loc.pageX,loc.pageY);
});

// add internationalization from lesson

//$("#main").append(internationalizeButton);

var inName = function() {
  var oldName = $("#name").text();
  var finalName = oldName.trim().split(" ");
  finalName[0] = finalName[0][0].toUpperCase() + finalName[0].slice(1).toLowerCase();
  finalName[1] = finalName[1].toUpperCase();
  finalName = finalName.join(" ");
  return finalName;
}



// add map
$("#mapDiv").append(googleMap)



