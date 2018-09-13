import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss']
})
export class AuthorizedComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const fragments = this.route.snapshot.fragment.split('&');
    const accessToken = fragments[0].split('=');

    sessionStorage.setItem('access-token', accessToken[1]);

    setTimeout(() => {
      this.router.navigate(['search']);
    }, 3000);
  }
}
