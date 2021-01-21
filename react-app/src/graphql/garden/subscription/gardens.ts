/**
 * New user added subscription
 * @author Lorien Olive
 */

import gql from 'graphql-tag';

const USER_ADDED = gql`
  subscription {
    gardenAdded {
      name
      _id
      streetAddress
    }
    gardenUpdated {
      name
      streetAddress
    }
  }
`;

export default USER_ADDED;
