import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema(
    {
      ImgURL: {
        type: String,
        required: true
      },
      DishType: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      signature: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      },
    },
    { timestamps: true }
  );
  
const Dish = mongoose.model('Dish', dishSchema);
  
export default Dish;

