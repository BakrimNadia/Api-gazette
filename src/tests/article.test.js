import { describe, it } from "mocha";
import { expect } from "chai";
import { Article } from "../models/article.model.js";
import { User } from "../models/user.model.js";
import { app } from '../app.js';
import { createServer } from "http";

const server = createServer(app);
const apiBaseUrl = `http://localhost:${process.env.PORT || 3001}/api/v1`;

// Tests des endpoints pour les articles
describe("Article endpoints", () => {
  describe("[GET] /article", () => {
    it("should return an empty array when no articles exist", async () => {
      const res = await fetch(`${apiBaseUrl}/article`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.length).to.equal(0);
    });

    it("should return all articles with authors", async () => {
      const user = await User.create({
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        password: "securepassword",
        role: "user"
      });
      await Article.create({
        title: "Breaking News",
        subtitle: "Latest Update",
        user_id: user.id,
        content: "Important article content",
        date_publication: new Date(),
      });

      const res = await fetch(`${apiBaseUrl}/article`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body[0].title).to.equal("Breaking News");
      expect(body[0].articleAuthor.firstname).to.equal("John");
    });
  });

  describe("[GET] /article/:id", () => {
    it("should return the requested article by ID", async () => {
      const user = await User.create({
        firstname: "Jane",
        lastname: "Smith",
        email: "jane.smith@example.com",
        password: "securepassword",
        role: "user"
      });
      const createdArticle = await Article.create({
        title: "Tech Article",
        subtitle: "Innovations",
        user_id: user.id,
        content: "Tech article content",
        date_publication: new Date(),
      });

      const res = await fetch(`${apiBaseUrl}/article/${createdArticle.id}`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.title).to.equal("Tech Article");
      expect(body.articleAuthor.firstname).to.equal("Jane");
    });

    it("should return 404 if article does not exist", async () => {
      const res = await fetch(`${apiBaseUrl}/article/999`);
      const body = await res.json();

      expect(res.status).to.equal(404);
      expect(body.error).to.equal("Article inconnu");
    });
  });

  describe("[POST] /article", () => {
    it("should create an article entry in the database", async () => {
      const user = await User.create({
        firstname: "Alice",
        lastname: "Brown",
        email: "alice.brown@example.com",
        password: "securepassword",
        role: "user"
      });
      const newArticle = {
        title: "Market Update",
        subtitle: "Stock Prices",
        user_id: user.id,
        content: "Market details",
        date_publication: new Date(),
      };

      const res = await fetch(`${apiBaseUrl}/article`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArticle),
      });
      const body = await res.json();

      expect(res.status).to.equal(201);
      expect(body.title).to.equal("Market Update");

      const dbArticle = await Article.findOne({ where: { title: "Market Update" } });
      expect(dbArticle.id).to.equal(body.id);
    });

    it("should reject requests missing required fields", async () => {
      const res = await fetch(`${apiBaseUrl}/article`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subtitle: "Missing Title" }),
      });
      const body = await res.json();

      expect(res.status).to.equal(400);
      expect(body.error).to.equal("Tous les champs sont obligatoires");
    });
  });

  describe("[PATCH] /article/:id", () => {
    it("should update an article by ID", async () => {
      const user = await User.create({
        firstname: "Michael",
        lastname: "Johnson",
        email: "michael.johnson@example.com",
        password: "securepassword",
        role: "user"
      });
      const article = await Article.create({
        title: "Old Title",
        subtitle: "Old Subtitle",
        user_id: user.id,
        content: "Old content",
        date_publication: new Date(),
      });

      const updatedArticle = {
        title: "Updated Title",
        subtitle: "Updated Subtitle",
        user_id: user.id,
        content: "Updated content",
        date_publication: new Date(),
      };

      const res = await fetch(`${apiBaseUrl}/article/${article.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedArticle),
      });
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.title).to.equal("Updated Title");
    });

    it("should return 404 if updating non-existing article", async () => {
      const res = await fetch(`${apiBaseUrl}/article/999`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Non-existing",
          subtitle: "Subtitle",
          user_id: 1,
          content: "Content",
          date_publication: new Date(),
        }),
      });
      const body = await res.json();

      expect(res.status).to.equal(404);
      expect(body.error).to.equal("Article inconnu");
    });
  });

  describe("[DELETE] /article/:id", () => {
    it("should delete an article by ID", async () => {
        const user = await User.create({
            firstname: "Jane",
            lastname: "Doe",
            email: "jane.doe@example.com",
            password: "securepassword",
            role: "user"
          });

      const article = await Article.create({
        title: "To Delete",
        subtitle: "Subtitle",
        user_id: user.id,
        content: "Content",
        date_publication: new Date(),
      });

      const res = await fetch(`${apiBaseUrl}/article/${article.id}`, {
        method: "DELETE",
      });
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.message).to.equal("Article supprimé avec succès");
    });

    it("should return 404 if article to delete does not exist", async () => {
      const res = await fetch(`${apiBaseUrl}/article/999`, {
        method: "DELETE",
      });
      const body = await res.json();

      expect(res.status).to.equal(404);
      expect(body.error).to.equal("Article inconnu");
    });
  });
});
