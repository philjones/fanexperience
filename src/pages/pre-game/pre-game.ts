import { Component, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContentfulService } from '../../app/service';

@Component({
  selector: 'page-pre-game',
  templateUrl: 'pre-game.html'
})
export class PreGamePage {
  @Output()
  public Entry;

  @Output()
  public Sections;

  constructor(public navCtrl: NavController, service: ContentfulService) {

    console.log("pre-game");
    service.getPregame().then(entry => {
      this.Entry = entry
      console.log(this.Entry);
    });

    service.getSections().then(sections => {
      console.log(sections);
      this.Sections = sections.filter(s => s.fields.category.fields.name == 'Pregame');
    });
  }
  
}
