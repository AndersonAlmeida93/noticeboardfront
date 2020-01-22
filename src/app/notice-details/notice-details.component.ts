import { NoticeListComponent } from './../notice-list/notice-list.component';
import { Notice } from './../Notice';
import { NoticeService } from './../notice.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'notice-details',
  templateUrl: './notice-details.component.html',
  styleUrls: ['./notice-details.component.css']
})
export class NoticeDetailsComponent implements OnInit {

  @Input() notice : Notice;

  constructor(private noticeService: NoticeService, private listComponent: NoticeListComponent) { }

  ngOnInit() {
  }

  deleteNotice(){

    this.noticeService.deleteNotice(this.notice.id)
    .subscribe(
      data =>{
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error));
  }

}
