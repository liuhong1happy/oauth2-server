import DeveloperModel from './DeveloperModel';
import FileModel from './FileModel';

const ApplicationModel = global.sequelize.define('application', {
    id: { type: Sequelize.BIGINT(11), primaryKey: true, autoIncrement: true, comment: '主键' },
    app_name: { type: Sequelize.STRING, allowNull: false, comment: '应用名称' },
    app_key: { type: Sequelize.STRING, allowNull: false, comment: '应用key' },
    app_home: { type: Sequelize.STRING, allowNull: false, comment: '应用网址' }, 
    app_icon_file_id: { type: Sequelize.BIGINT(11), allowNull: true, comment: '应用图标' },
    developer_id: { type: Sequelize.BIGINT(11), allowNull: false, comment: '应用所有者' },
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

  ApplicationModel.belongsTo(DeveloperModel, {foreignKey: 'developer_id', targetKey: 'id', as: 'Developer'})
  DeveloperModel.hasMany(ApplicationModel, {foreignKey: 'developer_id', sourceKey: 'id', as: 'Apps'})
  
  ApplicationModel.belongsTo(FileModel, {foreignKey: 'app_icon_file_id', targetKey: 'id', as: 'Icon'})
  FileModel.hasMany(ApplicationModel, {foreignKey: 'app_icon_file_id', sourceKey: 'id', as: 'Apps'})

  export default ApplicationModel;
  