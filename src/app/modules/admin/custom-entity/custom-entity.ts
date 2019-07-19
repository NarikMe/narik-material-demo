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
    return (this.fName || "") + (this.lName || "");
  }
}
