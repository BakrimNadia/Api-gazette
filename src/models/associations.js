import { User } from './user.model.js';
import { News } from './news.model.js';
import { Article } from './article.model.js';
import { Announcement } from './announcement.model.js';
import { sequelize } from '../database.js';

User.hasMany(News, {
    as: 'news',
    foreignKey: 'id_user',
});
  
News.belongsTo(User, {
    as: 'newsAuthor',
    foreignKey: 'id_user',
});
  
User.hasMany(Article, {
    as: 'articles',
    foreignKey: 'id_user',
});
  
Article.belongsTo(User, {
    as: 'articleAuthor',
    foreignKey: 'id_user',
});
  
User.hasMany(Announcement, {
    as: 'announcements',
    foreignKey: 'id_user',
});
  
Announcement.belongsTo(User, {
    as: 'announcementAuthor',
    foreignKey: 'id_user',
});

export { User, News, Article, Announcement, sequelize };
