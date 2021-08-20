import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class MemberCardComponent implements OnInit {

  @Input() member: Member;

  constructor() { }

  ngOnInit(): void {
  }

  addLike(member: Member) {
    /*
    this.memberService.addLike(member.username).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs);
    })
    */
  }

}
