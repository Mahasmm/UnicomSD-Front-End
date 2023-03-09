import { GameBoothService } from 'src/app/services/game-booth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameBooth } from 'src/app/models/gameBooth.model';

@Component({
  selector: 'app-view-game-booths',
  templateUrl: './view-game-booths.component.html',
  styleUrls: ['./view-game-booths.component.css']
})
export class ViewGameBoothsComponent implements OnInit {

  gameBooths: GameBooth[] = [];
  constructor(private gameBoothService: GameBoothService, private router:Router){}
  
  
  ngOnInit(): void {
    this.gameBoothService.getGameBooths()
      .subscribe({
        next: (gameBooths)=> {
          console.log(gameBooths);
          this.gameBooths = gameBooths;
          
        },
        error: (response)=> {
          console.log(response);
          
        }
      })
  }

  DeleteBooth(id:string){
    this.gameBoothService.deleteGameBooth(id)
    .subscribe({
      next: (response)=>{
        // this.router.navigate(['/employees']);
        let game = this.gameBooths.findIndex((response) => response.id === id);
        this.gameBooths.splice(game, 1);
      }
    })
  }
}
