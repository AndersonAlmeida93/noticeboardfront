import { NoticeService } from './../notice.service';
import { Notice } from './../Notice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.css']
})
export class CreateNoticeComponent implements OnInit {

  notice: Notice = new Notice();
  submitted = false;

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {
  }

  newNotice() : void{

    this.submitted = false;
    this.notice = new Notice();
  }

  save(){

    this.noticeService.createNotice(this.notice)
    .subscribe(data => console.log(data), error => console.log(error));
    this.notice = new Notice();
  }

  onSubmit(){

    this.submitted = true;
    this.save;
  }

}
