import React, { useState } from 'react';
import '../../app.css';
import Project from '../Project';
import BSmodal from '../BSmodal';
import proj1 from '../../assets/images/datashore.png';
import proj2 from '../../assets/images/thepapermill.png';
import proj3 from '../../assets/images/quizmaster.png';
import proj4 from '../../assets/images/weatherpro.png';
import proj5 from '../../assets/images/dark-crawler.png';

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
    name: "The Papermill 414",
    desc: "Business customer utlising the Joomlas CMS and modifications on HTML, CMS, JS, PHP. Website no longer active as client no longer trading.",
    shortDesc: "CMS HTML CSS JAVASCRIPT PHP MYSQL",
    github: "",
    website: "",
    image: proj2,
    alt: "Showcase website"
  },
  {
    item: "3",
    name: "JS Quizmaster",
    desc: "Interactive game utlising HTML, CSS, JS and HTML DOM manipulation.",
    shortDesc: "HTML CSS JAVASCRIPT HTML-DOM",
    github: "https://github.com/robertpdavis/js-quizmaster",
    website: "https://robertpdavis.github.io/js-quizmaster/",
    image: proj3,
    alt: "Showcase website"
  },
  {
    item: "4",
    name: "Weather Dashboard",
    desc: "Responsive (bootsrtrap) dashboard showing weather for searched location. HTML DOM using JQuery. OpenWeather API.",
    shortDesc: "HTML CSS JAVASCRIPT BOOTSTRAP JQUERY",
    github: "https://github.com/robertpdavis/weather-pro",
    website: "https://robertpdavis.github.io/weather-pro/",
    image: proj4,
    alt: "Showcase website"
  },
  {
    item: "5",
    name: "Dark Crawler",
    desc: "This project was built in Node.js using the express and sequelize packages utilizing the MVC paradigm.JS, Node.js, MongoDB,Handlebars, Model-View-Controller, dotenv, MySQL, Cookies, Sessions",
    shortDesc: "FULL STACK - NODE.JS / EXPRESS / MYSQL>SEQUELIZE ORM",
    github: "https://github.com/robertpdavis/dark-crawler",
    website: "https://dark-crawler.herokuapp.com/",
    image: proj5,
    alt: "Showcase website"
  },
]

let Sections = [];
let project1 = '';
let project2 = '';

for (let index = 0; index < projects.length; index += 2) {

  project1 = Project(projects[index]);

  if (index + 1 < projects.length) {
    project2 = Project(projects[index + 1]);
  } else {
    project2 = "";
  }

  Sections.push(<section className="container">{project1}{project2}</section>);

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
      <form id="showcase-form" onClick={handleSubmit}>
        {Sections}
      </form>
      <BSmodal project={project} show={modalShow} resetModalShow={resetModalShow} />
    </section>
  )
}
