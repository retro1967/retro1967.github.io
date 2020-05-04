var mainSection = $('.section-holder');
var heroSection = $('.hero');

function aboutFunction() {
    $('.orange').removeClass('orange');
    $('#about').addClass('orange');
    mainSection.html('');
    heroSection.html('');
    var hero = '<div class="images container-fluid"><img src="assets/images/cami.jpg" alt="Camila" id="cami"><img src="assets/images/koda.jpg" alt="Koda" id="koda"></div>'
    var about = '<p>Howdy! I am a web developer originating from South Florida but currently residing in Dallas, TX. </p>'
    + '<p>I have a wonderful wife, Camila, and a gorgeous German Shepherd named Koda.</p>'
    + '<p>My hobbies consist of playing guitar, teaching my dog how to play guitar, and giving up on my dream of teaching my dog to play guitar.</p>';
    heroSection.append(hero);
    mainSection.append(about);
}

function skillsFunction() {
    $('.orange').removeClass('orange');
    $('#skills').addClass('orange');
    mainSection.html('');
    heroSection.html('');
    var skills = '<div class="container-fluid skillset"><div class="skill-icons">'
    + '<div class="icon-contain"><i class="col fab fa-html5"><div class="bar-graph htmlf"></div></i><h5>HTML</h5></div>'
    + '<div class="icon-contain"><i class="col fab fa-js"><div class="bar-graph jsf"></div></i><h5>Javascript</h5></div>'
    + '<div class="icon-contain"><i class="col fab fa-git-alt"><div class="bar-graph gitf"></div></i><h5>Git</h5></div>'
    + '<div class="icon-contain"><i class="col fab"><img src="assets/images/python2.png"><div class="bar-graph pythonf"></div></i><h5>Python</h5></div>'
    + '</div></div>';
    mainSection.append(skills);
}

function projectFunction() {
    $('.orange').removeClass('orange');
    $('#projects').addClass('orange');
    $(this).addClass('orange');
    mainSection.html('');
    heroSection.html('');
    var projects = '<div class="containers row"><div id="weather-dashboard" class="proj module"><header><h1><a href="https://retro1967.github.io/weather-dashboard">Weather Dashboard</a></div>'
    + '<div id="run-buddy" class="proj module"><header><h1><a href="https://retro1967.github.io/run-buddy">Run Buddy</a></div></div>';
    mainSection.append(projects);
}

function educationFunction() {
    $('.orange').removeClass('orange');
    $('#edu').addClass('orange');
    mainSection.html('');
    heroSection.html('');
    var education = '<p>I am a current Aggie in my junior year at Texas A&M University studying Computer Engineering.</p>'
    + "<p>I'm also currently a student at UT Austin Coding Bootcamp.</p>"
    + '<p>My cumulative GPA is 3.6 and I am dropping out.</p>';
    mainSection.append(education);
}

function orange() {
    $('.btn').addClass('orange');
}

skillsFunction();