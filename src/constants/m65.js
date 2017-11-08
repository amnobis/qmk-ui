layout = [
  [K(1),    K(1),    K(1),    K(1),    K(1),    K(1),    K(1), K(1), K(1), K(1), K(1), K(1),    K(1),    K(1),   K(1), K(1)],
  [K(1.5),  K(1),    K(1),    K(1),    K(1),    K(1),    K(1), K(1), K(1), K(1), K(1), K(1),    K(1),    K(1.5), K(1)],
  [K(1.75), K(1),    K(1),    K(1),    K(1),    K(1),    K(1), K(1), K(1), K(1), K(1), K(1),    K(2.25), K(1)],
  [K(2.25), K(1),    K(1),    K(1),    K(1),    K(1),    K(1), K(1), K(1), K(1), K(1), K(1.75), K(1),    K(1)],
  [K(1.25), K(1.25), K(1.25), K(2.75), K(1.25), K(2.25), K(1), K(1), K(1), K(1), K(1), K(1)]
];

class K {
  constructor(size, code) {
    this.size = size;
    this.code = code;
  }

  toString() {
    return `Size: ${this.size}, Code: ${this.code}`
  }
}