import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  content = `Weclome to Arbora Nova, your NEW HOME

  Small but experience we are the corporation to help you feel the family like enviroment you NEED in order to face the steep learning curve of EvE: Online
  Arbora Nova is recruiting players who want to learn and play the game in a way that noone will push them around, Arbora Nova currently is located at Null Sec following the alliance Reckless Contingency, and looking into claiming areas at Null Sec. If you are interested in all of that, feel free to contact us here Discord Link 2 and in our in game Channel {ABNA.} Recruit
  
  New Bro Submission Form
  
  Multinational, we would take all players who are interested in a fresh start of the game
  
  Alpha, Omega, New, Old, Rookie, Vet, all accepted and appreciated.
  
  With us you can find,
  
  1)Buyback programs
  2)Corp OPs for all players and playstyles
  3)Solid and not pushy New bro guidance
  4)Fleet operations for all styles
  5)Null Sec home
  6)Infrastructure for your needs
  
  Honor and Serve,
  Command Team`;
  constructor() { 
    this.content = this.content.split("\n").join("<br/>")
  }

  ngOnInit(): void {
  }

}
