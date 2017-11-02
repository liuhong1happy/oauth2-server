const FileModel = global.sequelize.define('File', {
    id: { type: Sequelize.BIGINT(11), primaryKey: true, autoIncrement: true, comment: '主键' },
    name: { type: Sequelize.STRING, allowNull: false, comment: '文件名称' },
    md5: { type: Sequelize.STRING, allowNull: false, comment: '文件哈希值' },
    size: { type: Sequelize.BIGINT(11), allowNull: false, comment: '文件大小' },
    width: { type: Sequelize.BIGINT(11), allowNull: false, comment: '图片或视频宽度'},
    height: { type: Sequelize.BIGINT(11), allowNull: false, comment: '图片或视频高度'},
  }, {
    comment: "文件表",
    tableName: 'file',
    timestamps: true,
    underscored: true,
    paranoid: true,
    tableName: 'file',
    createdAt: 'create_dt',
    updatedAt: 'update_dt',
    deletedAt: 'is_del',
    getterMethods: {
        url() {
          return 'http://o9sa2vijj.bkt.clouddn.com/' + this.md5
        }
    },
  });

  export default FileModel;
  