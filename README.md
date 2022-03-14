# Note-Taker

## Description
 This application allows a user to store and manage simple notes online.  It is fully deployed utilizing Heroku.

 ## Table of Contents
 -[Installation](#installation)

 -[Usage](#usage)

 -[Credits](#credits)

 -[License](#license)

 -[Badges](#badges)

 -[Features](#features)

 -[How To Contribute](#contributing)

 -[Tests](#tests)

 -[Questions](#questions)
 ## Installation
 The application can be utilized by either fully installing the project modules and then running off of a local server or by running the deployed application found at:

https://gentle-lake-67791.herokuapp.com/

 To install and run from a local server:

-Clone or download the github repository. 
 
-From the root directory (the one containing the folders for the project and server.js):
 
 -npm i

 Then launch the applicaction:

 -node server.js.

 Then open a broaswer and naviaget to: 
 
 localhost:/3000/notes

 And you can run note taker from your local server.

 ## Usage
 None
 ## Credits
 None
 ## License

 ![badge](https://img.shields.io/badge/license-MIT-blue)
 License file can be found at: https://github.com/sdseney508/Team-Profile-Generator/blob/main/LICENSE.txt
 ## Badges

 ## Features

 This project utilizes express to run a simple server stored notes page.  It has a simple router set up with DELET, POST, and GET routes.  The server file utilizes the routes contained in notes.js lacted in the routes folder.  The pathways for the routes are contained in the fetch calls which can be found in the index.js file contained in the in the /public/assets/js folder.  All data s stored in the db.json file located in the /db folder.  The data structure of the note object is:
    title:
    text:
    id:
The id's are assigned/created using the Node UUID package.  More information on this package can be found at: https://www.npmjs.com/package/uuid
 
 ## Contributing 
 N/A
 ## Tests
No automated test cases were run on this application.  All integration and deployment tests were conducted manuallly by the developer.

 ## Questions
For questions on usage or functionality i can be reached at:

Github: [sdseney508](https://github.com/sdseney508)

E-mail: sdseney508@gmail.com
    
