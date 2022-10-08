import { Component } from '@angular/core';
import { UserRegistrationForm } from 'interfaces';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
})
export class UserRegistrationComponent {
  userCategories$ = this.service.userCategories$.pipe(
    map((data) =>
      data.map(
        (item) =>
          <{ key: string; value: string }>{
            key: item._id.$oid,
            value: item.name,
          }
      )
    )
  );
  constructor(private backend: BackendService, private service: AppService) {
    this.backend.getUserCategories();
  }

  onUserRegistration(userRegistration: UserRegistrationForm) {
    console.log(userRegistration);
    this.backend.registerUser(userRegistration);
  }
}
