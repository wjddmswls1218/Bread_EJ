import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Bread = new Schema(
    {
        name:{
            type:String,
            required:true,
        },

        price:{
            type:Number,
            required:true,
        }
    },
    {
        versionKey:false
    });

export default mongoose.model(`Bread`,Bread,`Bread`);