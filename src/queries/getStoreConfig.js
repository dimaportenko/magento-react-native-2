/** @noflow */

import { gql } from '@apollo/client';

export const GET_STORE_CONFIG = gql`
  query get {
      storeConfig {
          base_media_url
          secure_base_media_url
      }
  }
`;
