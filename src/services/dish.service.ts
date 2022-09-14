import { DishDal } from "../dal/dish.dal";

export class dishService {

        public async getDish() {
            const dal = new DishDal();
            const res = await dal.findAll();
            return res;
        };
   
        public async createDish(dish:any) {
            const dal = new DishDal();
            const res = dal.createDish(dish);
            return res; 
        };

        public async updateDish(chef:any) {
            const dal = new DishDal();
            const res = await dal.updateDish(chef);
            return res;
        };

        // const RequestFromDB =[
        //     {
        //         ImgURL:{
        //             type:String,
        //             require:true,
        //         },

        //         DishType:{
        //             type:String,
        //             require:true,
        //         },

        //         name:{
        //             type:String,
        //             require:true, 
        //         },

        //         signature:{
        //             type:String,
        //             require:true, 
        //         },

        //         price:{
        //             type:String,
        //             require:true, 
        //         },
        //     },
        // ]
        // return RequestFromDB;
    
        };