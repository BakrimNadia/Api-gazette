import { describe, it } from "mocha";
import { expect } from "chai";
import { News } from "../models/news.model.js";
import { User } from "../models/user.model.js";
import { app } from '../app.js';
import { createServer } from "http";

const server = createServer(app);
const apiBaseUrl = `http://localhost:${process.env.PORT || 3001}/api/v1`;

// Tests des endpoints pour les news
describe("News endpoints", () => {
  describe("[GET] /news", () => {
    it("should return an empty array when no news exists", async () => {
      const res = await fetch(`${apiBaseUrl}/news`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.length).to.equal(0);
    });

    it("should return all news with authors", async () => {
      const user = await User.create({
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        password: "securepassword",
        role: "user"
      });
      await News.create({
        title: "Breaking News",
        subtitle: "Latest Update",
        user_id: user.id,
        content: "Some important content",
        date_publication: new Date(),
      });

      const res = await fetch(`${apiBaseUrl}/news`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body[0].title).to.equal("Breaking News");
      expect(body[0].newsAuthor.firstname).to.equal("John");
    });
  });

  describe("[GET] /news/:id", () => {
    it("should return the requested news by ID", async () => {
      const user = await User.create({
        firstname: "Jane",
        lastname: "Smith",
        email: "jane.smith@example.com",
        password: "securepassword",
        role: "user"
      });
      const createdNews = await News.create({
        title: "Tech News",
        subtitle: "Innovations",
        user_id: user.id,
        content: "Some tech content",
        date_publication: new Date(),
      });

      const res = await fetch(`${apiBaseUrl}/news/${createdNews.id}`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.title).to.equal("Tech News");
      expect(body.newsAuthor.firstname).to.equal("Jane");
    });

    it("should return 404 if news does not exist", async () => {
      const res = await fetch(`${apiBaseUrl}/news/999`);
      const body = await res.json();

      expect(res.status).to.equal(404);
      expect(body.error).to.equal("Note d'information inconnue");
    });
  });

  describe("[POST] /news", () => {
    it("should create a news entry in the database", async () => {
      const user = await User.create({
        firstname: "Alice",
        lastname: "Brown",
        email: "alice.brown@example.com",
        password: "securepassword",
        role: "user"
      });
      const newNews = {
        title: "Market Update",
        subtitle: "Stock Prices",
        user_id: user.id,
        content: "Market details",
        date_publication: new Date(),
      };

      const res = await fetch(`${apiBaseUrl}/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNews),
      });
      const body = await res.json();

      expect(res.status).to.equal(201);
      expect(body.title).to.equal("Market Update");

      const dbNews = await News.findOne({ where: { title: "Market Update" } });
      expect(dbNews.id).to.equal(body.id);
    });

    it("should reject requests missing required fields", async () => {
      const res = await fetch(`${apiBaseUrl}/news`, {
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

  describe("[DELETE] /news/:id", () => {
    it("should delete the requested news by ID", async () => {
      const user = await User.create({
        firstname: "Jane",
        lastname: "Doe",
        email: "jane.doe@example.com",
        password: "securepassword",
        role: "user"
      });
    
      // Créer une news en associant l'utilisateur
      const news = await News.create({
        title: "Tech Update",
        subtitle: "Latest Tech News",
        user_id: user.id,
        content: "Some tech content",
        date_publication: new Date(),
      });

      const res = await fetch(`${apiBaseUrl}/news/${news.id}`, {
        method: "DELETE",
      });
        const body = await res.json();
        
              expect(res.status).to.equal(200);
              expect(body.message).to.equal("News supprimée avec succès");
            });
        
            it("should return 404 if news to delete does not exist", async () => {
              const res = await fetch(`${apiBaseUrl}/news/999`, {
                method: "DELETE",
              });
              const body = await res.json();
        
              expect(res.status).to.equal(404);
              expect(body.error).to.equal("News inconnue");
            });
      });
});
