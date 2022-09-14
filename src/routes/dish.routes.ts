import { Router } from "express";
// import { ChefsController } from "../controllers/chefsController";
import { dishController } from "../controllers/dishController";

    const router = Router();
        router.get("/getDish", dishController.getDish);
         router.post("/createDish", dishController.createDish);

export default router;