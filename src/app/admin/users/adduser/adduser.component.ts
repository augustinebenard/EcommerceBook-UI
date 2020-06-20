import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  @Input()
  user: User

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.httpClientService.addUser(this.user).subscribe(
      (user) => {
        this.router.navigate(['admin', 'user']);
      }
    );
  }
  // user(user: any) {
  //   throw new Error("Method not implemented.");
  // }

}
