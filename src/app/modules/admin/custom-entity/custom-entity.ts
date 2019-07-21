import { AdaptClass } from "data-adapter";
import { AdaptMethods } from "narik-common";
import { Contains, Length, IsEmail } from "class-validator";

@AdaptClass({
  name: AdaptMethods.PropertyNames
})
export class CustomEntity {
  viewModelId: number;

  _lName: string;

  @Length(10, 20)
  @IsEmail()
  set lName(value: string) {
    this._lName = value;
  }
  get lName(): string {
    return this._lName;
  }

  _fName: string;

  @Contains("hello")
  set fName(value: string) {
    this._fName = value;
  }
  get fName(): string {
    return this._fName;
  }

  get fullName(): string {
    return `${this.fName || ""} ${this.lName || ""}`;
  }
}
