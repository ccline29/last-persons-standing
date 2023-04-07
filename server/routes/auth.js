// Importing the express module
import express from "express";

// Importing the controller function for user authentication
import { login } from "../controllers/auth.js";

// Creating an instance of the express router
const router = express.Router();

// Defining a POST request handler for the login endpoint ("/login")
router.post("/login", login);

// Exporting the router 
export default router;
