import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }
  userArray = [];
  showDleteMessage: boolean;
  searchText: string ="";

  ngOnInit() {
    this.userService.getUser().subscribe(
      List => {
        this.userArray = List.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
      });
    }
    onDelete($key){
      if(confirm('Are you sure to delete this record?')){
        this.userService.deleteUser($key);
        this.showDleteMessage = true;
        setTimeout(()=> this.showDleteMessage = false, 3000);
      }
    }

    filterCondition(user){
      return user.firstName.toLowerCase().indexOf(this.searchText.toLocaleLowerCase()) !=-1;
     
    }
}
