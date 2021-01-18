/**
 * Primary file for extracting proper schema structured objects
 * @author Lorien Olive
 */

import dateToString from '../../helpers/date';
import Garden from '../../models/garden';
import User from '../../models/user';

/**
 * Get user object with schema typing
 * @param id
 */
const getUser = async (id: string) => {
  try {
    const user: any = await User.findById(id);
    return {
      ...user._doc,
      _id: user.id,
      createdAt: dateToString(user._doc.createdAt),
      updatedAt: dateToString(user._doc.updatedAt)
    };
  } catch (err) {
    throw err;
  }
};

/**
 * Transform user object with schema typing
 * @param user
 */
const transformUser = (user: any) => {
  return {
    ...user._doc,
    _id: user.id,
    createdAt: dateToString(user._doc.createdAt),
    updatedAt: dateToString(user._doc.updatedAt)
  };
};

/**
 * Get garden object with schema typing
 * @param id
 */
const getGarden = async (id: string) => {
  try {
    const garden: any = await Garden.findById(id);
    return {
      ...garden._doc,
      _id: garden.id,
      createdAt: dateToString(garden._doc.createdAt),
      updatedAt: dateToString(garden._doc.updatedAt)
    };
  } catch (err) {
    throw err;
  }
};

/**
 * Transform garden object with schema typing
 * @param garden
 */
const transformGarden = (garden: any) => {
  return {
    ...garden._doc,
    _id: garden.id,
    name: garden.name,
    streetAddress: garden.street_address,
    createdAt: dateToString(garden._doc.createdAt),
    updatedAt: dateToString(garden._doc.updatedAt)
  };
};

export { getUser, transformUser, getGarden, transformGarden };
