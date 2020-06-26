import { Role } from './role';

export class User {
    username: string;
    password: string;
    role: Role;
    enabled: boolean;
    constructor(username:string,password:string,role:Role){
        this.username=username;
        this.password=password;
        this.role=role;
        this.enabled=false;
    }
}
