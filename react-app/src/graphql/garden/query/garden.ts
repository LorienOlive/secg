/**
 * Get all gardens query
 * @author Lorien Olive
 */

import gql from 'graphql-tag';

const GET_GARDENS = gql`
  {
    gardens {
      name
      _id
      street_address
    }
  }
`;

export default GET_GARDENS;
