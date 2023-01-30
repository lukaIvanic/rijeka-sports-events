import mongoose, { Document, Model, model, Schema } from 'mongoose'

export interface ILeague extends Document {
  name: string;
  sport: string;
}

const LeagueSchema = new Schema<ILeague>({
  name: { type: String, unique: true },
  sport: { type: String },
})

const League: Model<ILeague> = model("League", LeagueSchema)
export default League