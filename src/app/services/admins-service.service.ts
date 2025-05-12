import { Injectable } from '@angular/core';
import { Admins } from '../model/admins';
import { admins } from '../objects/admins';

@Injectable({
  providedIn: 'root'
})
export class AdminsServiceService {

  private admins: Admins[] = admins;

  constructor() { }

  getAdmins(): Admins[]{
    return this.admins;
  }

  getAdminUsername(index: number): string{
    return this.admins[index].username;
  }

  getAdminImage(index: number): string{
    return this.admins[index].image;
  }
}
