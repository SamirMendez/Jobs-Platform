import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@providerServices/authentication/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }
  // Funcion para cerrar la sesion del usuario
  logOut(): void {
    this.authService.logOut().then((response: any) => {

    });
  }
  // Funcion para cerrar la sesion del usuario
  // Funciones para navegar
  goToJobs(): void {
    this.router.navigate(['/dashboard/jobs']);
  }
  goToCategories(): void {
    this.router.navigate(['/dashboard/categories']);
  }
  // Funciones para navegar
}
