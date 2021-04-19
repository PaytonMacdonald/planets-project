import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Star = new Schema(
    {
        name: { type: String, required: true },
        mass: { type: Number, required: true },
        type: { type: String, required: true, enum: ['dwarf', 'average star', 'red giant'] },
        color: { type: String, required: true },
        galaxyId: { type: ObjectId, ref: 'Galaxy', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

export default Star;