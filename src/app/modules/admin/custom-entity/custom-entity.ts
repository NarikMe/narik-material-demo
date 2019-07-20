export class CustomEntity {
  viewModelId: number;

  _lName: string;
  set lName(value: string) {
    this._lName = value;
  }
  get lName(): string {
    return this._lName;
  }

  _fName: string;
  set fName(value: string) {
    this._fName = value;
  }
  get fName(): string {
    return this._fName;
  }

  get fullName(): string {
    return `${this.fName || ""} ${this.lName || ""}`;
  }

  // TODO: https://github.com/Microsoft/TypeScript/issues/16858
  // TODO: http://choly.ca/post/typescript-json/
  toJSON() {
    return {
      lName: this.lName,
      fName: this.fName,
      viewModelId: this.viewModelId
    };
  }
}
