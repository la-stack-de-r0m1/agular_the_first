import { User } from "../models/User.model";
import { Subject } from 'rxjs-compat/Subject';

export class UserService {
    private users: User[] = [ 
        {
            firstName: 'rom',
            lastName: 'ain',
            email: 'rom@ain.fr',
            drinkPreference: 'pepsi',
            hobbies: [
                'coder',
                'la dégustation de café'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}