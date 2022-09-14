import { Request, Response } from "express";
import { ChefsService } from "../services/chefs.service";
import { restaurantsService } from "../services/restaurants.service";

export class resturantsController {
    public static async getResturants(req: Request, res: Response) {
        const service = new restaurantsService();
        const resturants = await service.getRestaurants();
        return res.send(resturants);
    };

     public static async createRestaurants(req: Request, res: Response) {
         const params = req.body;
         const service = new restaurantsService();
         const restaurant = await service.createRestaurants(params);
         return res.send(restaurant);
     };
    
};