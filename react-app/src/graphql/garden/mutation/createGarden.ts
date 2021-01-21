/**
 * Create Garden Mutation
 * @author Lorien Olive
 */

import gql from 'graphql-tag';

const CREATE_GARDEN = gql`
  mutation createGarden($gardenInput: GardenInput) {
    createGarden(gardenInput: $gardenInput) {
      name
      streetAddress
    }
  }
`;

export default CREATE_GARDEN;
