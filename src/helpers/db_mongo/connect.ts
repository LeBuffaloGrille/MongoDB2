import mongoose from "mongoose";
import config from "config";

async function connect(){
    try{
        await mongoose.connect("mongodb://localhost:27017/mongoDB");
        console.log("Connect to database");
    }catch{
        console.log("Error on database connection")
    }
}

export default connect;