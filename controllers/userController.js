const UserRepository = require('../repositories/userRepositories');
const UserModel = require('../models/user');

async function getUsers(req, res) {
    const userRepository = new UserRepository(UserModel);
    const userList = await userRepository.findAll();
    res.status(200).send({userList});
}

async function createUser(req, res) {
    try {
        const { name } = req.body;
        if (!name) throw new Error(`Name field is not available`);
        const userRepository = new UserRepository(UserModel);
        const newUser = await userRepository.create({name});
        
        res.status(201).send({
            newUserId: newUser._id
        });
    } catch (error) {
        res.status(500).send({
            error: error.message
        });
    }
}


async function deleteUser(req, res) {
    try {
        const userId = req.params.userId;
        if (!userId) throw new Error(`userId field is not available`);
        const userRepository = new UserRepository(UserModel);
        await userRepository.delete({_id: userId});
        
        res.status(201).send({
            message: `Successfully deleted user`
        });
    } catch (error) {
        res.status(500).send({
            error: error.message
        });
    }
}
module.exports = {
    getUsers,
    createUser,
    deleteUser
}