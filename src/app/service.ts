import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: 'l7oyz9l6ut8q',//CONFIG.space,
    accessToken: '51e57060ec78ef430fe4cb70e6d1d4270331dd2fe84332d53106a206c0c536b1'//CONFIG.accessToken
  });

  constructor() { }

  public getPregame(): Promise<Entry<any>> {
    return this.cdaClient.getEntry('4Ie7dfBNqwMkOGmCUcOMOg');
  }

  public getPostgame(): Promise<Entry<any>> {
    return this.cdaClient.getEntry('4Ie7dfBNqwMkOGmCUcOMOg');
  } 

  public getAsset(id: string) {
    return this.cdaClient.getEntry(id);
  }

  public getSections(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'section'
    }, query))
    .then(res => res.items);
  }

  public getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'section'//CONFIG.contentTypeIds.product
    }, query))
    .then(res => res.items);
  }
}


/*

const client = contentful.createClient({
  space: 'l7oyz9l6ut8q',
  accessToken: '51e57060ec78ef430fe4cb70e6d1d4270331dd2fe84332d53106a206c0c536b1'
})

client.getSpace()
.then((space) => console.log(space))
.catch(console.error)

*/
