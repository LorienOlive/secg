/**
 * File containing all garden queries, mutations and subscriptions
 * @author Lorien Olive
 */

import { PubSub } from 'apollo-server';
// import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
// import config from '../../../config';
import Garden from '../../models/garden';
import { transformGarden } from './merge';
const pubsub = new PubSub();

const GARDEN_ADDED = 'GARDEN_ADDED';
const GARDEN_UPDATED = 'GARDEN_UPDATED';

/**
 * Garden Queries
 */
const GardenQueries = {
  gardens: async (parent, args, context) => {
    try {
      const gardens = await Garden.find();
      return gardens.map((garden) => {
        return transformGarden(garden);
      });
    } catch (err) {
      throw err;
    }
  },
  garden: async (parent, { gardenId }) => {
    try {
      const garden = await Garden.findById(gardenId);
      return transformGarden(garden);
    } catch (err) {
      throw err;
    }
  }
};

/**
 * Garden Mutations
 */
const GardenMutation = {
  createGarden: async (parent, { gardenInput }, context) => {
    // Commented auth check for now.
    //   // If not authenticated throw error
    // if (!context.isAuth) {
    //     throw new Error('Non Authenticated');
    // }
    try {
      const garden = await Garden.findOne({
        name: gardenInput.name
      });
      if (garden) {
        throw new Error('Garden already Exists');
      } else {
        const newGarden = new Garden({
          _id: new mongoose.Types.ObjectId(),
          name: gardenInput.name,
          street_address: gardenInput.streetAddress
        });
        const savedGarden = await newGarden.save();
        pubsub.publish(GARDEN_ADDED, {
          gardenAdded: transformGarden(savedGarden)
        });
        return {
          gardenId: savedGarden.id,
        };
      }
    } catch (error) {
      throw error;
    }
  },
  updateGarden: async (parent, { gardenId, updateGarden }, context) => {
    // // If not authenticated throw error
    // if (!context.isAuth) {
    //   throw new Error('Non Authenticated');
    // }
    try {
      const garden = await Garden.findByIdAndUpdate(gardenId, updateGarden, {
        new: true
      });
      return transformGarden(garden);
    } catch (error) {
      throw error;
    }
  }
};

/**
 * Garden Subscriptions
 */
const GardenSubscription = {
  gardenAdded: {
    subscribe: () => pubsub.asyncIterator([GARDEN_ADDED])
  },
  gardenUpdated: {
    subscribe: () => pubsub.asyncIterator([GARDEN_UPDATED])
  }
};

export { GardenQueries, GardenMutation, GardenSubscription };
