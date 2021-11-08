import asyncHandler from "express-async-handler";

const getAllTrails = asyncHandler(async (req, res) => {
    res.send('hello from trails');
})

export {getAllTrails};