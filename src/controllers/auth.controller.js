import emailValidator from "email-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { User } from "../models/user.model.js";

const authController = {
  register: async (req, res) => {
    const {
      avatar,
      email,
      lastname,
      firstname,
      password,
      confirmPassword,
      role,
    } = req.body;

    if (
      !email ||
      !lastname ||
      !firstname ||
      !birthdate ||
      !password ||
      !confirmPassword ||
      !role
    ) {
      console.log("Tous les champs sont obligatoires.");
      return res.status(400).send("Tous les champs sont obligatoires.");
    }

    if (password !== confirmPassword) {
      console.log("Le mot de passe et sa confirmation ne correspondent pas.");
      return res
        .status(400)
        .send("Le mot de passe et sa confirmation ne correspondent pas.");
    }

    if (!emailValidator.validate(email)) {
      console.log("Le format de l'email n'est pas valide.");
      return res.status(400).send("Le format de l'email n'est pas valide.");
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.log("Cet email est déjà utilisé.");
      return res.status(400).send("Cet email est déjà utilisé.");
    }

    const nbOfSaltRounds = parseInt(process.env.NB_OF_SALT_ROUNDS) || 10;
    const hashedPassword = await bcrypt.hash(password, nbOfSaltRounds);

    await User.create({
      avatar,
      email,
      lastname,
      firstname,
      password: hashedPassword,
      role,
    });

    res.status(200).json("succesfully create user");
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Tous les champs sont obligatoires.");
    }

    if (!emailValidator.validate(email)) {
      return res.status(400).send("Le format de l'email n'est pas valide.");
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).send("Mauvais couple email/mot de passe.");
    }

    const isMatching = bcrypt.compareSync(password, user.dataValues.password);

    if (!isMatching) {
      return res.status(400).send("Mauvais couple email/mot de passe.");
    }

    const tokenJWT = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    const loginData = {
      avatar: user.dataValues.avatar,
      lastname: user.dataValues.lastname,
      firstname: user.dataValues.firstname,
      role: user.dataValues.role,
      token: tokenJWT,
    };

    res.json(loginData);
  },
};

export default authController;