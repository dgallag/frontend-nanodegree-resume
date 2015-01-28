// BIO Variables
var bio = {
	"name": "Daniel Gallagher",
	"role": "Web Developer",
	"contacts": {
		"mobile": "973-997-3077",
		"email": "dgallag@verizon.net",
		"github": "dgallag",
		"twitter": "dgallag",
		"location": "Mendham, NJ"
},
		"welcomeMessage": "Hello, I am currently learning new skills to improve my ability to create and host websites. I have been an HTML developer in the past and have worked on websites for several companies and organizations such as Avis Car rental, Martha Stewart, Delaware Hudson Realtor and The Girls Scouts of America.",
		"skills": [
		"Creative", "Organized", "Hard Working", "Strong Desire to Learn",
	],
		"bioPic": "images/dgfd.jpg",
		//BIO Function
		display: function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedName + formattedRole);
		$("#header").append(formattedbioPic + formattedMessage);
		$("#header").append(HTMLskillsStart);

		var contacts = bio["contacts"];
		var formattedMobile = HTMLmobile.replace("%data%",contacts["mobile"]);
		var formattedEmail = HTMLemail.replace("%data%",contacts["email"]);
		var formattedgithub = HTMLgithub.replace("%data%",contacts["github"]);
		var formattedtwitter = HTMLtwitter.replace("%data%",contacts["twitter"]);
		var formattedLocation = HTMLlocation.replace("%data%",contacts["location"]);
		var contactinfo = formattedMobile + formattedEmail + formattedgithub + formattedtwitter + formattedLocation;
		$(contactinfo).appendTo("#topContacts, #footerContacts");


		for(skill in bio.skills){
			var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}
	}
};


// Education Variables
var education = {
"schools": [
{
		"name": "Livingston High School",
		"location": "Livingston, NJ",
		"degree": "High School Diploma",
		"major": [""],
		"dates": "1984 - 1988"
},
	{
		"name": "GEOTECH Instatute",
		"location": "Garfield, NJ",
		"degree": "A+ Certification",
		"major": ["Hardware Technician"],
		"dates": "2001"
	}
],
"onlineCourses": [
{
		"title": "Front End Web Developer",
		"school": "Udacity",
		"dates": 2015,
		"URL": "http://www.udacity.com"
},
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": 2015,
		"URL": "http://www.udacity.com"
	},
{
		"title": "How to Use Git and GitHub",
		"school": "Udacity",
		"dates": 2015,
		"URL": "http://www.udacity.com"
},
{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": 2015,
		"URL": "http://www.udacity.com"
},
		{
			"title": "Intro to JQuery",
			"school": "Udacity",
			"dates": 2015,
			"URL": "http://www.udacity.com",
		}
	],
	// Education Function
	display: function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		//formattedSchoolName = formattedSchoolName.replace("%url%", education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	//Online Courses
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineTitleSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL);
		formattedOnlineURL = formattedOnlineURL.replace("%url%", education.onlineCourses[course].URL);
		$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};


// Work Variables
var work = {
"jobs": [
{
	"employer": "AT&T",
	"title": "Service Manager",
	"location": "Morristown, NJ",
	"dates": "April 2003 - current",
	"description": "I manage a potfolio of government accounts. Solving both service and billing issues as well running reports and analyzing data."
},

		{
			"employer": "Ziptone",
			"title": "Web Designer",
			"location": "Whippany, NJ",
			"dates": "June 2001 - March 2003",
			"description": "Created new content for websites from provided images using HTML for an online customer support chat application."
		}
	],
	//Work Function
	display: function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
		}
	}
};


// Projects Variables
var projects = {
"projects": [
		{
				"title": "Portfolio",
				"dates": "2014",
				"description": "Created a portfolio of my web designs. Please note this information and images are just example data.",
				"images": [
				"images/ms.jpg",
				"images/ACR.jpg"
			]
		}
	],
	//Projects Function
	display: function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
				}
			}
		$(".project-entry:last").prepend(formattedTitle + formattedDates + formattedDescription);
		}
	}
};


//Collects Location of Clicks on the Page
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
	}
);


//International Name Function
	function inName(name) {
		name = bio.name.trim().split(" ");
		console.log(name);
		name[1] = name[1].toUpperCase();
		name[0] = name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();

		return name[0] + " " + name[1];
};


//Call Functions
projects.display();
education.display();
work.display();
bio.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);




