# MySocial - API 
        
## Description 📄
        
![Type](https://img.shields.io/badge/Type-Social_Network_API-C97C5D.svg)
![License](https://img.shields.io/badge/License-MIT-8A482E.svg)

All Social Network needs a database to store users, posts, friends and other. With this API the backend is ready to be used in any type of social media website and only needs to be downloaded and installed. As a webdevelper it is impportant to minize repetition and so having a backend build that can be reused is more than just convienient! This database was build using MondoDB and Mongoose which are both very new to me. I was able to learn more about them and now have an even better understanding of how to create a good database.

## Table of Contents 📌
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credit](#credit)
- [Test](#test)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation 📐


If the folder contains a package.json with dependencies listed and/or package-lock.json file, simply enter 'npm install' in the terminal.
If none of those files are available or there aren't any dependencies listed in the package.json make sure to follow these steps:

1. type 'npm init' into the terminal
2. type 'npm package-name@version' for each package listed below:


-dayjs@1.11.7

-express@4.18.2

-mongoose@6.10.0



## Usage 💻

Once the packages installed simply type 'node index.js' into the terminal to start the server on your local machine. The following routes are available:

Users:

    .../api/users
GET: Returns all users, including their thoughts and firends populated.

POST: creates new user with the following body model: 

    {
    "username": "Malyco",
    "email": "malyco@gmail.com"
    }

By user Id:

    .../api/users/:userId

GET: Returns user, including their thoughts and firends populated, by Id

DELETE: Deletes user and all associated thoughts by Id

PUT: Updates the user by Id

Friends:

    .../api/users/:usesrId/friends/:friendId

POST: Adds user to users friend array through userId and friendId 

DELETE: Removes user from users friend list through userId and friendId

Thoughts:

    .../api/thoughts

GET: Returns all thoughts including it's user.

POST: creates new thought with the following body model: 

    {
	"thoughtText": "There was snow yesterday!",
    "username": "Maya",
    "userId": "63fd3ee631b2d3d05d0c07b5"
    }

By thought id:

    .../api/thoughts/:thoughtId

GET: Returns thought and it's user by id.

PUT: Updates the thought by Id.

DELETE: Deletes thought by id and removes it from it's users thoughts array.

Reaction:

    .../api/thoughts/:thoughtId/reactions

POST: creates a reaction and adds it to a thoughts reactions array using the following body model:

    {
	"reactionBody":"It was so pretty!",
	"username":"Josh"
    }

DELETE: deletes a reaction from its thoughts reactions array using the following body model:

    {
	"reactionId":"63fbf53a403fc5f848a55169"
    }

## License 🔑

This project is covered under the MIT license.

## Credit

N/A

## Test

N/A

## Contributing

N/A

## Questions 📫

Find me on GitHub: https://github.com/Mayalynn96

Or email me at: mayalynncohen@gmail.com