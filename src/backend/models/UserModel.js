import FileModel from './FileModel';

const UserModel = global.sequelize.define('User', {
  id: { type: Sequelize.BIGINT(11), primaryKey: true, autoIncrement: true, comment: '主键' }, 
  username: { type: Sequelize.STRING, allowNull: false, comment: '用户名称' }, 
  email: { type: Sequelize.STRING, allowNull: false, comment: '邮件' }, 
  password: { type: Sequelize.STRING, allowNull: false, comment: '密码' },  
  age: { type: Sequelize.INTEGER, allowNull: false, comment: '年龄' },
  gender: { type: Sequelize.INTEGER, allowNull: false, comment: '性别' },
  is_active: { type: Sequelize.BOOLEAN, allowNull: false, comment: '是否激活', defaultValue: false },
  avatar_file_id: { type: Sequelize.BIGINT(11), allowNull: true, comment: '用户头像' },
  token: { type: Sequelize.STRING, allowNull: false, comment: '激活令牌' },
}, {
  comment: "用户表",
  tableName: 'user',
  timestamps: true,
  underscored: true,
  paranoid: true,
  createdAt: 'create_dt',
  updatedAt: 'update_dt',
  deletedAt: 'is_del',
});

UserModel.belongsTo(FileModel, {foreignKey: 'avatar_file_id', targetKey: 'id', as: 'Avatar'})
FileModel.hasMany(UserModel, {foreignKey: 'avatar_file_id', sourceKey: 'id', as: 'Users'})

export default UserModel;
