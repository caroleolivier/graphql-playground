import { gql, useQuery } from "@apollo/client";

const FEED_QUERY = gql`
  query FeedAuthorQuery {
    feed {
      id
      description
      url
    }
    author {
      id
      name
    }
  }
`;

export function FeedAndAuthor() {
  const { loading, error, data } = useQuery(FEED_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  const feeds = data.feed.map(({ id, url, description }: any) => (
    <div key={id} >
      <p>{description}: {url} </p>
    </div>
  ));

  const authors = data.author.map(({ id, name }: any) => (
    <div key={id} >
      <p>{name} </p>
    </div>
  ));

  return <div>
    {feeds}
    {authors}
  </div>;
}