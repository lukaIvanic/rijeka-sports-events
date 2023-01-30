import mongoose, { Document, Model, model, Schema } from 'mongoose'

export interface IProfile extends Document {
  mail: string;
  username: string;
  password: string;
  games?: Schema.Types.ObjectId[];
  type: string;
  sport?: string;
  league?: Schema.Types.ObjectId;
  profilePicture?: string;
}

const ProfileSchema = new Schema<IProfile>({
  mail: { type: String, unique: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true, default: 'USER' },
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
  sport: { type: String },
  league: { type: mongoose.Schema.Types.ObjectId, ref: 'League' },
  profilePicture: {type: String, default: 'NPP'}
})

const Profile: Model<IProfile> = model("Profile", ProfileSchema)
export default Profile