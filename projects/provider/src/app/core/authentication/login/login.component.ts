import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginModel, RegisterModel } from '@providerModels/auth-models';
import { SnackModels } from '@providerModels/ui-models';
import { AuthenticationService } from '@providerServices/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   // Formulario para el login
   loginForm: FormGroup;
   // Formulario para el login
  // Variables para el SnackBar
  hPosition: MatSnackBarHorizontalPosition = 'end';
  vPosition: MatSnackBarVerticalPosition = 'top';
  // Variables para el SnackBar

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private ngSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    // Inicializando formulario
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
    });
    // Inicializando formulario
  }
  // Funcion para navegar en el proyecto
  goToRegister(): void {

  }
  // Funcion para navegar en el proyecto
  // Funcion para iniciar la sesion de un usuario
  loginUser(): void {
    const $name: string = this.loginForm.value.name;
    const $email: string = this.loginForm.value.email;
    const $password: string = this.loginForm.value.password;
    const loginData: LoginModel = {
      email: $email,
      password: $password,
    };
    this.authService.loginUser(loginData).then((response: any) => {
      const snackData: SnackModels = {
        message: '',
        class: '',
        duration: 0,
      };
      if (response.status === true) {
        snackData.class = 'successSnack';
        snackData.message = 'Bienvenido 😊😊😊';
        snackData.duration = 3000;
        this.showToast(snackData);
      } else {
        const error = response.error.code;
        switch (error) {
          case 'auth/invalid-email':
            snackData.class = 'errorSnack';
            snackData.message = 'Dirección de correo invalida 😥😣😫',
            snackData.duration = 5000;
            this.showToast(snackData);
            break;
          case 'auth/email-already-in-use':
            snackData.class = 'errorSnack';
            snackData.message = 'La direccion de correo especificada esta vinculada a otra cuenta 😥😣😫',
            snackData.duration = 5000;
            this.showToast(snackData);
            break;
          case 'auth/operation-not-allowed':
            snackData.class = 'errorSnack';
            snackData.message = 'La operacion de registro ha sido deshabilitada 😥😣😫',
            snackData.duration = 5000;
            this.showToast(snackData);
            break;
          case 'auth/weak-password':
            snackData.class = 'errorSnack';
            snackData.message = 'Contraseña débil 😥😣😫',
            snackData.duration = 5000;
            this.showToast(snackData);
            break;
        }
      }
    });
  }
  // Funcion para iniciar la sesion de un usuario
  // Funcion para mostrar el toast
  showToast(snackData: SnackModels): void {
    const snackToShow = this.ngSnackBar.open(
      `${snackData.message}`, '', {
        horizontalPosition: this.hPosition,
        verticalPosition: this.vPosition,
        duration: 5000,
        panelClass: [`${snackData.class}`]
    });
    snackToShow.afterDismissed().subscribe(() => {
      if (snackData.class === 'successSnack') {
        this.router.navigate(['/dashboard'], {replaceUrl: true});
      } else {}
    });
  }
  // Funcion para mostrar el toast
}
