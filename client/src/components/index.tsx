import { FeedFeed } from "./feedFeed";
import { FeedAndAuthor } from "./feedAndAuthor";
import { FeedFeedDiffQuery } from "./feedFeedDiffQuery";
import { FeedAfterFeed } from "./feedAfterFeed";

export function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      {/* <FeedFeed /> */}
      {/* <FeedFeedDiffQuery /> */}
      {/* <FeedAndAuthor /> */}
      <FeedAfterFeed />
    </div>
  );
}