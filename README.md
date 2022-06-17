# HomeMade
HomeMade is an application that allows users to match with their perfect roommates. This application simplifies the process of searching for a roommate by putting potential roommates in one easy-to-use space.

## Major Concepts
After a user creates a profile by logging in with a Google account, he or she can access the <b>feed</b>, a list of other users who can be potential roommates. The user can choose among the users in the feed, either matching with them or declining them. Those with whom the user matched will be able to send a message to him or her. The user can reply to that message, continuing the conversation. In other words, once a conversation is initiated after a match is made, both sides will be able communicate with each other.

## Getting Started & Dev Setup

### Starting the App

```
$ npm install
$ npm run build
```

#### Start the MySQL service

(On Windows)
```
$ sudo service mysql start
```

(On Mac)
```
$ brew services start mysql
```

The default local port is 8080

```
http://localhost:8080
```

This app runs best on Node v14

#### How to Create and Seed Database
```
$ npm install sequelize-cli -g
$ sequelize db:create
$ sequelize db:migrate
$ sequelize db:seed --seed 20220523041332-users-seeder.js
$ sequelize db:seed --seed 20220525162512-listing-seeder.js
$ sequelize db:seed --seed 20220526204526-matches-seeder.js
$ sequelize db:seed --seed 20220521213654-messages-seeder.js
```

#### Drop, Create, and Migrate Database to Reset for Testing
```
$ sequelize db:drop && sequelize db:create && sequelize db:migrate
```