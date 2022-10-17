# my-react-portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Profile React app for Rob Davis Full Stack Web Developer

Webpage profile overview built as mobile first using HTML and CSS with flexbox and media queries to create a responsive design. Also includes a bootstrap modal for user interaction. Create React project

EmailJs is used to provide the contact form email functionailty. NOTE: If using this to create your own profile page, you will need to replace the placeholder values for your EmailJS service, template and Id in the CoontactForm page for it to work.

The profile is a single page app with several sections:

* About Me - an article about Rob Davis with profile picture
* Portfolio - use of images of example work with fixed position summary labels. Clicking a project brings up a modal popup with further information about the project and links to website and github.
* Contact -  Contact form with Mailto link for email
* Resume - Link to my resume with list of front-end and back-end capabilities

Note: The Papermill 414 website is no longer operational as client is no longer in business.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Licence](#Licence)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Required npm packages are listed in the package.json file and include:
bootstrap
react-bootstrap (for modal component)
react
react-dom
react-scripts
dotenv
pretty
web-vitals
gh-pages (if deploying to github)

The inlcuded react-scripts will take care of starting and building the app and deploying it:
* Both npm run predeploy or build will create the dist build folder and optimized files for deployment. 
* Npm run deploy will build and deploy to github page as defined in the homepage.

File structure of the application:
```md
.
├── public/                // contains the the single html page along with the manifest
├── src/assets             // contains any images and other files required for the app
├── src/components         // contains the react component files
├── utils/                 // helper code - in this case to parse the contact form input email
├── index and App.js       // react app entry point and base app code
├── index and app.css      // app css styling
├── package-lock.json      
└── package.json           
```

## Usage
Usuage is straight forward. Note that clicking on a portfolio project impage with show a modal popup with extra details about the project and any links to a deployed website/github page and the github repo.

* Live site is available on AWS at - https://robpdavis.com.au

## Credits
Rob Davis Github: [robertpdavis](https://github.com/robertpdavis)

## Licence
MIT License

## Contributing
Please contact me at: robertpdavis@optusnet.com.au

## Tests
No tests are included.

## Questions
* Github: [robertpdavis](https://github.com/robertpdavis)
* Email: robertpdavis@optusnet.com.au
