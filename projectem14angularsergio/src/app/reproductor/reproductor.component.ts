import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css','../app.component.css']
})
export class ReproductorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  audio= function(nomaudio){
    console.log(nomaudio);
     document.getElementById('audio').setAttribute('src','http://localhost:3000/'+nomaudio);
  }
}
