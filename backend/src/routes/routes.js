import { Router } from "express";
import { postCtrl } from "../controllers/post.controller.js";
import { userCtrl } from "../controllers/user.controller.js";
import { validations, handleValidation } from "../validations.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hola, mundo!");
});
// Rutas de publicaciones
router.get("/posts", postCtrl.getPosts);

router.post("/posts", validations.validatePost, handleValidation, postCtrl.postPost);

router.put("/posts/:_id/comments", validations.validateComment, handleValidation, postCtrl.addComment);

router.delete("/posts/:_id", postCtrl.deletePost);

//Rutas de usuarios
router.get("/users", userCtrl.getUsers);

router.post("/users", validations.validateUser, handleValidation, userCtrl.postUser);

router.delete("/users/:_id", userCtrl.deleteUser);

export { router };
