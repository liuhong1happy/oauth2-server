const UserModel = global.sequelize.import('./UserModel');
const FileModel = global.sequelize.import('./FileModel');

const ApplicationModel = global.sequelize.define('Application', {
    id: { type: Sequelize.BIGINT(11), primaryKey: true, autoIncrement: true, comment: '主键' },
    app_name: { type: Sequelize.STRING, allowNull: false, comment: '应用名称' },
    app_key: { type: Sequelize.STRING, allowNull: false, comment: '应用key' },
    app_home: { type: Sequelize.STRING, allowNull: false, comment: '应用网址' }, 
    app_icon_file_id: { type: Sequelize.BIGINT(11), allowNull: false, comment: '应用图标' },
    user_id: { type: Sequelize.BIGINT(11), allowNull: false, comment: '应用所有者' },
  }, {
    comment: "应用表",
    tableName: 'application',
    timestamps: true,
    underscored: true,
    paranoid: true,
    createdAt: 'create_dt',
    updatedAt: 'update_dt',
    deletedAt: 'is_del',
  });

  ApplicationModel.belongsTo(UserModel, {foreignKey: 'user_id', targetKey: 'id', as: 'User'})
  UserModel.hasMany(ApplicationModel, {foreignKey: 'user_id', sourceKey: 'id', as: 'Apps'})
  
  ApplicationModel.belongsTo(FileModel, {foreignKey: 'app_icon_file_id', targetKey: 'id', as: 'Icon'})
  FileModel.hasMany(ApplicationModel, {foreignKey: 'app_icon_file_id', sourceKey: 'id', as: 'Apps'})

  export default DeveloperModel;
  