/**
 * Define model for user
 * @author Lorien Olive
 */

import mongoose from 'mongoose';

/**
 * User Schema
 */
const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String
    },
    gardens: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Garden'
    }]
  },
  {
    timestamps: true
  }
);

/**
 * Statics
 */
userSchema.statics = {
  /**
   * Get User
   * @param {ObjectId} id - The objectId of user.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((user: any) => {
        if (user) {
          return user;
        }
      });
  }
};

export default mongoose.model('User', userSchema);
