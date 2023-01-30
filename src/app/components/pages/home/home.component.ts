import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = []
  moments: Moment[] = []  
  baseApiUrl = environment.baseApiUrl

  // fazer o search
  faSearch = faSearch
  searchTerm: string = ''
  
  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })
      this.allMoments = data
      this.moments = data
    })
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement // sem isso o ts não deixa capturar o value
    const value = target.value.toLowerCase()

    this.moments = this.allMoments.filter((moment) => moment.title.toLowerCase().includes(value))
  }
}
