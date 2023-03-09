/** source/routes/posts.ts */
import { Router } from "express";
import controller from "./usersController";

const router = Router();

router.get("/posts", controller.getPosts);
router.get("/posts/:id", controller.getPost);
router.put("/posts/:id", controller.updatePost);
router.delete("/posts/:id", controller.deletePost);
router.post("/posts", controller.addPost);

export = router;