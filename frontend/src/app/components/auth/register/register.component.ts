import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.initForm()
  }

  onRegister() {
    const date = new Date();
    const month = date.getMonth() < 10 ? '0' + parseInt(date.getMonth().toString() + 1) : date.getMonth() + 1;
    const userDetails = {
      'username': this.registerForm.value['registerName'],
      'password': this.registerForm.value['registerPassword'],
      'registrationDate': date.getFullYear() + '-' + month + '-' + date.getDate(),
      'recipes': [],
      'likedRecipes': []
    };
    this.userService.register(userDetails);
  }

  initForm() {
    this.registerForm = new FormGroup({
      'registerName': new FormControl(null, Validators.required),
      'registerPassword': new FormControl(null, Validators.required),
      'registerConfirmPassword': new FormControl(null, Validators.required)
    })
  }
}
