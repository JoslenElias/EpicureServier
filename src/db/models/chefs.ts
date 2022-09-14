import mongoose from 'mongoose';

const chefsSchema = new mongoose.Schema(
    {
      resImage: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
    },
    { timestamps: true }
  );
  
const Chefs = mongoose.model('Chefs', chefsSchema);
  
export default Chefs;

