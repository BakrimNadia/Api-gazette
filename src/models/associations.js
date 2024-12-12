import { User } from './user.model.js';
import { News } from './news.model.js';
import { Article } from './article.model.js';
import { Announcement } from './announcement.model.js';
import { Category } from './category.model.js';
import { sequelize } from '../database.js';

User.hasMany(News, {
    as: 'news',
    foreignKey: 'user_id',
});
  
News.belongsTo(User, {
    as: 'newsAuthor',
    foreignKey: 'user_id',
});
  
User.hasMany(Article, {
    as: 'articles',
    foreignKey: 'user_id',
});
  
Article.belongsTo(User, {
    as: 'articleAuthor',
    foreignKey: 'user_id',
});
  
User.hasMany(Announcement, {
    as: 'announcements',
    foreignKey: 'user_id',
});
  
Announcement.belongsTo(User, {
    as: 'announcementAuthor',
    foreignKey: 'user_id',
});

Category.hasMany(Announcement, {
    as: 'announcementCategory',
    foreignKey: 'category_id',
  });
  
Announcement.belongsTo(Category, {
    as: 'category',
    foreignKey: 'category_id',
  });

export { User, News, Article, Announcement, Category, sequelize };
