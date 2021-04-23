import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class UserService {

    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }
    async create(email: string) {
        // Verificar se o usuario existe

        const userExists = await this.userRepository.findOne({
            email
        });
        // Se nao existir, salvar no DB
        if(userExists) {
            return userExists;
        }

        const user = this.userRepository.create({
            email
        });

        await this.userRepository.save(user);
        // Se existir, retornar User
        return user;
    }
}

export { UserService };