const UserModel = global.sequelize.import('./UserModel');
const ApplicationModel = global.sequelize.import('./ApplicationModel');

const CodeModel = global.sequelize.define('Code', {
    id: { type: Sequelize.BIGINT(11), primaryKey: true, autoIncrement: true, comment: '主键' },
    scope: { type: Sequelize.STRING, allowNull: false, comment: '请求域' },
    code: { type: Sequelize.STRING, allowNull: false, comment: '授权码' },
    redirect_url: { type: Sequelize.STRING, allowNull: false, comment: '授权回调地址' },
    user_id: { type: Sequelize.BIGINT(11), allowNull: false, comment: '用户表外键'},
    app_id: { type: Sequelize.BIGINT(11), allowNull: false, comment: '应用表外键'},
  }, {
    comment: "开发者表",
    timestamps: true,
    underscored: true,
    paranoid: true,
    createdAt: 'create_dt',
    updatedAt: 'update_dt',
    deletedAt: 'is_del',
  });

  CodeModel.belongsTo(UserModel, {foreignKey: 'user_id', targetKey: 'id', as: 'User'})
  UserModel.hasMany(CodeModel, {foreignKey: 'user_id', sourceKey: 'id', as: 'Codes'})
  
  CodeModel.belongsTo(ApplicationModel, {foreignKey: 'app_id', targetKey: 'id', as: 'Application'})
  ApplicationModel.hasMany(CodeModel, {foreignKey: 'app_id', sourceKey: 'id', as: 'Codes'})

  export default CodeModel;
