import Chefs from "../db/models/chefs";

export class ChefsDal {

    public createChef(chef: any) {
        chef = new Chefs({
          resImage: chef.resImage,
          name: chef.name,
        });

        chef.save(function (err: any, results: any) {
          return results;
        });
    }

    public async updateChef(chef:any) {
      const data = await Chefs.findOne({
        name: chef.name,
      }).updateOne({$set: {age: chef.age,},})
        return data
      }


    public findAll(query: any = null) {
        return Chefs.find(query);
      }
}