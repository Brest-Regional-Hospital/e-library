import { Request, Response } from "express";
import { Publication } from "../models/publication";
import { Book } from "../models/book";

export const create = async (req: Request, res: Response): Promise<any> => {
  const { name, issueNumber, amountInStock, genre, author } = req.body;

  try {
    const existingPublication = await Publication.findOne({
      where: { issueNumber },
    });

    if (existingPublication) {
      return res
        .status(400)
        .json({ error: "Издание с таким номером уже существует." });
    }

    const publication = await Publication.create({
      name,
      issueNumber,
      amountInStock,
    });

    const book = await Book.create({
      publicationId: publication.get("id"),
      genre,
      author,
    });

    res.status(201).json({ publication, book });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Ошибка при добавлении книги." });
  }
};

export const update = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const { name, issueNumber, amountInStock, genre, author } = req.body;

  try {
    const publication = await Publication.findByPk(id);

    if (!publication) {
      return res.status(404).json({ error: "Публикация не найдена." });
    }

    if (issueNumber && issueNumber !== publication.get("issueNumber")) {
      const existing = await Publication.findOne({ where: { issueNumber } });
      if (existing) {
        return res
          .status(400)
          .json({ error: "Издание с таким номером уже существует." });
      }
    }

    publication.set("name", name ?? publication.get("name"));
    publication.set(
      "issueNumber",
      issueNumber ?? publication.get("issueNumber")
    );
    publication.set(
      "amountInStock",
      amountInStock ?? publication.get("amountInStock")
    );
    await publication.save();

    const book = await Book.findOne({
      where: { publicationId: publication.get("id") },
    });

    if (book) {
      book.set("genre", genre ?? book.get("genre"));
      book.set("author", author ?? book.get("author"));
      await book.save();
    }

    res.status(200).json({ publication, book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка при обновлении книги." });
  }
};
