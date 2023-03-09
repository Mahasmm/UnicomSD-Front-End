import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameBooth } from 'src/app/models/gameBooth.model';
import { GameBoothService } from 'src/app/services/game-booth.service';

@Component({
  selector: 'app-add-game-booth',
  templateUrl: './add-game-booth.component.html',
  styleUrls: ['./add-game-booth.component.css']
})
export class AddGameBoothComponent implements OnInit  {

  addGameBoothRequest: GameBooth = {
    id: '',
    name: '',
    specialFeatures: '',
    availability: true,
    image: '',
    pricePerHour: 0,
  }
  
  constructor(private gameBoothService: GameBoothService, private router: Router){

  }

  ngOnInit(): void {
      
  }

  addGameBooth(){
    this.gameBoothService.addGameBooth(this.addGameBoothRequest)
    .subscribe({
      next: (gameBooth) => {
        console.log(gameBooth);
        this.router.navigate([''])
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
}
