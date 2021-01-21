/**
 * New user added subscription
 * @author Lorien Olive
 */

import gql from 'graphql-tag';

const USER_ADDED = gql`
  subscription {
    userAdded {
      name
      _id
      email
    }
    userUpdated {
      name
      email
    }
  }
`;

export default USER_ADDED;
