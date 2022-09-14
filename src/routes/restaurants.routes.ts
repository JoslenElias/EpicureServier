import { Router } from "express";
import { resturantsController } from "../controllers/restaurantsController";

    const router = Router();
        router.get("/getrestaurants", resturantsController.getResturants);
         router.post("/createResturants", resturantsController.createRestaurants);

export default router;