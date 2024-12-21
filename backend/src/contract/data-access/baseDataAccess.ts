
class BaseDataAccess {
    model: any
    public constructor(model: any) {
        this.model = model;
    }
    public async create(data: any) {
        const { id } = data
        const isExist = await this.findOne({ id: id });
        if (isExist) {
            await this.model.updateOne({ id: id }, data);
            return isExist;
        }
        const newData = new this.model(data);
        const result = await newData.save();
        return result;
    }
    public async find(filter: any) {
        const result = await this.model.find(filter);
        return result;
    }
    public async findOne(filter: any) {
        const result = await this.model.findOne(filter);
        return result;
    }
    public async update(filter: any, data: any) {
        const result = await this.model.updateOne(filter, data);
        return result;
    }
    public async delete(filter: any) {
        const result = await this.model.deleteOne(filter);
        return result;
    }
}

export default BaseDataAccess;