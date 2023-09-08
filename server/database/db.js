import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME; 
const PASSWORD = process.env.DB_PASSWORD;


const connection = async () =>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-mfgr9w6-shard-00-00.5esgizr.mongodb.net:27017,ac-mfgr9w6-shard-00-01.5esgizr.mongodb.net:27017,ac-mfgr9w6-shard-00-02.5esgizr.mongodb.net:27017/?ssl=true&replicaSet=atlas-1283tn-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true});
        console.log('Database connected Succesfully');
    }catch(error){
        console.log("Error while connecting with Database" , error.message);
    }
}
export default connection;