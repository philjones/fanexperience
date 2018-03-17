import { Component, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContentfulService } from '../../app/service';

@Component({
  selector: 'page-post-game',
  templateUrl: 'post-game.html'
})
export class PostGamePage {
  @Output()
  public Entry;

  @Output()
  public Sections;

  constructor(public navCtrl: NavController, service: ContentfulService) {
    service.getPostgame().then(entry => {
      this.Entry = entry
    });

    service.getSections().then(sections => {
      console.log(sections);
      for(var i = 0; i < sections.length; i++)
      {
        console.log(sections[i].fields.category.fields.name);
        console.log(sections[i].fields.category.fields.name === 'After the Game');
      }
      this.Sections = sections.filter(s => s.fields.category.fields.name === 'After the Game');
    });
  }
  
}
