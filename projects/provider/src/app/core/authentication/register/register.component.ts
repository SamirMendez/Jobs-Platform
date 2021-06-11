import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterModel } from '@providerModels/auth-models';
import { SnackModels } from '@providerModels/ui-models';
import { AuthenticationService } from '@providerServices/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Formulario para el registro
  registerForm: FormGroup;
  // Formulario para el registro
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
    this.registerForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(35)
      ]],
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
  goToLogin(): void {

  }
  // Funcion para navegar en el proyecto
  // Funcion para crear un usuario
  createUser(): void {
    const $name: string = this.registerForm.value.name;
    const $email: string = this.registerForm.value.email;
    const $password: string = this.registerForm.value.password;
    const registerData: RegisterModel = {
      name: $name,
      email: $email,
      password: $password,
    };
    this.authService.createUser(registerData).then((response: any) => {
      const snackData: SnackModels = {
        message: '',
        class: '',
        duration: 0,
      };
      if (response.status === true) {
        snackData.class = 'successSnack';
        snackData.message = 'Registro exitoso 😊😊😊';
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
  // Funcion para crear un usuario
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
