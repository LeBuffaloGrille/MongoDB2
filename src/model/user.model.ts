import mongoose from 'mongoose';
import config from 'config';
import { UserDocument } from '../interfaces/UserInterfaces';
import bcrypt from 'bcrypt';

const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
    id: {type:Number, required:false},
    first_name: {type:String, required:false},
    last_name: {type:String, required:false},
    username: {type:String, required:false},
    password: {type: String, required: true},
    email: {type:String, required:true},
    gender: {type: String, required: true},
    ip: {type: String, required: true}
},
{
    timestamps: true,
})

userSchema.pre("save", async function(next: any) {
	let user = this as UserDocument;
    
    if(!user.isModified("password")) {
    	return next()
    }
    
    let salt = await bcrypt.genSalt(config.get<number>("Salt"))
    let hash = await bcrypt.hash(user.password, salt)
    
    user.password = hash;
})

userSchema.methods.comparePasswords = async function(candidatePasswords: string | Buffer):Promise<boolean> {
	let user = this as UserDocument;
    return bcrypt.compare(candidatePasswords, user.password).catch((e)=> false);
}

const UserModel = mongoose.model("User", userSchema);

export default UserModel;