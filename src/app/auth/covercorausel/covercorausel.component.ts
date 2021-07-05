import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covercorausel',
  templateUrl: './covercorausel.component.html',
  styleUrls: ['./covercorausel.component.scss']
})
export class CovercorauselComponent implements OnInit {
  user:any={};

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

}
