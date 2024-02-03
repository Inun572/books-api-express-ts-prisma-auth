import prisma from '../../prisma';

export const getAuthors = async () => {
  return await prisma.author.findMany();
};

export const addAuthor = async (author: any) => {
  return await prisma.author.create({
    data: { name: author },
  });
};

export const find = async (authorId: number) => {
  return await prisma.author.findUnique({
    where: {
      id: authorId,
    },
  });
};

export const update = async (
  authorId: number,
  author: any
) => {
  return await prisma.author.update({
    where: {
      id: authorId,
    },
    data: author,
  });
};

export const deleteAuthor = async (authorId: number) => {
  return await prisma.author.delete({
    where: {
      id: authorId,
    },
  });
};
