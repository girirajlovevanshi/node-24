import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.DB_URI)
        console.log(`DB Connected, Host: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error(`unable to connect with DB`);
        process.exit(1)
    }
}

export default connectDB