// const models = require('@models');
const models = require('../database/models');

const crud = {
    /**
     * find all row in a model
     *
     * @param {string} modelName name of the models
     */
    findAll: function (modelName) {
        return models[modelName].findAndCountAll();
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].findAndCountAll();
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * find one data with where condition
     *
     * @param {string} modelName name of the models
     * @param {object} opts where condition in object
     */
    findOneData: function (modelName, opts) {
        return models[modelName].findOne({ where: opts });
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].findOne({ where: opts });
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * find a record in database based on id
     * @param {string} modelName name of the models
     * @param {integer} id id of the wanted record
     */
    findById: function (modelName, id) {
        return models[modelName].findById(id);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].findById(id);
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * save a record to database
     * @param {string} modelName name of the models
     * @param {object} opts field of data to be saved
     */
    create: function (modelName, opts) {
        return models[modelName].create(opts);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = models[modelName].create(opts);
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * update a record based on record's id
     * @param {string} modelName name of the models
     * @param {integer} id id of the wanted record
     * @param {object} opts record's new data
     */
    updateData: function (modelName, id, opts) {
        const whereOpts = { where: { id: id } };
        return models[modelName].update(opts, whereOpts);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const whereOpts = { where: { id: id } };
        //         const docs = await models[modelName].update(opts, whereOpts);
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * update a record based on indicator
     * @param {string} modelName name of the models
     * @param {object} whereOpts where indicator
     * @param {object} opts record's new field
     */
    updateWithCustomOpts: function (modelName, whereOpts, opts) {
        return models[modelName].update(opts, { where: whereOpts, returning: true });
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].update(opts, { where: whereOpts, returning: true });
        //         return resolve({ affected_row: docs[0], data: docs[1] });
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * delete a record based on id
     * @param {string} modelName name of the models
     * @param {integer} id id of the selected record
     */
    destroy: function (modelName, id) {
        const whereOpts = { where: { id: id } };
        return models[modelName].destroy(whereOpts);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const whereOpts = { where: { id: id } };
        //         const docs = await models[modelName].destroy(whereOpts);
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * delete a record based on search indicator
     * @param {string} modelName name of the models
     * @param {object} opts where indicator
     */
    destroyOpts: function (modelName, opts) {
        const whereOpts = { where: opts };
        return models[modelName].destroy(whereOpts);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const whereOpts = { where: opts };
        //         const docs = await models[modelName].destroy(whereOpts);
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * find all record that match seach indicator
     * @param {string} modelName name of the models
     * @param {object} opts where indicator
     */
    findAllWithOpts: function (modelName, opts) {
        return models[modelName].findAll({ where: opts });
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].findAll({ where: opts });
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * find all records that match options
     * @param {string} modelName name of the models
     * @param {onject} opts object that contain where and other options
     */
    findAllOpts: function (modelName, opts) {
        return models[modelName].findAll(opts);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].findAll(opts);
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * find and count records that match option condition
     * @param {string} modelName name of the models
     * @param {object} opts object that contain where and other option
     */
    findAllWithCustomOpts: function (modelName, opts) {
        return models[modelName].findAndCountAll(opts);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].findAndCountAll(opts);
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     *
     * @param {string} modelName name of the models
     * @param {object} opts object that contain search option
     */
    findOneWithCustomOpts: function (modelName, opts) {
        return models[modelName].findOne(opts);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].findOne(opts);
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * find one record based on id with search option
     * @param {string} modelName name of the models
     * @param {object} opts object that contain search option
     */
    findOneWithCustomOptsCRUD: function (modelName, opts) {
        return models[modelName].findById(opts);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].findById(opts);
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    // sum: function (modelName, field, opts) {
    //     return new Promise(async function (resolve, reject) {
    //         try {
    //             const docs = await models[modelName].sum(field, { where: opts });
    //             return resolve(docs);
    //         } catch (error) {
    //             return reject(error);
    //         }
    //     });
    // },

    /**
     * count record that match where indicator
     * @param {string} modelName name of the models
     * @param {object} opts where indicator
     */
    count: function (modelName, opts) {
        return models[modelName].count({ where: opts });
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].count({ where: opts });
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * count all record that match options
     * @param {string} modelName name of the models
     * @param {object} opts object that contain seach option
     */
    countOpts: function (modelName, opts) {
        return models[modelName].count(opts);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].count(opts);
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     * insert many record to database
     * @param {string} modelName name of the models
     * @param {array} opts array of object that consist of record's field
     */
    insertBulk: function (modelName, opts) {
        return models[modelName].bulkCreate(opts);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelName].bulkCreate(opts);
        //         return resolve(docs);
        //     } catch (error) {
        //         return reject(error);
        //     }
        // });
    },

    /**
     *
     * @param {string} modelsName name of the models
     * @param {object} value object that contain data
     */
    upsertOne: function (modelsName, value) {
        return models[modelsName].upsert(value, { returning: true });
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelsName].upsert(value, { returning: true });
        //         return resolve(docs);
        //     } catch (err) {
        //         return reject(err);
        //     }
        // });
    },

    /**
     * find or create a row in database
     * @param {string} modelsName models name
     * @param {object} where where indicator
     * @param {object} value rest of the value
     */
    findOneOrCreate: function (modelsName, where, value) {
        const values = { ...where, ...value };
        return models[modelsName].create(values);
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         const docs = await models[modelsName].findOne({ where });
        //         if (!docs) {
        //             const values = { ...where, ...value };
        //             const doc = await models[modelsName].create(values);
        //             doc.create = true;
        //             return resolve(doc);
        //         }
        //         return resolve(docs);
        //         // const docs = await
        //         // const docs = await models[modelsName].findOrCreate({where: where, defaults: value})
        //         // return resolve(docs)
        //     } catch (err) {
        //         return reject(err);
        //     }
        // });
    }
};

module.exports = crud;
