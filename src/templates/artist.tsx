import React from "react";
import { graphql } from "gatsby";
import { ArtistQuery } from "./__generated__/ArtistQuery";

type Props = {
  data: ArtistQuery;
};

const ArtistTemplate = (props: Props) => {
  // const doc = props?.data?.prismic?.__typename;
  // if (!doc) return null;

  return <div>Artist template</div>;
};

export default ArtistTemplate;

// export const query = graphql`
//   query ArtistQuery {
//     prismic {
//       allArtists {
//         edges {
//           node {
//             _meta {
//               id
//             }
//           }
//         }
//       }
//     }
//   }
// `;
