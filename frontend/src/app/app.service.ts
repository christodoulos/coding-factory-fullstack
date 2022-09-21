import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private router: Router) {}

  navigate(to: string) {
    switch (to) {
      case '':
        this.router.navigate(['']);
        break;
      case 'Εγγραφή':
        this.router.navigate(['register']);
        break;
      case 'Είσοδος':
        this.router.navigate(['login']);
        break;
      default:
        break;
    }
  }
}
