import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  mensajes: any;

  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit(): void {
    this.mensajes = this.dataSvc.getData();
    // .subscribe(
    //   (post:any) => {
    //     this.mensajes = post; 
    //   }
    // );
  }

  escuchaClick(id: any){
    console.log('Click en:', id );
    
  }

}
