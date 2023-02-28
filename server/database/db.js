import mongoose from "mongoose";

export const Connection = async(username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.n0o1e3p.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(URL)
        console.log("database is connected")
    } catch (error) {
        console.log(error.message)
    }
}

export default Connection;