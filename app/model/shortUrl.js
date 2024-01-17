/*
 * @Author: Hong.Zhang
 * @Date: 2024-01-12 14:45:19
 * @Description:
 */
// 同controller，service一样，在app或者ctx中引用的名称，都是由文件名来确定的。
// 不同的是controller和service保持原命名，model会将首字母大写。
// 建议都是用cameral-case来对后端代码，文件进行统一命名。使用snake_case来对数据库表，数据库字段统一命名
module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;
  const ShortUrl = app.model.define(
    // 数据库表名的单数形式, 默认对应short_urls表
    "shortUrl",
    {
      // 字段可以都用camelCase，会自动对应数据库的snake_case，且不需要createAt和updatedAt，sequelize会自动帮忙创建
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      key: STRING(6),
      rawUrl: STRING(255),
    },
    {
      // 使用sequelize默认需要复数形式的表对应，即short_urls，如果不想遵照这个对应关系，使用tableName来自己指定
      // tableName: "your-table-name",
    }
  );
  return ShortUrl;
};
