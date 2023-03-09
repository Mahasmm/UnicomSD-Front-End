import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameBooth } from 'src/app/models/gameBooth.model';
import { GameBoothService } from 'src/app/services/game-booth.service';

@Component({
  selector: 'app-edit-game-booth',
  templateUrl: './edit-game-booth.component.html',
  styleUrls: ['./edit-game-booth.component.css']
})
export class EditGameBoothComponent implements OnInit {

  addGameBoothRequest: GameBooth = {
    id: '',
    name: '',
    specialFeatures: '',
    availability: true,
    image: '',
    pricePerHour: 0,
  }
  
  constructor(private gameBoothService: GameBoothService, private router: Router,private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
          if(id){
            this.gameBoothService.getGameBooth(id)
            .subscribe({
              next: (response)=>{
                this.addGameBoothRequest = response;
              }
            });
          }
        }
      })
  }

  updateGameBooth(){
    this.gameBoothService.updateGameBooth(this.addGameBoothRequest.id, this.addGameBoothRequest)
    .subscribe({
      next: (response: any) => {
        this.router.navigate([''])
      },
      error: (response: any) => {
        console.log(response);
      }
    })
  }
}
