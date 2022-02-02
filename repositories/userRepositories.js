const mongoose = require('mongoose');
class UserRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return this.model.create(data);
    }

    async findAll() {
        return this.model.find({});
    }

    async delete(query) {
        return this.model.deleteOne(query);
    }
}

module.exports = UserRepository;