import { gql } from '@apollo/client';

export const LIST_LAUNCHES = gql`
  query allLaunches($offset: Int, $limit: Int) {
    launches(offset: $offset, limit: $limit) {
      docs {
        id
        name
        success
        details
        date_utc
        links {
          patch {
            large
          }
        }
      }
      page
      offset
      limit
    }
  }
`;
