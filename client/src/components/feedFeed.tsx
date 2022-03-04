import { gql, useQuery } from "@apollo/client";

const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      url
      description
    }
  }
`;

function Feed() {
  const { loading, error, data } = useQuery(FEED_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return data.feed.map(({ id, url, description }: any) => (
    <div key={id} >
      <p>{description}: {url} </p>
    </div>
  ));
}

export function FeedFeed() {
  return (
    <div>
      <p>Call twice the same query with exact same name and arguments so uses cache</p>
      <Feed />
      <Feed />
    </div>
  )
}