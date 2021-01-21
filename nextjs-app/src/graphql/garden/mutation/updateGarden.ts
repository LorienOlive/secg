/**
 * Update user mutation
 * @author Lorien Olive
 */

import gql from 'graphql-tag';

const UPDATE_GARDEN = gql`
  mutation updateGarden($gardenId: ID!, $updateGarden: UpdateGarden) {
    updateGarden(gardenId: $gardenId, updateGarden: $updateGarden) {
      _id
      name
      streetAddress
    }
  }
`;

export default UPDATE_GARDEN;
