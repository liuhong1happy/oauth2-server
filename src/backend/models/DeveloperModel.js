const FileModel = global.sequelize.import('./FileModel');

const DeveloperModel = global.sequelize.define('Developer', {
    id: { type: Sequelize.BIGINT(11), primaryKey: true, autoIncrement: true, comment: '主键' }, 
    userMame: { type: Sequelize.STRING, allowNull: false, comment: '用户名称' }, 
    email: { type: Sequelize.STRING, allowNull: false, comment: '邮件' }, 
    password: { type: Sequelize.STRING, allowNull: false, comment: '密码' },
    isActive: { type: Sequelize.BOOLEAN, allowNull: false, comment: '是否激活', defaultValue: false },
    avatarFileId: { type: Sequelize.BIGINT(11), allowNull: true, comment: '用户头像' },
    token: { type: Sequelize.STRING, allowNull: false, comment: '激活令牌' },
  }, {
    comment: "开发者表",
    timestamps: true,
    underscored: true,
    paranoid: true,
    createdAt: 'create_dt',
    updatedAt: 'update_dt',
    deletedAt: 'is_del',
  });

  UserModel.belongsTo(FileModel, {foreignKey: 'avatarFileId', targetKey: 'id', as: 'Avatar'})
  FileModel.hasMany(UserModel, {foreignKey: 'avatarFileId', sourceKey: 'id', as: 'Developers'})
  
  DeveloperModel.sync({
    force: true
  }).then(() => {
    return DeveloperModel.create({
      userName: "liuhong1happy",
      email: "liuhong1.happy@163.com",
      password: '123456',
      avatarFileId: null,
      token: '123456',
      isActive: true,
    });
  })
  
  export default DeveloperModel;
  