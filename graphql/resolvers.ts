import { Context } from "@/pages/api/graphql";

export const resolvers = {
  Query: {
    //get novel by id
    novel: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
};
