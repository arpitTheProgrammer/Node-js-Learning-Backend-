const User = require('../modals/user')

const handleGetUser = async(req, res) => {
    const allDbUser = await User.find()
    console.log('I am in get route', req.myUserName);
    console.log(req.headers);
    res.setHeader('X-myName', "Arpit Srivastava");  // Custom Header
    return res.json(allDbUser); 
}

const HandleGetUserByID = async(req, res) => {
    const id = Number(req.params.id);
    const user = await User.find(user => user.id === id);
    if (user) {
        return res.json(user);
    } else {
        return res.status(404).json({ message: 'User not found' });
    }
}

const HandleCreateUser = async(req, res) => {
    try {
        const body = req.body;

        // Map request body fields to schema fields if needed
        const newUser = await User.create({
            firstName: body.first_name,  // Note: Mapping
            lastName: body.last_name,
            email: body.email,
            jobTitle: body.job_title
        });

        // Save to MongoDB
        const savedUser = await newUser.save();
        console.log(savedUser);
        return res.status(201).json({ msg: "SUCCESS" });
    } catch (err) {
        console.error('Error creating user:', err);
        return res.status(500).json({ msg: "Failed to create user", error: err.message });
    }
}

module.exports = {
    handleGetUser,
    HandleGetUserByID,
    HandleCreateUser
}