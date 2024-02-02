import prisma from '../../prisma';

export const getBooks = async () => {
  return await prisma.book.findMany();
};

export const find = async (bookId: number) => {
  return await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });
};

export const addBook = async (book: any) => {
  return await prisma.book.create({
    data: book,
  });
};
