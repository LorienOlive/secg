/**
 * Define model for garden
 * @author Lorien Olive
 */

import mongoose from 'mongoose';

/**
 * Garden Schema
 */
const gardenSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    street_address: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

/**
 * Statics
 */
gardenSchema.statics = {
  /**
   * Get Garden
   * @param {ObjectId} id - The objectId of garden.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((garden: any) => {
        if (garden) {
          return garden;
        }
      });
  }
};

export default mongoose.model('Garden', gardenSchema);
