import { FeedFeed } from "./feedFeed";
import { FeedAndAuthor } from "./feedAndAuthor";
import { FeedFeedDiffQuery } from "./feedFeedDiffQuery";

export function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      {/* <FeedFeed /> */}
      <FeedFeedDiffQuery />
      {/* <FeedAndAuthor /> */}
    </div>
  );
}