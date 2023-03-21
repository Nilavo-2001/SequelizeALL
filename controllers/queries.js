const { defaults } = require('pg');
const { User, sequelize, Sequelize } = require('../models');


module.exports.create = async function (req, res) {
    let data = req.body;
    let user = await User.create(data);
    return res.status(200).json(user);
}

module.exports.createWithAttributes = async function (req, res) {
    let data = req.body;
    let user = await User.create(data, { fields: ['firstName'] });
    return res.status(200).json(user);
}

module.exports.showFirst = async function (req, res) {
    let data = await User.findAll({ attributes: [['firstName', 'Name']] });
    return res.status(200).json(data);
}

module.exports.showCount = async function (req, res) {
    let data = await User.findAll(
        {
            attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'total users']]
        });
    return res.status(200).json(data);
}

module.exports.excludeLastName = async function (req, res) {
    let data = await User.findAll(
        {
            attributes: {
                exclude: ['lastName']
            }
        });
    return res.status(200).json(data);
}

module.exports.firstTwo = async function (req, res) {
    let data = await User.findAll(
        {
            where: {
                id: {
                    [Sequelize.Op.lte]: 2
                }
            }
        });
    return res.status(200).json(data);
}

module.exports.orderByAge = async function (req, res) {
    let data = await User.findAll(
        {
            order: ['age']
        });
    return res.status(200).json(data);
}

module.exports.getUser = async function (req, res) {
    const { firstName } = req.body;
    let user = await User.findOrCreate({
        where: { firstName: firstName },
        defaults: {
            age: 10
        }
    });

    return res.status(200).json(user);
}