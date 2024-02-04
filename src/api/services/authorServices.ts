import prisma from '../../prisma';

export const getAuthors = async () => {
  return await prisma.author.findMany();
};

export const addAuthor = async (author: string) => {
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

export const update = async (data: Author) => {
  return await prisma.author.update({
    where: {
      id: data.id,
    },
    data: data.name,
  });
};

export const deleteAuthor = async (authorId: number) => {
  return await prisma.author.delete({
    where: {
      id: authorId,
    },
  });
};
