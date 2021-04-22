import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class UserService {
    async create(email: string) {
        const userRepository = getCustomRepository(UserRepository);
        // Verificar se o usuario existe

        const userExists = await userRepository.findOne({
            email
        });
        // Se nao existir, salvar no DB
        if(userExists) {
            return userExists;
        }

        const user = userRepository.create({
            email
        });

        await userRepository.save(user);
        // Se existir, retornar User
        return user;
    }
}

export { UserService };