export class Beer {
  id: string;
  name: string;
  description: string;
  image_url: string;
  public constructor(beerData) {
    this.id = beerData.id;
    this.name = beerData.name;
    this.description = beerData.description;
    this.image_url = beerData.image_url;
  }
}
