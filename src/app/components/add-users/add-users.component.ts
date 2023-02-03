import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit{

  userform: FormGroup
  titulo = "Crear usuario";
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _userService: UserService,
    private aRoute: ActivatedRoute) {
    this.userform = this.fb.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.edit();
  }

  adduser(){
    console.log(this.userform)
    console.log(this.userform.get('name')?.value)
    const USER: user ={
      name: this.userform.get('name')?.value,
      lastname: this.userform.get('lastname')?.value,
      username: this.userform.get('username')?.value,
      password: this.userform.get('password')?.value,
    }

    if(this.id !== null){
      this._userService.edituser(this.id, USER).subscribe(data =>{
        this.toastr.info('El usuario fue actualizado exitosamente', 'Usuario actualizado');
        this.router.navigate(["/listUsers"])
      }, error => {
        console.log(error);
        this.userform.reset();
      })
    } else{
      console.log(USER)
      this._userService.saveuser(USER).subscribe(data =>{
        this.toastr.success('El usuario fue registrado exitosamente', 'Usuario registrado');
        this.router.navigate(["/listUsers"])
      }, error => {
        console.log(error);
        this.userform.reset();
      })
    }
  }

  edit(){
    if (this.id !== null){
      this.titulo = "Editar usuario";
      this._userService.getuser(this.id).subscribe(data =>{
        this.userform.setValue({
          name: data.name,
          lastname: data.lastname,
          username: data.username,
          password: data.password,
        })
      })
    }
  }
}
