import Dish from "../db/models/dish";

export class DishDal {

    public createDish(dish: any) {
        dish = new Dish({
          ImgURL: dish.ImgURL,
          DishType: dish.DishType,
          name: dish.name,
          signature: dish.signature,
          price: dish.price,
        });

        dish.save(function (err: any, results: any) {
          return results;
        });
    }

    public async updateDish(dish:any) {
      await Dish.findOne({
        name: dish.name,
      }).updateOne({$set: {chef: dish.chef,}});
        const updatedDish = await Dish.find();
        return updatedDish;
    }


    public findAll() {
        return Dish.find();
    }
}


