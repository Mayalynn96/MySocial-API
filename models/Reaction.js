const dayjs = require('dayjs');
const { Schema, Types } = require('mongoose')

// Schema for Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: dayjs(),
        },
    }
)

  
const Reaction = model('reaction', reactionSchema);
  
module.exports = Reaction;