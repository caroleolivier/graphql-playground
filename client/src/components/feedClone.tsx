import { gql, useQuery } from "@apollo/client";

const FEED_QUERY = gql`
  query CanBeAnything {
    feed {
      id
      url
      description
    }
  }
`;

export function FeedClone() {
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