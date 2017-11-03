import ApplicationModel from './ApplicationModel'
import UserModel from './UserModel';

const TokenModel = global.sequelize.define('Token', {
    id: { type: Sequelize.BIGINT(11), primaryKey: true, autoIncrement: true, comment: '主键' },
    access_token: { type: Sequelize.STRING, allowNull: false, comment: '访问令牌' },
    refresh_token: { type: Sequelize.STRING, allowNull: false, comment: '刷新令牌' },
    expires_in: { type: Sequelize.BIGINT(11), allowNull: false, comment: '过期时间' }, 
    scope: { type: Sequelize.STRING, allowNull: false, comment: '请求域' },
    code: { type: Sequelize.STRING, allowNull: false, comment: '授权码' },
    redirect_url: { type: Sequelize.STRING, allowNull: false, comment: '授权回调地址' },
    user_id: { type: Sequelize.BIGINT(11), allowNull: false, comment: '用户表外键'},
    app_id: { type: Sequelize.BIGINT(11), allowNull: false, comment: '应用表外键'},
  }, {
    comment: "令牌表",
    tableName: 'token',
    timestamps: true,
    underscored: true,
    paranoid: true,
    createdAt: 'create_dt',
    updatedAt: 'update_dt',
    deletedAt: 'is_del',
  });

  TokenModel.belongsTo(UserModel, {foreignKey: 'user_id', targetKey: 'id', as: 'User'})
  UserModel.hasMany(TokenModel, {foreignKey: 'user_id', sourceKey: 'id', as: 'Tokens'})
  
  TokenModel.belongsTo(ApplicationModel, {foreignKey: 'app_id', targetKey: 'id', as: 'Application'})
  ApplicationModel.hasMany(TokenModel, {foreignKey: 'app_id', sourceKey: 'id', as: 'Tokens'})
  
  export default TokenModel;
  