import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Planet = new Schema(
    {
        name: { type: String, required: true },
        mass: { type: Number, required: true },
        composition: { type: String, required: true, enum: ['terrestial', 'gas'] },
        rings: { type: Boolean, required: true, default: false },
        starId: { type: ObjectId, red: 'Star', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

export default Planet;