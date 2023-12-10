import { Router } from "express";
import { postCtrl } from "../controllers/post.controller.js";
import { userCtrl } from "../controllers/user.controller.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hola, mundo!");
});
// Rutas de publicaciones
router.get("/posts", postCtrl.getPosts);

router.post("/posts", postCtrl.postPost);

router.put("/posts/:_id/comments", postCtrl.addComment);

router.delete("/posts/:_id", postCtrl.deletePost);

//Rutas de usuarios
router.get("/users", userCtrl.getUsers);

router.post("/users", userCtrl.postUser);

router.delete("/users/:_id", userCtrl.deleteUser);

export { router };
