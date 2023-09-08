import multer from'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME; 
const PASSWORD = process.env.DB_PASSWORD;

const storage = new  GridFsStorage({
    url:`mongodb://${USERNAME}:${PASSWORD}@ac-mfgr9w6-shard-00-00.5esgizr.mongodb.net:27017,ac-mfgr9w6-shard-00-01.5esgizr.mongodb.net:27017,ac-mfgr9w6-shard-00-02.5esgizr.mongodb.net:27017/?ssl=true&replicaSet=atlas-1283tn-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options : { useUnifiedTopology: true , useNewUrlParser: true},
    file : (request,file ) =>{
       const match = [ "image/png","image/jpg"];
       if(match.indexOf(file.mimetype)=== -1){
        return `${Date.now()}-file-${file.originalname}`;

       }
       return{
        bucketName : `${date.now()}-file-${ile.originalname}`
       }
    }
});

export default multer({storage});