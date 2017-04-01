/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Geng Zicheng",
    "role": "Front-End Web Developer",
    "welcomeMsg": "Welcom to my resume page",
    "bioPic": "images/myavatar.jpg",
    "contacts":{
      "mobile": "138-8058-0559",
      "email": "gengzicheng@qq.com",
      "twitter": "@GengZicheng",
      "github": "GengZiCheng",
      "blog": "www.gengzicheng.com",
      "location": "ChengDu,SiChuan,China"
      },
    "skills":[
      "High sense of responsibility","honest","teamwork","learning ability"
    ]
};

var projects = {
    "projects" : [
      {
        "title": "blog-mockup",
        "dates": "Feb 2017",
        "description": "This was my first project in Udacity class. I learned a lot about HTML and CSS.",
        "images": ["images/project1.jpg"]
      },
      { "title": "animal-card",
        "dates": "Feb 2017",
        "description": "I learned more about CSS in this project by using  online CSS tools.",
        "images": ["images/project2.jpg"]
      },
      {
        "title": "mock-portfolio",
        "dates": "Feb 2017",
        "description": "This project is about using different methods to set the framwork of an HTML page.",
        "images": ["images/project3.JPG"]
      }
    ]
};

var education = {
    "Schools" :[
      {
        "name": "Acadia University",
        "location": "Wolfville,Nova scotia, Canada",
        "major": ["Business Administration"],
        "degree": "Bachelor of Business Administration",
        "dates": "2007-2010",
        "url": "http://www2.acadiau.ca"
      }
    ],
    "onlineClasses" : [
      {
        "school": "Udacity",
        "title": "Front-End Web Developer",
        "dates": "2017",
        "url": "www.udacity.com"
      }
    ]
};

var work = {
    "jobs": [
      {
        "employer": "Tibet Golden Khada Medical Limited Company",
        "title": "General Manager Assistant",
        "location": "Tibet, China",
        "dates": "Mar.2011-May.2013",
        "description": "I provided assistance in human resource management, sales, finance, property management, and public relations."
      }
    ],
};

if (bio.contacts !== null) {

}

if (bio !== null) {
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);
  formattedName = HTMLheaderName.replace("%data%",bio.name);
  $("#header").prepend(formattedName);

  formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  $("#topContacts").append(formattedmobile);
  formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
  $("#topContacts").append(formattedemail);
  formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
  $("#topContacts").append(formattedtwitter);
  formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
  $("#topContacts").append(formattedgithub);
  formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
  $("#topContacts").append(formattedlocation);

  formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
  $("#header").append(formattedbioPic);
  formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
  $("#header").append(formattedwelcomeMsg);
}



if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
}

// for-in loop is a bad idea, don't use
function displayWork(){
  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedworkDates);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedworkLocation);
    var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedworkDescription);
  }
}
displayWork();

//在浏览器控制台查看页面点击位置
$(document).click(function(loc) {
  // 在此处编写你的代码
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

//字符串控制
$("#main").append(internationalizeButton);
function inName(){
  var finalName = bio.name;
  var names = bio.name.split(" ");
  names[0] = names[0].toUpperCase();
  names[1] = names[1].slice(0,1).toUpperCase() + names[1].slice(1).toLowerCase();
  finalName = names.join(" ");
  return finalName;
  // return names[0]+" "+names[1];
}

projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var formattedPtitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedPtitle);
    var formattedPdates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedPdates);
    var formattedPdescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedPdescription);
    if (projects.projects[i].images.length > 0) {

      for (var j = 0; j < projects.projects[i].images.length; j++) {
          var formattedPimage = HTMLprojectImage.replace("%data%", projects.projects[i].images[0]);
          $(".project-entry:last").append(formattedPimage);
      }
    }
  }
}
projects.display();

education.display = function(){
  for (var i = 0; i < education.Schools.length; i++) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.Schools[i].name);
    $(".education-entry:last").append(formattedSchoolName);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.Schools[i].degree);
    $(".education-entry:last").append(formattedSchoolDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.Schools[i].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.Schools[i].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    for (var j = 0; j < education.Schools[i].major.length; j++) {
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.Schools[i].major[j]);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
  }


  for (var c = 0; c < education.onlineClasses.length; c++) {
    $(".education-entry:last").append(HTMLonlineClasses);

    var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineClasses[c].title);
    $(".education-entry:last").append(formattedonlineTitle);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineClasses[c].school);
    $(".education-entry:last").append(formattedonlineSchool);
    var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineClasses[c].dates);
    $(".education-entry:last").append(formattedonlineDates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineClasses[c].url);
    $(".education-entry:last").append(formattedonlineURL);
  }
}
education.display();

//google.map
//$("#mapDiv").append(googleMap);