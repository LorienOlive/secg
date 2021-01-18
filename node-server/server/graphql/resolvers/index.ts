/**
 * Exporting all resolvers
 * @author Lorien Olive
 */

import { GardenMutation, GardenQueries, GardenSubscription } from './garden';
import { UserMutation, UserQueries, UserSubscription } from './user';

const rootResolver = {
  Query: {
    ...UserQueries,
    ...GardenQueries
    // Add other queries here
  },
  Mutation: {
    ...UserMutation,
    ...GardenMutation
    // Add other mutations here
  },
  Subscription: {
    ...UserSubscription,
    ...GardenSubscription
    // Add other subscriptions here
  }
};

export default rootResolver;
