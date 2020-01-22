import { Notice } from './../Notice';
import { NoticeService } from './../notice.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.css']
})
export class NoticeListComponent implements OnInit {

  notices : Observable<Notice[]>;
  notice: Notice;

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {

    this.reloadData();
  }

  deleteNotice(){
    this.noticeService.deleteNotice(this.notice.id)
    .subscribe(
      data =>{
        console.log(data);
        this.reloadData();
      },
      error => console.log('ERROR: ' + error));
  }

  reloadData(){

    this.notices = this.noticeService.getNoticesList();
  }
}
