import React, { useState } from 'react';
import '../../App.css';
import Project from '../Project';
import BSmodal from '../BSmodal';
import proj1 from '../../assets/images/datashore.png';
import proj2 from '../../assets/images/quizmaster.png';
import proj3 from '../../assets/images/weatherpro.png';
import proj4 from '../../assets/images/techpostit.png';
import proj5 from '../../assets/images/dark-crawler.png';
import proj6 from '../../assets/images/betfairbetbot.png';

const projects = [
  {
    item: "1",
    name: "Datashore Solutions",
    desc: "Business customer utlising the Joomlas CMS and modifications on HTML, CMS, JS, PHP with client login area.",
    shortDesc: "CMS HTML CSS JAVASCRIPT PHP MYSQL HOSTING",
    github: "",
    website: "https://www.datashore.com.au/",
    image: proj1,
    alt: "Showcase website"
  },
  {
    item: "2",
    name: "Javascrypt Quizmaster ",
    desc: "Displays multiple choice questions about javascript to a user. The user has a time limit to answer them. If the user answers a question wrong, the time remaining is reduced by a defined set amount. Quiz finishes when the user either answers all questions or time expires.",
    shortDesc: "HTML CSS JAVASCRIPT",
    github: "https://github.com/robertpdavis/js-quizmaster",
    website: "https://robertpdavis.github.io/js-quizmaster/",
    image: proj2,
    alt: "Showcase website"
  },
  {
    item: "3",
    name: "Weather Dashboard",
    desc: "Responsive (bootsrtrap) dashboard showing weather for searched location. HTML DOM using JQuery. OpenWeather API.",
    shortDesc: "HTML CSS JAVASCRIPT BOOTSTRAP JQUERY",
    github: "https://github.com/robertpdavis/weather-pro",
    website: "https://robertpdavis.github.io/weather-pro/",
    image: proj3,
    alt: "Showcase website"
  },
  {
    item: "4",
    name: "Tech Post It!",
    desc: "Tech Post It is a Node.js - Express API blogging application. It allows for full CRUD functionality (via GET, POST, UPDATE and DELETE) for posts and POST for users and comments. All data is stored in a mysql database and uses the Seqelize ORM to simplify the database interactions.",
    shortDesc: "FULL STACK - NODE.JS / EXPRESS / MYSQL>SEQUELIZE ORM",
    github: "https://github.com/robertpdavis/techpostit",
    website: "https://techpostit.robpdavis.com.au",
    image: proj4,
    alt: "Showcase website"
  },
  {
    item: "5",
    name: "Dark Crawler",
    desc: "This project was built in Node.js using the express and sequelize packages utilizing the MVC paradigm.JS, Node.js, MongoDB,Handlebars, Model-View-Controller, dotenv, MySQL, Cookies, Sessions",
    shortDesc: "FULL STACK - NODE.JS / EXPRESS / MYSQL>SEQUELIZE ORM",
    github: "https://github.com/robertpdavis/dark-crawler",
    website: "https://darkcrawler.robpdavis.com.au/",
    image: proj5,
    alt: "Showcase website"
  },
  {
    item: "6",
    name: "Betfair Bet Bot",
    desc: "Online web app providing automated betting systems for Betfair users. Users the Betfair provided APIs for automation. Scheduled proceses on the server side to place and update bets as well as update events.",
    shortDesc: "FULL STACK - REACT / NODE.JS / EXPRESS / MONGOOSE / GRAPHQL",
    github: "https://github.com/robertpdavis/betfair-bet-bot",
    website: "",
    image: proj6,
    alt: "Showcase website"
  },
]

let Sections = [];
let project1 = '';
let project2 = '';

for (let index = 0; index < projects.length; index += 2) {
  let subSections = [];

  subSections.push(<div key={index}>{Project(projects[index])}</div>);

  if (index + 1 < projects.length) {
    subSections.push(<div key={index + 1}>{Project(projects[index + 1])}</div>);
  } else {
    subSections.push("");
  }

  Sections.push(<section className="container">{subSections[0]}{subSections[1]}</section>);
}

export default function Portfolio() {

  const [project, setProject] = useState('');
  const [modalShow, setModalSHow] = useState(false);

  const resetModalShow = () => {
    setModalSHow(false);
  }

  // Handler for what happens when a showcase item is clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    const projectId = parseInt((event.target.id).substr((event.target.id).length - 1)) - 1;
    if (projectId >= 0) {
      setProject(projects[projectId]);
      setModalSHow(true);
    }
  }

  return (
    <section className="section page container" id="my-work">
      <h4>Click on image for further details</h4>
      <form id="showcase-form" onClick={handleSubmit}>
        {Sections}
      </form>
      <BSmodal project={project} show={modalShow} resetModalShow={resetModalShow} />
    </section>
  )
}
