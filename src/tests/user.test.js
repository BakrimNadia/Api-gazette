import { describe, it } from "mocha";
import { expect } from "chai";
import { app } from "../app.js";
import { User } from "../models/user.model.js";
import { createServer } from "http";

const server = createServer(app);
const apiBaseUrl = `http://localhost:${process.env.PORT || 3001}/api/v1`;

describe("User endpoints", () => {
  describe("[GET] /users", () => {
    it("should return an empty array when no users exist", async () => {
      const res = await fetch(`${apiBaseUrl}/users`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.length).to.equal(0);
    });

    it("should return all users", async () => {
      const user = await User.create({
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        password: "securepassword",
        role: "user",
      });

      const res = await fetch(`${apiBaseUrl}/users`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body[0].firstname).to.equal("John");
    });
  });

  describe("[GET] /users/:id", () => {
    it("should return the requested user by ID", async () => {
      const user = await User.create({
        firstname: "Jane",
        lastname: "Smith",
        email: "jane.smith@example.com",
        password: "securepassword",
        role: "user",
      });

      const res = await fetch(`${apiBaseUrl}/users/${user.id}`);
      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.firstname).to.equal("Jane");
    });

    it("should return 404 if user does not exist", async () => {
      const res = await fetch(`${apiBaseUrl}/users/999`);
      const body = await res.json();

      expect(res.status).to.equal(404);
      expect(body.error).to.equal("Utilisateur inconnu");
    });
  });

  describe("[PATCH] /users/:id", () => {
    it("should update a user by ID", async () => {
      const user = await User.create({
        firstname: "Michael",
        lastname: "Johnson",
        email: "michael.johnson@example.com",
        password: "securepassword",
        role: "user",
      });

      const updatedUser = {
        firstname: "Updated Michael",
        lastname: "Updated Johnson",
        email: "updated.michael@example.com",
        password: "newpassword",
        role: "admin",
        avatar: "new-avatar-url",
        is_active: true,
      };

      const res = await fetch(`${apiBaseUrl}/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.firstname).to.equal("Updated Michael");
      expect(body.email).to.equal("updated.michael@example.com");
    });

    it("should return 404 if user to update does not exist", async () => {
      const res = await fetch(`${apiBaseUrl}/users/999`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: "Non-existing",
          lastname: "User",
          email: "non.existing@example.com",
          password: "password",
          role: "user",
          avatar: "url",
          is_active: true,
        }),
      });
      const body = await res.json();

      expect(res.status).to.equal(404);
      expect(body.error).to.equal("Utilisateur non trouvé");
    });
  });


  describe("[PATCH] /user/delete", () => {
    it("should soft delete a user by email", async () => {
      const user = await User.create({
        firstname: "Sarah",
        lastname: "Connor",
        email: "sarah.connor@example.com",
        password: "securepassword",
        role: "user",
      });

      const res = await fetch(`${apiBaseUrl}/user/delete`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "sarah.connor@example.com" }),
      });

      const body = await res.json();

      expect(res.status).to.equal(200);
      expect(body.is_active).to.equal(false);
    });

    it("should return 404 if user email not found for soft delete", async () => {
      const res = await fetch(`${apiBaseUrl}/user/delete`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "nonexistent.user@example.com" }),
      });

      const body = await res.json();

      expect(res.status).to.equal(404);
      expect(body.error).to.equal("Utilisateur non trouvé");
    });
  });
});
