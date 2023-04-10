// Importing the express module
import express from "express";

// Importing the controller functions for user data
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/users.js";

// Importing the authentication middleware to verify tokens
import { verifyToken } from "../middleware/auth.js";

// Creating an instance of the express router
const router = express.Router();

// Defining a GET request handler for the endpoint that retrieves a user's data ("/:id")
router.get("/:id", verifyToken, getUser);

// Defining a GET request handler for the endpoint that retrieves a user's friends ("/:id/friends")
router.get("/:id/friends", verifyToken, getUserFriends);

// Defining a PATCH request handler for the endpoint that allows a user to add or remove a friend ("/:id/:friendId")
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

// Exporting the router 
export default router;
