import User from "../models/user.model";

class UserService {
  async getAll() {
    const users = await User.findAll();
    return users;
  }

  async get(id: string): Promise<any> {
    const user = await User.findByPk(id);
    return user;
  }

  async save(user: any): Promise<any> {
    const exists = await User.findOne({
      where: {
        email: user.email,
      },
    });
    if (exists != null) {
      throw new Error(`user with email: ${user.email} already exists`);
    }
    const newUser = User.build(user);
    await newUser.save();
    return newUser;
  }

  async update(user: any) {
    const updateUser = await this.get(user.id);
    console.log("user:", updateUser);
    if (!updateUser) {
      throw new Error(`user id ${user.id} not exists`);
    }
    await updateUser.update(user);
  }

  async delete(id: string) {
    const user = await this.get(id);
    if (user !== null) {
      await user.destroy();
    } else {
      throw new Error(`user with id ${id} not exists`);
    }
  }
}

export default new UserService();
