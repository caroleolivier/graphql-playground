import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Author = objectType({
  name: "Author",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
  },
});


const authors: NexusGenObjects["Author"][] = [
  {
    id: 1,
    name: "Carole",
  },
  {
    id: 2,
    name: "John",
  },
];

export const AuthorQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("author", {
      type: "Author",
      resolve: authorQueryResolver
    });
  }
});

function authorQueryResolver(parent: any, args: any, context: any, info: any) {
  console.log("author resolver called")
  return authors;
}