module.exports = function (MODULES) {
    const fs = MODULES.FS;
    const path = MODULES.PATH;
    const Sequelize = MODULES.SEQUELIZE;
    const basename = path.basename(module.filename);
    const db = {};

    // let sequelize = new Sequelize(process.env.MYSQL_URL, {logging: true});
    const sequelize = new Sequelize(process.env.MYSQL_URL, { logging: console.log });

    fs.readdirSync(__dirname).filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    }).forEach(function (file) {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

    Object.keys(db).forEach(function (modelName) {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    return db;
};
