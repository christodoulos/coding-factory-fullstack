import { Component, OnInit } from '@angular/core';
import { UserRegistrationForm } from 'interfaces';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
})
export class UserRegistrationComponent implements OnInit {
  // userCategories = [
  //   { key: '62f9d1cfa56d23f1d37029b3', value: 'Ειδικό Διδακτικό Προσωπικο' },
  //   { key: '62f9d1f5a56d23f1d37029b4', value: 'Μόνιμος Διοικητικός Υπάλληλος' },
  //   {
  //     key: '62f9d202a56d23f1d37029b5',
  //     value: 'Συμβασιούχος Διοικητικός Υπάλληλος',
  //   },
  //   {
  //     key: '62f9d9946ea43cb3b8860e07',
  //     value: 'Διδακτικό Ερευνητικό Προσωπικό',
  //   },
  //   { key: '62f9db288fcc961fefb4b517', value: 'Ειδικό Διδακτικό Προσωπικο' },
  //   { key: '62f9d1cfa56d23f1d37029b3', value: 'Λέκτορας' },
  //   { key: '62f9dc388fcc961fefb4b518', value: 'Αναπληρωτής Καθηγητής' },
  //   { key: '62f9de268fcc961fefb4b51c', value: 'Φύλακας' },
  //   { key: '62f9ed60709b3c94686a5a09', value: 'Ωρομίσθιος Υπάλληλος' },
  // ];
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
  constructor(private backend: BackendService, private service: AppService) {}

  ngOnInit(): void {}

  onUserRegistration(userRegistration: UserRegistrationForm) {
    console.log(userRegistration);
    this.backend.registerUser(userRegistration);
  }
}
