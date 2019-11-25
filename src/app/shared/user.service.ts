import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private firebase: AngularFireDatabase) {}
  userList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('',[Validators.required, Validators.maxLength(30)]),
    email: new FormControl('',[Validators.email, Validators.required])
  });

  getUser(){
    this.userList = this.firebase.list('users');
    return this.userList.snapshotChanges();
  }

  insertUser( user ){
    this.userList.push({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  }

  populateForm(user){
    this.form.setValue(user);
  }

  updateUser(user){
    this.userList.update(user.$key,
      {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
      }
      );
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }

}
