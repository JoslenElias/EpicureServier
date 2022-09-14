import { Request, Response } from "express";
// import dish from "../db/models/dish";
// import { ChefsService } from "../services/chefs.service";
import { dishService } from "../services/dish.service";

export class dishController {
    public static async getDish(req: Request, res: Response) {
        const service = new dishService();
        const dish = await service.getDish();
        return res.send(dish);
    };

     public static async createDish(req: Request, res: Response) {
         const params = req.body;
         const service = new dishService();
         const dish = await service.createDish(params);
         return res.send(dish);
     };
    
};