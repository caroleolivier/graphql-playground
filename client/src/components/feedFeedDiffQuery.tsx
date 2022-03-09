import { gql, useQuery } from "@apollo/client";

const FEED_QUERY_1 = gql`
  query FeedQuery {
    feed {
      id
      url
      description
    }
  }
`;

const FEED_QUERY_2 = gql`
  query FeedQuery {
    feed {
      id
      description
    }
  }
`;

function FeedQuery1() {
  const { loading, error, data } = useQuery(FEED_QUERY_1);

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

function FeedQuery2() {
  const { loading, error, data } = useQuery(FEED_QUERY_2);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return data.feed.map(({ id, description }: any) => (
    <div key={id} >
      <p>{description} </p>
    </div>
  ));
}

export function FeedFeedDiffQuery() {
  return (
    <div>
      <p>Call twice same query with DIFF Args but at the same time so does not use cache</p>
      <FeedQuery1 />
      <FeedQuery2 />
    </div>
  )
}