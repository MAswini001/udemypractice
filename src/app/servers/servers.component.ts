import { Component, OnInit } from '@angular/core';


@Component({
  //selector: '[app-servers]',
  selector:'./app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowuser=false;
   servercreationstatus='the server was not created';
    servername='test';
    servercreate=false;
    servers=['test','test2']


  constructor() { 
    setTimeout(() =>{
      this.allowuser =true;
    },2000)
  }

  ngOnInit(): void {
  }

  createserver(){
    this.servercreate=true;
    this.servers.push(this.servername);
    this.servercreationstatus='server was created   ' + this.servername;
  }
  updateservername(event:Event){
     //console.log(event);
     this.servername=(<HTMLInputElement>event.target).value;
  }

}
