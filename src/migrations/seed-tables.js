import bcrypt from "bcrypt";
import "dotenv/config";
import { News, Article, Announcement, User } from "../models/associations.js";

console.log("Création des données...");

const password = "Az123456";
const nbOfSaltRounds = parseInt(process.env.NB_OF_SALT_ROUNDS) || 10;
const hashedPassword = await bcrypt.hash(password, nbOfSaltRounds);

// Création des utilisateurs

 await User.create({
    avatar: "https://www.image-heberg.fr/files/1730816824593074177.png",
    email: "nadiabakrim06@gmail.com",
    lastname: "Bakrim",
    firstname: "Nadia",
    password: hashedPassword,
    role: "Admin",
    is_active: true,
  }),
  await User.create({
    avatar: "https://www.image-heberg.fr/files/17308168724247201270.png",
    email: "nadia_lina@hotmail.com",
    lastname: "Dany",
    firstname: "Rachel",
    password: hashedPassword,
    role: "Employee",
    is_active: true,
  }),
  await User.create({
    avatar: "https://www.image-heberg.fr/files/17314323393907223114.png",
    email: "jean-leo@hotmail.com",
    lastname: "Jean",
    firstname: "Léo",
    password: hashedPassword,
    role: "Employee",
    is_active: true,
  }),
  await User.create({
    avatar: "https://www.image-heberg.fr/files/17314323393907223114.png",
    email: "aly-keyna@hotmail.com",
    lastname: "Aly",
    firstname: "Keyna",
    password: hashedPassword,
    role: "Employee",
    is_active: true,
  }),
  await User.create({
    avatar: "https://www.image-heberg.fr/files/17314323393907223114.png",
    email: "ricardo-milo@hotmail.com",
    lastname: "Ricardo",
    firstname: "Milo",
    password: hashedPassword,
    role: "Employee",
    is_active: true,
  })


async function getUserIdByName(firstname, lastname) {
  const user = await User.findOne({ where: { firstname, lastname } });
  return user ? user.id : null;
}

await News.create({
  picture: "https://www.image-heberg.fr/files/17314042252607362670.jpg",
  title: "Nouvelle salle de pause",
  subtitle: "Ouverture de la nouvelle salle de pause",
  user_id: await getUserIdByName("Léo", "Jean"),
  content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi ",
  date_publication: new Date("2024-05-21"),
});

await News.create({
    picture: "https://www.image-heberg.fr/files/17310595364089377106.jpg",
    title: "Salle d'entretien rénovée",
    subtitle: "Agrandissement et rafraîchissement",
    user_id: await getUserIdByName("Nadia", "Bakrim"),
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/17310592731520636150.jpg",
    title: "Réunion le vendredi 15 octobre",
    subtitle: "Objet : nouveau fournisseur",
    user_id: await getUserIdByName("Milo", "Ricardo"),
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/17314044972359921437.jpg",
    title: "Concernant la photocopieuse",
    subtitle: "Evitons les pannes inutiles",
    author: await getUserIdByName("Rachel", "Dany"),
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi quam numquam quidem, amet in voluptates. Optio enim odio aliquam error vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima inventore obcaecati cupiditate laborum alias est?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident aut, quidem voluptatibus inventore iusto officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, facilis neque perspiciatis ratione vero laudantium quo velit nisi",
    date_publication: new Date("2024-05-21"),
  });

  await News.create({
    picture: "https://www.image-heberg.fr/files/17310597221303080975.jpg",
    title: "Bonne nouvelle !",
    subtitle: "Notre CA est en croissance cette année",
    author: await getUserIdByName("Keyna", "Aly"),
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
    subtitle: "Avoir un animal est-ce compliqué ?",
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
