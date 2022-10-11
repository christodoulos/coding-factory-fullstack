import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  UserRegistrationForm,
  UserLoginForm,
  LoginSuccess,
  UserCategoryCreateForm,
  UserCategory,
  UserCategoryDeleteForm,
  UserCategoryUpdateForm,
  DepartmentCreateForm,
  Department,
} from 'interfaces';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppService } from './app.service';

const helper = new JwtHelperService();

const API = 'http://localhost:5000';
const USER_API = `${API}/user/api`;
const USER_CATEGORY_API = `${API}/user/category`;
const DEPARTMENT_API = `${API}/department`;

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private service: AppService
  ) {
    console.log('In Backend service');
  }

  registerUser(user: UserRegistrationForm) {
    this.http.post(`${USER_API}/register`, user).subscribe({
      next: (data) => {
        console.log(data);
        this.service.successModal(
          'Η εγγραφή σας ήταν επιτυχής. Μπορείτε να πραγματοποιήσετε διαδικασία εισόδου με το όνομα χρήστη και το μυστικό κωδικό σας.'
        );
        this.router.navigate(['login']);
      },
      error: (e) => {
        const error = e.error.message;
        this.service.errorModal(error);
      },
    });
  }

  loginUser(user: UserLoginForm) {
    this.http.post<LoginSuccess>(`${USER_API}/login`, user).subscribe({
      next: (data) => {
        localStorage.setItem('access_token', data.access_token);
        this.service.isLoggedIn$.next(true);
        if (this.service.isAdmin()) {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['user']);
        }
      },
      error: (e) => {
        const error = e.error.message;
        this.service.errorModal(error);
      },
    });
  }

  // User Category Endpoints

  createUserCategory(data: UserCategoryCreateForm) {
    this.http.post<UserCategory>(USER_CATEGORY_API, data).subscribe({
      next: (data) => {
        this.service.successModal(`Η νέα κατηγορία ${data.name} δημιουργήθηκε`);
        this.router.navigate(['admin', 'category', 'list']);
      },
      error: (e) => {
        const error = e.error.message;
        this.service.errorModal(error);
      },
    });
  }

  getUserCategories() {
    this.http.get<UserCategory[]>(USER_CATEGORY_API).subscribe((data) => {
      this.service.userCategories$.next(data);
    });
  }

  deleteUserCategory(data: UserCategoryDeleteForm) {
    this.http
      .delete<UserCategory>(`${USER_CATEGORY_API}/${data.id}`)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.service.successModal(
            `Η  κατηγορία με κωδικό ${data._id.$oid} και όνομα ${data.name} διαγράφηκε`
          );
          this.router.navigate(['admin', 'category', 'list']);
        },
        error: (e) => {
          const error = e.error.message;
          this.service.errorModal(error);
        },
      });
  }

  updateUserCategory(data: UserCategoryUpdateForm) {
    this.http.patch<UserCategory>(USER_CATEGORY_API, data).subscribe({
      next: (data) => {
        console.log(data);
        this.service.successModal(
          `Επιτυχής επεξεργασία κατηγορίας με κωδικό ${data._id.$oid} και όνομα ${data.name}`
        );
        this.router.navigate(['admin', 'category', 'list']);
      },
      error: (e) => {
        const error = e.error.message;
        this.service.errorModal(error);
      },
    });
  }

  // Department Endpoints

  createDepartment(data: DepartmentCreateForm) {
    this.http.post<Department>(DEPARTMENT_API, data).subscribe({
      next: (data) => {
        this.service.successModal(`Η νέα Διεύθυνση ${data.name} δημιουργήθηκε`);
        this.router.navigate(['admin', 'department', 'list']);
      },
      error: (e) => {
        const error = e.error.message;
        this.service.errorModal(error);
      },
    });
  }

  getDepartments() {
    this.http.get<Department[]>(DEPARTMENT_API).subscribe({
      next: (data) => {
        console.log(data);
        this.service.departments$.next(data);
      },
    });
  }

  getDepartment(id: string) {
    this.http.get<Department>(`${DEPARTMENT_API}/${id}`).subscribe({
      next: (data) => {
        this.service.department$.next(data);
      },
    });
  }

  updateDepartment(data: DepartmentCreateForm) {
    this.http.patch<Department>(DEPARTMENT_API, data).subscribe({
      next: (data) => {
        console.log(data);
        this.service.successModal(
          `Επιτυχής επεξεργασία της διεύθυνσης "${data.name}"`
        );
        this.router.navigate(['admin', 'department', 'list']);
      },
      error: (e) => {
        console.log(e);
        const error = e.error.message;
        this.service.errorModal(error);
      },
    });
  }
}
