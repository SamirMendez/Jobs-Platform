import { Injectable } from '@angular/core';
import { RegisterModel, LoginModel } from '@providerModels/auth-models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Metodo publico para crear un usuario
  public async createUser(registerData: RegisterModel): Promise<any> {
    
  }
  // Metodo publico para crear un usuario
  // Metodo publico para iniciar la sesion de un usuario
  public async loginUser(loginData: LoginModel): Promise<any> {
    return await {status: true};
  }
  // Metodo publico para iniciar la sesion de un usuario
}
