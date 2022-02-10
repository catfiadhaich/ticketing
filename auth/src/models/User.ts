import mongoose from 'mongoose';
import { Password } from '../services/Password';

interface IUser {
    email: string;
    password: string;
}

interface IUserModel extends mongoose.Model<IUserDocument> {
    build(attrs: IUser): IUserDocument;
}

interface IUserDocument extends mongoose.Document {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

userSchema.statics.build = (attrs: IUser) => {
    return new User(attrs);
};

const User = mongoose.model<IUserDocument, IUserModel>('User', userSchema);

export { User };