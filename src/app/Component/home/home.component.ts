import { Component,OnInit } from '@angular/core';
import { booking } from 'src/app/models/booking.model';
import { GameBooth } from 'src/app/models/gameBooth.model';
import { BookingService } from 'src/app/services/booking.service';
import { GameBoothService } from 'src/app/services/game-booth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gameBooths: GameBooth[] = [];
  timerValue: number = 0;
  timeBool: boolean = false;
  stopBool: boolean = false;
  intervalId:any;
  sec:number = 1000;
  bname: string = "";
  bid: string = "";
  value: number = 0;
  seconds : number = 0;
  minutes: number = 0;
  hours: number = 0;


  addBookingRequest: booking = {
    id: '',
    boothName: '',
    customerName: '',
    hours: 0
  }

  constructor(private bookingService: BookingService, private gameBoothService: GameBoothService  ){

  }

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

  startTimer() {
    this.timeBool = true;
    this.timerValue = this.addBookingRequest.hours*60*60;
    
      this.intervalId =  setInterval(() => {
      this.timerValue--;
      let totalMinutes = Math.floor(this.timerValue/60)
      this.seconds = this.timerValue % 60;
      this.hours = Math.floor(totalMinutes / 60);
      this.minutes = totalMinutes % 60;
      if(this.hours==0 && this.minutes==0 && this.seconds==0){
        this.endTimer();
      }
    }, this.sec);
    if(this.stopBool){
      clearInterval(this.intervalId);
    }
    
  }


  endTimer(){
    this.timerValue = 0;
    this.stopBool = true;
    this.timeBool = false; 
  }

  BoothName(booth:any){
    this.bname = booth.name;
    this.bid = booth.id;
    this.value = booth.pricePerHour;
    console.log(this.bid);
    
  }

  addBooking(){
    this.value = this.value * this.addBookingRequest.hours;
    this.bookingService.addBooking(this.addBookingRequest)
    .subscribe({
      next: (booking) => {
        console.log(booking);
        // this.router.navigate(['game-booth'])
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
}
