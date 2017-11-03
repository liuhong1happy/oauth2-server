import FileModel from './FileModel';

const DeveloperModel = global.sequelize.define('Developer', {
    id: { type: Sequelize.BIGINT(11), primaryKey: true, autoIncrement: true, comment: '主键' }, 
    username: { type: Sequelize.STRING, allowNull: false, comment: '用户名称' }, 
    email: { type: Sequelize.STRING, allowNull: false, comment: '邮件' }, 
    password: { type: Sequelize.STRING, allowNull: false, comment: '密码' },
    is_active: { type: Sequelize.BOOLEAN, allowNull: false, comment: '是否激活', defaultValue: false },
    avatar_file_id: { type: Sequelize.BIGINT(11), allowNull: true, comment: '用户头像' },
    token: { type: Sequelize.STRING, allowNull: false, comment: '激活令牌' },
  }, {
    comment: "开发者表",
    tableName: 'developer',
    timestamps: true,
    underscored: true,
    paranoid: true,
    createdAt: 'create_dt',
    updatedAt: 'update_dt',
    deletedAt: 'is_del',
  });

  DeveloperModel.belongsTo(FileModel, {foreignKey: 'avatar_file_id', targetKey: 'id', as: 'Avatar'})
  FileModel.hasMany(DeveloperModel, {foreignKey: 'avatar_file_id', sourceKey: 'id', as: 'Developers'})
  
  export default DeveloperModel;
  