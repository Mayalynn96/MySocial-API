const dayjs = require('dayjs');
const { Schema, Types, model} = require('mongoose')

// Schema for Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type:String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: dayjs(),
        },
        reactions: [
            {
                type:Schema.Types.ObjectId,
                ref: 'reaction',
            },
        ]
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
)

thoughtSchema.virtual('reactionCount').get(()=>{
    return this.reactions.length
  })
  
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;