import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateService } from '../../services/update.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.css']
})
export class TeamUpdateComponent implements OnInit {

  add_TeamForm: FormGroup; 
  
  constructor(private router : Router, 
    private formBuilder : FormBuilder,private addservice : UpdateService, 
    private route:ActivatedRoute ) { }

  ngOnInit() {
    console.log("dfghb");

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);


    this.add_TeamForm = this.formBuilder.group({ 
      team:['',Validators.required], 
      revenue:['',Validators.required] 
      
      }); 
     
  }

  if(id){
    console.log("edit");}
  else() {
      console.log("add");
    }

  add(data) //Function to check log in credentials 
  { 
    console.log(this.add_TeamForm.get('team').value);
  if(this.add_TeamForm.controls.team.valid && this.add_TeamForm.controls.revenue.valid) 
  { 
    console.log(this.add_TeamForm.get('team').value);
  let data = {team_name: this.add_TeamForm.controls.team.value, amount: this.add_TeamForm.controls.revenue.value}; 
  console.log(data); 
  this.addservice.addTeam(data).subscribe(response => { 
  console.log(response); 
  if(response && response.status==200){ 
    console.log("add-success");
   //require( "nativescript-localstorage" );
  //  localStorage.setItem('accessToken',response.body.access_token); 
  //  console.log(localStorage.getItem('accessToken'));
  //this.Route.navigate(['/private/teams']);
  } 
  }); 
   
  } 
  
  else{ 
  console.log("something went wrong in login service"); 
  } 

  }
}
