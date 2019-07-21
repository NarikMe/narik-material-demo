import { AdaptClass } from "data-adapter";
import { AdaptMethods } from "narik-common";
import { Contains, IsEmail } from "class-validator";

@AdaptClass({
  name: AdaptMethods.PropertyNames
})
export class ClassValidation {
  viewModelId: number;

  _email: string;

  @IsEmail()
  set email(value: string) {
    this._email = value;
  }
  get email(): string {
    return this._email;
  }

  _hello: string;

  @Contains("hello")
  set hello(value: string) {
    this._hello = value;
  }
  get hello(): string {
    return this._hello;
  }
}
