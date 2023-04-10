// Importing the express module
import express from "express";

// Importing the controller functions for the posts
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";

// Importing the authentication middleware to verify tokens
import { verifyToken } from "../middleware/auth.js";

// Creating an instance of the express router
const router = express.Router();

// Defining a GET request handler for the root endpoint ("/")
router.get("/", verifyToken, getFeedPosts);

// Defining a GET request handler for the endpoint that retrieves posts for a specific user ("/:userId/posts")
router.get("/:userId/posts", verifyToken, getUserPosts);

// Defining a PATCH request handler for the endpoint that allows a user to like a post ("/:id/like")
router.patch("/:id/like", verifyToken, likePost);

// Exporting the router
export default router;
