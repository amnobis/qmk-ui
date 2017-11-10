class K {
  constructor(size) {
    this.size = size;
  }

  toString() {
    return `Size: ${this.size}`
  }
}

const layout = [
  [new K(1),    new K(1),    new K(1),    new K(1),    new K(1),    new K(1),    new K(1), new K(1), new K(1), new K(1), new K(1), new K(1),    new K(1),    new K(1),   new K(1), new K(1)],
  [new K(1.5),  new K(1),    new K(1),    new K(1),    new K(1),    new K(1),    new K(1), new K(1), new K(1), new K(1), new K(1), new K(1),    new K(1),    new K(1.5), new K(1)],
  [new K(1.75), new K(1),    new K(1),    new K(1),    new K(1),    new K(1),    new K(1), new K(1), new K(1), new K(1), new K(1), new K(1),    new K(2.25), new K(1)],
  [new K(2.25), new K(1),    new K(1),    new K(1),    new K(1),    new K(1),    new K(1), new K(1), new K(1), new K(1), new K(1), new K(1.75), new K(1),    new K(1)],
  [new K(1.25), new K(1.25), new K(1.25), new K(2.75), new K(1.25), new K(2.25), new K(1), new K(1), new K(1), new K(1), new K(1), new K(1)]
];

export default layout;