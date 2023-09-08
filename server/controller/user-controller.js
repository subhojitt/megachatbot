import { request, response } from "express";
import user  from "../model/user.js"


export const addUser = async (request, response) => {
try{
   let exist = await user.findone({sub:request.body.sub});
   if (exist){
    response.status(200).json( {msg: 'User already exists'});
    return;
   }

   const newUser = new User(request.body);
   await newUser.save();
   return response.status(200).json(newUser);

 } catch(error) {
return response.status(500).json(error.message);
    }
}
export const getUsers = async (request, response) => {
    try{
        const users = await user.find({});
        return response.status(200).json(users);
    }
    catch(error){
       return response.status(500).json(error.message); 
    }
}

