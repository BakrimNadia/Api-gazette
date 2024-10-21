import bcrypt from "bcrypt";
import "dotenv/config";
import { News, Article, Announcement, User } from "../models/associations.js";

console.log("Création des données...");

await News.create({
  picture: "https://www.image-heberg.fr/files/17295459192679549565.png",
  title: "Nouvelle salle de pause",
  subtitle: "Ouverture de la nouvelle salle de pause",
  author: "Léo jean",
  content: "Ouverture de la nouvelle salle de pause",
  date_publication: new Date("2024-05-21"),
});

await News.create({
    picture: "https://www.image-heberg.fr/files/17295457472603778875.png",
    title: "Salle d'entretien rénovée",
    subtitle: "Agrandissement et rafraîchissement",
    author: "Amal Nina",
    content: "Agrandissement et rafraîchissement",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/17295458873325899380.png",
    title: "Réunion le vendredi 15 octobre",
    subtitle: "Objet : nouveau fournisseur",
    author: "Ricardo Milo",
    content: "changement de fournisseur",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/1729545858805626359.jpg",
    title: "Concernant la photocopieuse",
    subtitle: "Evitons les pannes inutiles",
    author: "Rachel Dany",
    content: "Evitons les pannes inutiles",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/17295459404289769446.png",
    title: "Bonne nouvelle !",
    subtitle: "Notre CA est en croissance cette année",
    author: "Aly Keyna",
    content: "Notre CA est en croissance cette année",
    date_publication: new Date("2024-05-21"),
  });

await Article.create({
    picture: "images/code.jpeg",
    title: "Le télétravail, pour ou contre ?",
    subtitle: "Etes-vous pour ou contre ?",
    author: "Mila Rose",
    content: "Le télétravail est ce une bonne pratique ?",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "images/healthy.jpeg",
    title: "Le Healthy food",
    subtitle: "Comment allier plaisir et santé ?",
    author: "Rachel Dany",
    content: "Comment allier plaisir et santé ?",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "images/chat.jpeg",
    title: "Prendre soin de nos animaux",
    subtitle: "Concilier travail et temps pour nos amis à 4 pattes",
    author: "Aly Keyna",
    content: "Concilier travail et temps pour nos amis à 4 pattes",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "images/voiture-electrique.jpeg",
    title: "Voiture électrique, why not ?",
    subtitle: "Les avantages et les inconvénients",
    author: "Amal Nina",
    content: "Les avantages et les inconvénients",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "/images/building2.jpeg",
    title: "architecture moderne",
    subtitle: "Les grandes villes se modernisent",
    author: "Léo Jean",
    content: "Les avantages et les inconvénients",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "images/appareil-photo.jpeg",
    title: "Vend appareil photo",
    subtitle: "Prix : 150€",
    author: "Mila Rose",
    content: "très bon état",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "images/machine-a-laver.jpeg",
    title: "Vend machine à laver neuve",
    subtitle: "Prix : 200€",
    author: "Amal Nina",
    content: "good",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "images/velo.jpeg",
    title: "Vend vélo de ville",
    subtitle: "Prix : 100€",
    author: "Léo Jean",
    content: "Vélo en très bon état",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "images/covoiturage.jpeg",
    title: "Propose covoiturage",
    subtitle: "Service",
    author: "Ricardo Milo",
    content: "tous les soirs",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "/images/planning.jpeg",
    title: "Echange de congés en novembre",
    subtitle: "Service",
    author: "Aly Keyna",
    content: "une semaine en novembre",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "/images/sac.jpeg",
    title: "Vends sac de voyage",
    subtitle:  "Prix : 50€",
    author: "Rachel Dany",
    content: "tous les soirs",
    date_publication: new Date("2024-05-21"),
  });

const password = "Az123456";
const nbOfSaltRounds = parseInt(process.env.NB_OF_SALT_ROUNDS) || 10;
const hashedPassword = await bcrypt.hash(password, nbOfSaltRounds);

await User.create({
  avatar: "",
  email: "nadiabakrim06@gmail.com",
  lastname: "BAKRIM",
  firstname: "Nadia",
  password: hashedPassword,
  role: "Admin",
});

await User.create({
  avatar: "",
  email: "nadia_lina@hotmail.com",
  lastname: "BAK",
  firstname: "Nina",
  birthdate: new Date("1983-02-07"),
  password: hashedPassword,
  role: "Employee",

});
