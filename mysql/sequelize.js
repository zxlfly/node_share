// 以操作对象的形式操作数据库
(async () => {
    const Sequelize = require('sequelize')
    // 建立连接
    const sequelize = new Sequelize('mydb', 'root', '941109', {
        host: 'localhost',
        dialect: 'mysql',
        // 兼容性处理
        // 仍可通过传入 operators map 至 operatorsAliases 的方式来使用字符串运算符，但会返回弃用警告
        operatorsAliases: false
    })
    // 定义模型
    const Fruit = sequelize.define('Ftuit', {
        // 默认id可以不配置会有默认的自增id
        // 但是很多时候我们需要uuid
        id: { 
            type: Sequelize.DataTypes.UUID, 
            defaultValue: Sequelize.DataTypes.UUIDV1, primaryKey: true 
        },
        name: {
            type: Sequelize.STRING(20), allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        stock: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        // 不要时间戳
        timestamps: false,
        // 设置表名,不设置会有默认值Ftuits
        tableName:'TBL_FRUIT'
    })
    // 同步数据库，force: true则会删除已存在表
    let ret = await Fruit.sync()
    // 插入
    ret = await Fruit.create({
        name: '香蕉',
        price: 2.5
    })
    // 更新 
    await Fruit.update(
        { price: 4 },
        { where: { name: '香蕉' } }
    )
    // 操作符
    const Op = Sequelize.Op
    // 查询
    ret = await Fruit.findAll({
        where: {
            price: { [Op.lt]: 4, [Op.gt]: 2 }
        }
    })
    console.log('findAll', JSON.stringify(ret, '', '\t'))
})()