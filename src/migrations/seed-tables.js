import bcrypt from "bcrypt";
import "dotenv/config";
import { News, Article, Announcement, User } from "../models/associations.js";

console.log("Création des données...");


await News.create({
  picture: "https://www.image-heberg.fr/files/17295459192679549565.png",
  title: "Nouvelle salle de pause",
  subtitle: "Ouverture de la nouvelle salle de pause",
  author: "Léo jean",
  content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi ",
  date_publication: new Date("2024-05-21"),
});

await News.create({
    picture: "https://www.image-heberg.fr/files/17295457472603778875.png",
    title: "Salle d'entretien rénovée",
    subtitle: "Agrandissement et rafraîchissement",
    author: "Amal Nina",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/17295458873325899380.png",
    title: "Réunion le vendredi 15 octobre",
    subtitle: "Objet : nouveau fournisseur",
    author: "Ricardo Milo",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/1729545858805626359.jpg",
    title: "Concernant la photocopieuse",
    subtitle: "Evitons les pannes inutiles",
    author: "Rachel Dany",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/17295459404289769446.png",
    title: "Bonne nouvelle !",
    subtitle: "Notre CA est en croissance cette année",
    author: "Aly Keyna",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

await Article.create({
    picture: "https://www.image-heberg.fr/files/1730196167929234465.jpg",
    title: "Le télétravail, pour ou contre ?",
    subtitle: "Etes-vous pour ou contre ?",
    author: "Mila Rose",
    content: "Le télétravail est ce une bonne pratique ? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "https://www.image-heberg.fr/files/17301960894063031807.jpg",
    title: "Le Healthy food",
    subtitle: "Comment allier plaisir et santé ?",
    author: "Rachel Dany",
    content: "Comment allier plaisir et santé ? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "https://www.image-heberg.fr/files/17301961911725896866.jpg",
    title: "Prendre soin de nos animaux",
    subtitle: "Concilier travail et temps pour nos amis à 4 pattes",
    author: "Aly Keyna",
    content: "Concilier travail et temps pour nos amis à 4 pattes, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "https://www.image-heberg.fr/files/17301962054260666244.jpg",
    title: "Voiture électrique, why not ?",
    subtitle: "Les avantages et les inconvénients",
    author: "Amal Nina",
    content: "Les avantages et les inconvénients, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "https://www.image-heberg.fr/files/17301962193231270805.jpg",
    title: "architecture moderne",
    subtitle: "Les grandes villes se modernisent",
    author: "Léo Jean",
    content: "Les avantages et les inconvénients, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301962331951446868.jpg",
    title: "Vend appareil photo",
    subtitle: "Prix : 150€",
    author: "Mila Rose",
    content: "très bon état, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301962521578318831.jpg",
    title: "Vend machine à laver neuve",
    subtitle: "Prix : 200€",
    author: "Amal Nina",
    content: "good, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301962953249915003.jpg",
    title: "Vend vélo de ville",
    subtitle: "Prix : 100€",
    author: "Léo Jean",
    content: "Vélo en très bon état, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301963082394906590.jpg",
    title: "Propose covoiturage",
    subtitle: "Service",
    author: "Ricardo Milo",
    content: "tous les soirs, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301963213984578237.jpg",
    title: "Echange de congés en novembre",
    subtitle: "Service",
    author: "Aly Keyna",
    content: "une semaine en novembre, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
    date_publication: new Date("2024-05-21"),
  });

  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301963462030484220.jpg",
    title: "Vends sac de voyage",
    subtitle:  "Prix : 50€",
    author: "Rachel Dany",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
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
