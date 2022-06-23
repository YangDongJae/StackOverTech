export class TechImages {
  #techImages = [];

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#techImages = [
      "../img/express.png",
      "../img/mongoDB.png",
      "../img/node.png",
      "../img/react.png",
      "../img/vue.png",
    ];
  }

  #addEvent() {}
}
