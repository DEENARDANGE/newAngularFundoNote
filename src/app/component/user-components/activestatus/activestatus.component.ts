import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/UserService/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activestatus',
  templateUrl: './activestatus.component.html',
  styleUrls: ['./activestatus.component.css']
})
@Component({ templateUrl: 'activestatus.component.html' })
export class ActivestatusComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean;
  snackBar: any;
  constructor(private route: ActivatedRoute, private Userservice: UserService,
              private formBuilder: FormBuilder ) { }


  public ngOnInit() {

  }

  public active() {
    this.submitted = true;
    this.Userservice.active().subscribe(() => {
         this.snackBar.open('successfully activated', 'Ok', {
             duration: 2000,
         });
        // this.route.navigate(['/login']);
     }, (error) => {
      this.snackBar.open('successfully activated', 'Ok', {
        duration: 2000,
         });

      console.log(error);
     });
  // this.user.active;  //  this.user.active();

    }

}
