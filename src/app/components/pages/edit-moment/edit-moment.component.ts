import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessageService } from 'src/app/services/message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {
  moment!: Moment
  baseApiUrl = environment.baseApiUrl
  btnText: string = 'Editar'

  constructor(private momentService: MomentService, private activatedRoute: ActivatedRoute, private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"))

    this.momentService.getMoment(id).subscribe((item) => this.moment = item.data)
      
  }

  async editHandler(momentData: Moment) {
    const id = this.moment.id

    const formData = new FormData()

    formData.append('title', momentData.title)
    formData.append('description', momentData.description)

    if(momentData.image) {
      formData.append('image', momentData.image)
    }

    await this.momentService.updateMoment(id!, formData).subscribe()

    this.messageService.add(`Momento ${id} foi atualizado`)

    this.router.navigate(['/'])
  }

}
