import { RestaurantsDal } from "../dal/restaurants.dal";

export class restaurantsService {

            public async getRestaurants() {
                const dal = new RestaurantsDal();
                const res = await dal.findAll();
                return res;
            };
       
            public async createRestaurants(restaurants:any) {
                const dal = new RestaurantsDal();
                const res = dal.createRestaurant(restaurants);
                return res; 
            };

            public async updateRestaurant(restaurant:any) {
                const dal = new RestaurantsDal();
                const res = await dal.updateRestaurant(restaurant);
                return res;
            };

        //  const RequestFromDB =[
        //     {

        //          name:{
        //              type:String,
        //              require:true,
        //         },
                
        //          ChefName:{
        //              type:String,
        //              require:true,
        //         },

        //          URLImage:{
        //              type:String,
        //              require:true,
        //         },

        //          Status:{
        //              type:String,
        //              require:true,
        //         },

        //          dishes:{
        //              type:[],
        //              require:true,
        //         },
        //     },
        // ]
        //  return RequestFromDB;
    
        }