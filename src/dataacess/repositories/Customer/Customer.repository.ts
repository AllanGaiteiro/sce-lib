import { CustomerEntity } from "../../../domain/entities/Customer/Customer.entity";

export class CustomerRepository {
  findById(id: string) {
    // Implemente o método findById aqui...
  }

  findAll() {
    // Implemente o método findAll aqui...
  }

  createCustomer(data: CustomerEntity) {
    // Implemente o método createCustomer aqui...
  }

  updateCustomer(id: string, data: CustomerEntity) {
    // Implemente o método updateCustomer aqui...
  }

  deleteCustomer(id: string) {
    // Implemente o método deleteCustomer aqui...
  }
}