 import mongoose from "mongoose";

 const messageSchema = new mongoose.Schema({
    conversationId : {
        type: String
    },
    receiverId :{
        type: String
    },
    Text :{
        type: String

    },
    type : {
        type : String

    }
},
    {
        timestamps : true
    });


    const message = mongoose.model('Message', messageSchema);

    export default message;