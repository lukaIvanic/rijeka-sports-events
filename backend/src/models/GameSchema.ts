import mongoose, { Document, Model, model, Schema } from 'mongoose'

export interface IGame extends Document {
  time: string;
  clubs: Schema.Types.ObjectId[];
  sport: string;
  league: string;
  result: string;
  goals: string[];
  isFinished: boolean;
}

const GameSchema = new Schema<IGame>({
  time: { type: String },
  clubs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
  result: { type: String, required: true },
  goals: [{ type: String }],
  sport: {type: String},
  league: {type: String},
  isFinished: {type: Boolean, default: false}
})

const Game: Model<IGame> = model("Game", GameSchema)
export default Game