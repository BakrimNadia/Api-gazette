import bcrypt from "bcryptjs";
import "dotenv/config";
import { News, Article, Announcement, User, Category } from "../models/associations.js";

console.log("Création des données...");

const password = "Az123456";
const nbOfSaltRounds = parseInt(process.env.NB_OF_SALT_ROUNDS) || 10;
const hashedPassword = await bcrypt.hash(password, nbOfSaltRounds);

// Création des utilisateurs

 const nadia = await User.create({
    avatar: "https://www.image-heberg.fr/files/1730816824593074177.png",
    email: "nadiabakrim06@gmail.com",
    lastname: "Bakrim",
    firstname: "Nadia",
    password: hashedPassword,
    role: "Admin",
    is_active: true,
  });

  const rachel = await User.create({
    avatar: "https://www.image-heberg.fr/files/17308168724247201270.png",
    email: "nadia_lina@hotmail.com",
    lastname: "Dany",
    firstname: "Rachel",
    password: hashedPassword,
    role: "Rédacteur",
    is_active: true,
  });
  const leo = await User.create({
    avatar: "https://www.image-heberg.fr/files/17314323393907223114.png",
    email: "jean-leo@hotmail.com",
    lastname: "Jean",
    firstname: "Léo",
    password: hashedPassword,
    role: "Rédacteur",
    is_active: true,
  });
  const keyna = await User.create({
    avatar: "https://www.image-heberg.fr/files/17314323393907223114.png",
    email: "aly-keyna@hotmail.com",
    lastname: "Aly",
    firstname: "Keyna",
    password: hashedPassword,
    role: "Rédacteur",
    is_active: true,
  });
  const milo = await User.create({
    avatar: "https://www.image-heberg.fr/files/17314323393907223114.png",
    email: "ricardo-milo@hotmail.com",
    lastname: "Ricardo",
    firstname: "Milo",
    password: hashedPassword,
    role: "Rédacteur",
    is_active: true,
  });


await News.create({
  picture: "https://www.image-heberg.fr/files/17314042252607362670.jpg",
  title: "Nouvelle salle de pause",
  subtitle: "Ouverture de la nouvelle salle de pause",
  user_id: leo.id,
  content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi ",
  date_publication: new Date("2024-05-21"),
});

await News.create({
    picture: "https://www.image-heberg.fr/files/17310595364089377106.jpg",
    title: "Salle d'entretien rénovée",
    subtitle: "Agrandissement et rafraîchissement",
    user_id: nadia.id,
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/17310592731520636150.jpg",
    title: "Réunion le vendredi 15 octobre",
    subtitle: "Objet : nouveau fournisseur",
    user_id: milo.id,
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/17314044972359921437.jpg",
    title: "Concernant la photocopieuse",
    subtitle: "Evitons les pannes inutiles",
    user_id: rachel.id,
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/17310597221303080975.jpg",
    title: "Bonne nouvelle !",
    subtitle: "Notre CA est en croissance cette année",
    user_id: keyna.id,
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

await Article.create({
    picture: "https://www.image-heberg.fr/files/1730196167929234465.jpg",
    title: "Le télétravail, pour ou contre ?",
    subtitle: "Etes-vous pour ou contre ?",
    user_id: nadia.id,
    content: "Le télétravail est ce une bonne pratique ? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "https://www.image-heberg.fr/files/17301960894063031807.jpg",
    title: "Le Healthy food",
    subtitle: "Comment allier plaisir et santé ?",
    user_id: rachel.id,
    content: "Comment allier plaisir et santé ? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "https://www.image-heberg.fr/files/17301961911725896866.jpg",
    title: "Prendre soin de nos animaux",
    subtitle: "Avoir un animal est-ce compliqué ?",
    user_id: milo.id,
    content: "Concilier travail et temps pour nos amis à 4 pattes, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "https://www.image-heberg.fr/files/17301962054260666244.jpg",
    title: "Voiture électrique, why not ?",
    subtitle: "Les avantages et les inconvénients",
    user_id: keyna.id,
    content: "Les avantages et les inconvénients, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await Article.create({
    picture: "https://www.image-heberg.fr/files/17301962193231270805.jpg",
    title: "architecture moderne",
    subtitle: "Les grandes villes se modernisent",
    user_id: leo.id,
    content: "Les avantages et les inconvénients, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

await Category.create({
    name: "Ameublement",
  });

  const Eléctronique = await Category.create({
    name: "Eléctronique",
  });

  const Eléctroménager = await Category.create({
    name: "Eléctroménager",
  });

 await Category.create({
    name: "Décoration",
  });

  const Sport_loisirs = await Category.create({
    name: "Sport-loisirs",
  });

 await Category.create({
    name: "Vehicules",
  });

  const Service = await Category.create({
    name: "Service",
  });

  const Accessoires_bagagerie = await Category.create({
    name: "Accessoires-bagagerie",
  });

  await Category.create({
    name: "Vêtements",
  });

  await Category.create({
    name: "Chaussures",
  });

  await Category.create({
    name: "Autres",
  });


  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301962331951446868.jpg",
    title: "Vend appareil photo",
    price: "150€",
    author: "Mila Rose",
    content: "très bon état, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
    date_publication: new Date("2024-05-21"),
    category_id:Eléctronique.id,
  });

  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301962521578318831.jpg",
    title: "Vend machine à laver neuve",
    price: "200€",
    author: "Amal Nina",
    content: "good, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
    date_publication: new Date("2024-05-21"),
    category_id:Eléctroménager.id,
  });

  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301962953249915003.jpg",
    title: "Vend vélo de ville",
    price: "100€",
    author: "Léo Jean",
    content: "Vélo en très bon état, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
    date_publication: new Date("2024-05-21"),
    category_id:Sport_loisirs.id,
  });

  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301963082394906590.jpg",
    title: "Propose covoiturage",
    price: "Service",
    author: "Ricardo Milo",
    content: "tous les soirs, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
    date_publication: new Date("2024-05-21"),
    category_id:Service.id,
  });

  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301963213984578237.jpg",
    title: "Echange de congés aout",
    price: "Service",
    author: "Aly Keyna",
    content: "une semaine en novembre, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
    date_publication: new Date("2024-05-21"),
    category_id:Service.id,
  });

  await Announcement.create({
    picture: "https://www.image-heberg.fr/files/17301963462030484220.jpg",
    title: "Vends sac de voyage",
    price:  "50€",
    author: "Rachel Dany",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus",
    date_publication: new Date("2024-05-21"),
    category_id:Accessoires_bagagerie.id,
  });
