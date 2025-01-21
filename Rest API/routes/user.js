const express = require('express')

const {handleGetUser, HandleGetUserByID, HandleCreateUser} = require('../controlers/user')

const router = express.Router();

router.get('/', handleGetUser)

router
    .route('/:id')
    .get(HandleGetUserByID)



// POST to create a new user
router.post("/", HandleCreateUser);

// Serve users as HTML list
router.get('/', async (req, res) => {
    const dbUser = await User.find()
    const html = `
      <ul>
        ${dbUser.map(user => `<li>Name:- ${user.firstName} ${user.lastName}     email:- ${user.email}</li>`).join("")}
      </ul>
    `;
    res.send(html);
});

module.exports = router;