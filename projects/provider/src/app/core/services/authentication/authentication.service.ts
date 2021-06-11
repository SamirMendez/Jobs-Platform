import { Injectable } from '@angular/core';
import { RegisterModel } from '@providerModels/auth-models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Metodo publico para crear un usuario
  public async createUser(registerData: RegisterModel): Promise<any> {
    
  }
  // Metodo publico para crear un usuario
}
