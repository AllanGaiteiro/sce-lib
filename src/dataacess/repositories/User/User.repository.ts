import { UserEntity } from "../../../domain/entities/User/User.entity";

export class UserRepository {
  findById(id: string) {
    // Implemente o método findById aqui...
  }

  findAll() {
    // Implemente o método findAll aqui...
  }

  createUser(data: UserEntity) {
    // Implemente o método createUser aqui...
  }

  updateUser(id: string, data: UserEntity) {
    // Implemente o método updateUser aqui...
  }

  deleteUser(id: string) {
    // Implemente o método deleteUser aqui...
  }
}