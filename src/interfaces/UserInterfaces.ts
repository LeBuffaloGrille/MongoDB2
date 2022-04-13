import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    password: string,
    email: string,
    gender: string,
    ip: string,
    //comparePassword(candidatePassword: string): Promise<boolean>
}
