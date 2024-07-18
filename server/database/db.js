import mongoose from "mongoose";


const DBconnection = async ()=>{
    const DB_URL = 'mongodb+srv://harshugarg2907:harshugarg2907@file-sharing.hox2vvz.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing';

    try{
      await mongoose.connect(DB_URL);
      console.log('database connected successfully');
    }catch(error){
        console.error("error while connecting to databse ",error.message);
    }
}

export  default DBconnection;