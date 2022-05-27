const express = require ('express');
const messagesRouter = express.Router();
const db = require ('../database/connection.js');
// const { UserMessage } = require('../../models/UserMessage.js');
// // const { UserMessage } = require('../../models/User.js');
const { Message } = require('../../models/Message.js');
const { resolve } = require('path');


//USER SHOULD BE ABLE TO SEE ALL MESSAGES IN THEIR INBOX. THIS WILL BE A GET REQUEST


// ///user/:id/messages


//GET ALL USERS get request in users.js
//CREATE A USER by using id 

//CRUD OPERATIONS FOR EACH OF YOUR MODELS
// CREATE READ (ALL) UPDATE DESTROY - SHOW (ONE)
// POST GET /all PATCH DELETE - GET /:id (ONE)
// Users, Messages, Listings, Matches
// 


//WHEN USER CLICKS ON SENDERS NAME, USER WILL BE ABLE TO SEND MESSAGE TO THAT USER

messagesRouter.post('/', (req, res) => {
  Message.findOne({where: {
    id: req.body.id
  }})
    .then((response) => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});


messagesRouter.get('/', (req, res) => {
  Message.findAll({where: { recipientId: req.query.recipientId }
  })
    .then((data) => {
      //console.log(data[0].dataValues.message);
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});


//USER SHOULD BE ABLE TO SELECT A SPECIFIC MESSAGE FROM MESSAGES

// router.get('/messages:id', (req, res) => {
//   console.log(req.params);
//   Message.findOne({ attributes: ['message', 'timeSent', 'recepientId'],
//     where: {}})
//     .then((data) => {
//       console.log(data);
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

//USER SHOULD BE ABLE TO WRITE A MESSAGE TO ANOTHER USER IF THEY HAVE MATCHED. POST REQUEST

// router.post('/messages', (req, res) => {
//   //create new message by first accessing the right message object from database
//   // console.log(req); 
//   // //https://sequelize.org/docs/v6/core-concepts/model-instances/
//   // Message.build({})
//   //   .then((data) => {
//   //     res.sendStatus(201);
//   //   })
//   //   .catch((error) => {
//   //     console.error(error);
//   //     res.sendStatus(500);
//   //   });
// });



//USER SHOULD BE ALLOWED TO DELETE A MESSAGE FROM THEIR INBOX. DELETE REQUEST

// router.delete('/messages/:id', (req, res) => {
//   //console.log(req.params);
//   // Message.destroy({where: {

//   // }})
//   //   .then((data) => {
//   //     res.sendStatus(200);
//   //   })
//   //   .catch((err) => {
//   //     console.error(err);
//   //     res.sendStatus(500);
//   //   });
// });

module.exports = {
  messagesRouter
};