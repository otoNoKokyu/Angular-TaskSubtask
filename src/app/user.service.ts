import { Injectable } from '@angular/core';
import { slug } from "cuid"

export interface User {
  id: string,
  name: {
    firstName: string,
    lastName: string
  },
  email: string,
  country: string,
  phone: number,
  password: string
}

export interface loginForm {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  Users: User[] = []

  addUser(user: User) {
    const id = slug()
    this.Users.push({id,...user})
  }
  getUsers(): User[] {
    return this.Users
  }
  isLoggedIn(cred: loginForm): Boolean{
    const {email,password} = cred
    const loggedIn = this.Users.find(e => e.email === email && e.password === password)
    if(loggedIn) return true
    else return false
  }
  findUserById(id: string): User {
    const UsersArr = this.Users.find(e => e.id === id)
    return UsersArr[0]

  }
}

