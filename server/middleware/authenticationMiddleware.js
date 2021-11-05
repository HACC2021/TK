import jwt from "jsonwebtoken";
import User from "../models/User.js";
import asyncHandler from "express-async-handler";

const validateToken = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decodedToken.id).select("password");
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Authorization failed. Invalid token.");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Authorization failed. No token.");
    }
});

export { validateToken };