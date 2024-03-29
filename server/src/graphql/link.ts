import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("description");
    t.nonNull.string("url");
  },
});

const links: NexusGenObjects["Link"][] = [
  {
    id: 1,
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
  {
    id: 2,
    url: "graphql.org",
    description: "GraphQL official website",
  },
];

export const LinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Link",
      resolve: linkQueryResolver,
    });
  },
});

function linkQueryResolver(parent: any, args: any, context: any, info: any) {
  console.log("link resolver called")
  return links;
}

export const LinkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("postLink", {
      type: "Link",
      args: {
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
      },

      resolve: linkMutationResolver,
    });
  },
});


function linkMutationResolver(parent: any, args: any, context: any, info: any) {
  const { description, url } = args;

  let idCount = links.length + 1;
  const link = {
    id: idCount,
    description: description,
    url: url,
  };
  links.push(link);
  return link;
}

export const LinkMutationUpdate = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.list.field("updateLink", {
      type: "Link",
      args: {
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
        id: nonNull(intArg()),
      },

      resolve: linkMutationUpdateResolver,
    });
  },
});

function linkMutationUpdateResolver(parent: any, args: any, context: any, info: any) {
  const { description, url, id } = args;

  const link = links.find(l => l.id == id);

  if (!link) {
    throw Error('Not found sorry!');
  }

  link.description = description;
  link.url = url;

  return links;
}