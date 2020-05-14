class Work {
    constructor() {
        this.id = 1;
        console.log('Work.constructor', this.id);
    }

    static findAll() {
        console.log('Work.findAll');
        return [];
    }

    static findById(id) {
        console.log('Work.findById', id);
        return { id };
    }

    static updateById(id) {
        console.log('Work.updateById', id);
    }

    static deleteById(id) {
        console.log('Work.deleteById', id);
    }

    update() {
        Work.updateById(this.id);
    }

    delete() {
        Work.deleteById(this.id);
    }
}

module.exports = Work;