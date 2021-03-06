import { User } from 'src/app/_models/user';
import { UserParams } from './../../_models/userParams';
import { Pagination } from './../../_models/pagination';
import { MembersService } from './../../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.sass']
})
export class MemberListComponent implements OnInit {

  members: Member[];
  pagination : Pagination;
  userParams : UserParams;
  user: User;
  genderList = [{value: 'male', display: 'Males'}, {value: 'female', display: 'Females'}]

  constructor(private memberService: MembersService) {
    this.userParams = this.memberService.getUserParams();
   }

  ngOnInit(): void {
    this.loadMembers();
  }

  resetFilters() {
    this.userParams = this.memberService.resetUserParams();
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.setUserParams(this.userParams);
    this.memberService.getMebers(this.userParams).subscribe( res => {
      this.members = res.result;
      this.pagination = res.pagination;
    })
  }

  pageChanged(event: any){
    console.log("ovo je event", event);
    console.log("ovo je event value", event.value);
    this.userParams.pageNumber = event.page;
    this.memberService.setUserParams(this.userParams);
    this.loadMembers();
  }
}
