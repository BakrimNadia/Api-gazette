import * as chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../app.js";
import { News } from "../models/news.model.js";
import { User } from "../models/user.model.js";
import faker from "faker";

const { expect } = chai;
chai.use(chaiHttp);

let testUser;
let testNews;

describe("News Controller", () => {

  // Créer un utilisateur et une news avant chaque test
  beforeEach(async () => {
    testUser = await User.create({
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      password: "password123",
      role: "user",
    });

    testNews = await News.create({
      title: "News de Test",
      subtitle: "Sous-titre test",
      content: "Contenu d'article de test",
      user_id: testUser.id,
      date_publication: new Date(),
    });
  });

  // ======= TESTS =======

  // 1. Test pour récupérer toutes les news
  describe("GET /news", () => {
    it("devrait retourner toutes les news", (done) => {
      chai
        .request(app)
        .get("/news")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          expect(res.body.length).to.be.greaterThan(0);
          done();
        });
    });
  });

  // 2. Test pour récupérer une news par ID
  describe("GET /news/:id", () => {
    it("devrait retourner une news avec un ID valide", (done) => {
      chai
        .request(app)
        .get(`/news/${testNews.id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("title", "News de Test");
          done();
        });
    });

    it("devrait retourner une erreur 404 pour un ID inexistant", (done) => {
      chai
        .request(app)
        .get("/news/99999")
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property("error", "Note d'information inconnue");
          done();
        });
    });
  });

  // 3. Test pour ajouter une nouvelle news
  describe("POST /news", () => {
    it("devrait créer une nouvelle news", (done) => {
      chai
        .request(app)
        .post("/news")
        .send({
          title: "Nouvelle News",
          subtitle: "Sous-titre",
          content: "Contenu de la news",
          user_id: testUser.id,
          date_publication: new Date(),
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("title", "Nouvelle News");
          done();
        });
    });

    it("devrait retourner une erreur 400 si un champ est manquant", (done) => {
      chai
        .request(app)
        .post("/news")
        .send({
          title: "",
          subtitle: "",
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property("error", "Tous les champs sont obligatoires");
          done();
        });
    });
  });

  // 4. Test pour mettre à jour une news
  describe("PUT /news/:id", () => {
    it("devrait mettre à jour une news existante", (done) => {
      chai
        .request(app)
        .put(`/news/${testNews.id}`)
        .send({
          title: "News Mise à Jour",
          subtitle: "Nouveau Sous-titre",
          content: "Contenu mis à jour",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("title", "News Mise à Jour");
          done();
        });
    });

    it("devrait retourner une erreur 404 si la news n'existe pas", (done) => {
      chai
        .request(app)
        .put("/news/99999")
        .send({
          title: "Non-existant",
        })
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property("error", "Note d'information inconnue");
          done();
        });
    });
  });

  // 5. Test pour supprimer une news
  describe("DELETE /news/:id", () => {
    it("devrait supprimer une news", (done) => {
      chai
        .request(app)
        .delete(`/news/${testNews.id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("message", "Note d'information supprimée avec succès");
          done();
        });
    });

    it("devrait retourner une erreur 404 si l'ID est inconnu", (done) => {
      chai
        .request(app)
        .delete("/news/99999")
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property("error", "Note d'information inconnue");
          done();
        });
    });
  });
});
