const database = require("@models/database.js");

const Tasks = {
  async getAll() {
    const dbo = await database.getDbo();
    console.log("dbobject available");
    return await dbo.collection("Tasks").find().toArray();
  },

  async search(good) {
    const dbo = await database.getDbo();

    const { _id } = good;

    return await dbo
      .collection("Tasks")
      .find({ _id: new ObjectId(_id) })
      .toArray();
  },

  async create(good) {
    const dbo = await database.getDbo();

    delete good._id;
    delete good.id;

    return (await dbo.collection("Tasks").insertOne(good)).ops[0];
  },

  async update(good) {
    const dbo = await database.getDbo();

    const { _id } = good;

    delete good._id;
    delete good.id;

    return await dbo
      .collection("Tasks")
      .findOneAndUpdate(
        { _id: new ObjectId(_id) },
        { $set: good },
        { returnNewDocument: true }
      );
  },

  async delete(good) {
    const dbo = await database.getDbo();

    const { _id } = good;

    await dbo.collection("Tasks").deleteOne({ _id: _id });
    // await dbo.collection("Tasks").delete({ _id: _id });
  },
};

module.exports = Tasks;
