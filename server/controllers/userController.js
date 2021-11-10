import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

//@route    POST /users/login
//@desc     Authenticate the user
//@access   Public
const authenticate = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const currUser = await User.findOne({username});

    if (currUser && (await currUser.matchPassword(password))) {
        res.json({
            _id: currUser._id,
            firstName: currUser.firstName,
            lastName: currUser.lastName,
            username: currUser.username,
            email: currUser.email,
            token: generateToken(currUser._id),
        })
    } else {
        res.status(401);
        throw new Error("Email or password is incorrect.");
    }
});

//@route    POST /users/register
//@desc     Register user
//@access   Public
const register = asyncHandler(async (req, res) => {
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
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error("Error occured.");
    }
});

//@route    GET /users/profile
//@desc     Get the current user profile
//@access   Private
const getUserProfile = asyncHandler(async (req, res) => {
    const currUser = await User.findById(req.user._id);

    if (currUser) {
        currUser.firstName = req.body.firstName || currUser.firstName;
        currUser.lastName = req.body.lastName || currUser.lastName;
        currUser.username = req.body.username || currUser.username;
        currUser.email = req.body.email || currUser.email;
        if (req.body.password) currUser.password = req.body.password;

        const updatedUser = await currUser.save();

        res.json({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            username: updatedUser.username,
            email: updatedUser.email,
            token: generateToken(updatedUser._id),
        });
    } else {
        res.status(404);
        throw new Error("User Not Found.");
    }
});

export { authenticate, register, getUserProfile };