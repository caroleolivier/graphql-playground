import { gql, useQuery } from "@apollo/client";

const FEED_QUERY_PARENT = gql`
  query FeedQuery {
    feed {
      id
      url
      description
    }
  }
`;
/**
 * It requests less data than parent
 */
const FEED_QUERY_CHILD = gql`
  query FeedQuery {
    feed {
      id
      description
    }
  }
`;

function FeedQueryParent() {
  const { loading, error, data } = useQuery(FEED_QUERY_PARENT);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      Feed Parent
      <FeedQueryChild />
    </div>
  );
}

function FeedQueryChild() {
  console.log('loading feed query child')
  const { loading, error, data } = useQuery(FEED_QUERY_CHILD);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      Feed Child
    </div>
  );
}

export function FeedAfterFeed() {
  return (
    <div>
      <p>Call twice same query with DIFF Args but one after the other so uses cache</p>
      <FeedQueryParent />
    </div>
  )
}