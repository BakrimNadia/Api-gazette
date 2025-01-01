import { describe, it } from "mocha";
import { expect } from "chai";
import { Announcement } from "../models/announcement.model.js";
import { Category } from "../models/category.model.js";
import { app } from '../app.js';
import { createServer } from "http";

const server = createServer(app);
const apiBaseUrl = `http://localhost:${process.env.PORT || 3001}/api/v1`;

// Tests des endpoints pour les annonces
describe("Announcement endpoints", () => {
  describe("[GET] /announcement", () => {
    it("should return an empty array when no announcements exist", async () => {
      const res = await fetch(`${apiBaseUrl}/announcement`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.length).to.equal(0);
    });

    it("should return all announcements with categories", async () => {
      const category = await Category.create({
        name: "Cars",
      });

      await Announcement.create({
        title: "Car for Sale",
        price: 10000,
        author: "John Doe",
        content: "A great car!",
        date_publication: new Date(),
        category_id: category.id,
      });

      const res = await fetch(`${apiBaseUrl}/announcement`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body[0].title).to.equal("Car for Sale");
      expect(body[0].category.name).to.equal("Cars");
    });
  });

  describe("[GET] /announcement/:id", () => {
    it("should return the requested announcement by ID", async () => {
      const category = await Category.create({
        name: "Electronics",
      });

      const createdAnnouncement = await Announcement.create({
        title: "Laptop for Sale",
        price: 500,
        author: "Jane Doe",
        content: "Laptop description",
        date_publication: new Date(),
        category_id: category.id,
      });

      const res = await fetch(`${apiBaseUrl}/announcement/${createdAnnouncement.id}`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.title).to.equal("Laptop for Sale");
      expect(body.category.name).to.equal("Electronics");
    });

    it("should return 404 if announcement does not exist", async () => {
      const res = await fetch(`${apiBaseUrl}/announcement/999`);
      const body = await res.json();

      expect(res.status).to.equal(404);
      expect(body.error).to.equal("Annonce inconnue");
    });
  });

  describe("[POST] /announcement", () => {
    it("should create an announcement entry in the database", async () => {
      const category = await Category.create({
        name: "Furniture",
      });

      const newAnnouncement = {
        title: "Sofa for Sale",
        price: "200",
        author: "Alice Brown",
        content: "A comfortable sofa",
        date_publication: new Date(),
        category_id: category.id,
      };

      const res = await fetch(`${apiBaseUrl}/announcement`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAnnouncement),
      });
      const body = await res.json();

      expect(res.status).to.equal(201);
      expect(body.title).to.equal("Sofa for Sale");

      const dbAnnouncement = await Announcement.findOne({ where: { title: "Sofa for Sale" } });
      expect(dbAnnouncement.id).to.equal(body.id);
    });

    it("should reject requests missing required fields", async () => {
      const res = await fetch(`${apiBaseUrl}/announcement`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price: "Missing Price" }), 
      });
      const body = await res.json();

      expect(res.status).to.equal(400);
      expect(body.error).to.equal("Tous les champs sont obligatoires");
    });
  });

  describe("[PATCH] /announcement/:id", () => {
    it("should update an announcement by ID", async () => {
      const category = await Category.create({
        name: "Books",
      });

      const announcement = await Announcement.create({
        title: "Book for Sale",
        price: "10",
        author: "Jane Doe",
        content: "Interesting book",
        date_publication: new Date(),
        category_id: category.id,
      });

      const updatedAnnouncement = {
        title: "Updated Book for Sale",
        price: "12",
        author: "John Smith",
        content: "Updated book description",
        date_publication: new Date(),
        category_id: category.id,
      };

      const res = await fetch(`${apiBaseUrl}/announcement/${announcement.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAnnouncement),
      });
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.title).to.equal("Updated Book for Sale");
    });

    it("should return 404 if updating non-existing announcement", async () => {
      const res = await fetch(`${apiBaseUrl}/announcement/999`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Non-existing Announcement",
          price: "100",
          author: "Unknown",
          content: "Content",
          date_publication: new Date(),
          category_id: 1,
        }),
      });
      const body = await res.json();

      expect(res.status).to.equal(404);
      expect(body.error).to.equal("Annonce inconnue");
    });
  });

  describe("[DELETE] /announcement/:id", () => {
    it("should delete an announcement by ID", async () => {
      const category = await Category.create({
        name: "Real Estate",
      });

      const announcement = await Announcement.create({
        title: "House for Sale",
        price: "300000",
        author: "John Doe",
        content: "Beautiful house for sale",
        date_publication: new Date(),
        category_id: category.id,
      });

      const res = await fetch(`${apiBaseUrl}/announcement/${announcement.id}`, {
        method: "DELETE",
      });
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.message).to.equal("Annonce supprimée avec succès");
    });

    it("should return 404 if announcement to delete does not exist", async () => {
      const res = await fetch(`${apiBaseUrl}/announcement/999`, {
        method: "DELETE",
      });
      const body = await res.json();

      expect(res.status).to.equal(404);
      expect(body.error).to.equal("Annonce inconnue");
    });
  });
});
