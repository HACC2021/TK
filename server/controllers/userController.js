import User from "../models/User.js";

const registerUser = async (req, res) => {
    const {firstName, lastName, username, email, password} = req.body;

    const userExists = await User.findOne({email});

    if (userExists) {
        res.status(404);
        throw new Error("User already exists.");
    }

    const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        password
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error("Error occured.");
    }
}

export { registerUser };