import { Router } from "express";
import { postCtrl } from "../controllers/post.controller.js";
import { userCtrl } from "../controllers/user.controller.js";
import { validations } from "../validations.js";
import { handleValidation } from "../middlewares/validateContent.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hola, mundo!");
});
// Rutas de publicaciones
router.get("/posts", postCtrl.getPosts);

router.post("/posts", validations.validatePost, handleValidation, authenticate, postCtrl.postPost);

router.put("/posts/:_id/comments", validations.validateComment, handleValidation, authenticate, postCtrl.addComment);

router.delete("/posts/:_id", authenticate, postCtrl.deletePost);

//Rutas de usuarios
router.get("/users", authenticate, userCtrl.getUsers);

router.post("/login", userCtrl.loginUser);

router.post("/signup", validations.validateUser, handleValidation, userCtrl.signUpUser);

router.delete("/users/:_id", authenticate, userCtrl.deleteUser);

export { router };
