//This is class so when we do new MeUseCase() we have to pass the dependency of repo which is of type AuthRepository this authrepo contain several functions which is accessed by this.repo.me

import { AuthRepository } from "../domain/auth.repository";

export class MeUseCase {
    constructor(private repo: AuthRepository) { }
    execute() {
        return this.repo.me()
    }
}


//     constructor(private repo: AuthRepository) { } is equals to the code below
// export class MeUseCase {
//     private repo: AuthRepository;
//     constructor(repo: AuthRepository) {
//         this.repo = repo
//     }
// }

