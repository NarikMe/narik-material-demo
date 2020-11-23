import { Adapt } from 'data-adapter';
import { Contains, IsEmail } from 'class-validator';

export class ClassValidation {
  viewModelId: number;

  @Adapt({ name: 'email' })
  _email: string;

  @IsEmail()
  set email(value: string) {
    this._email = value;
  }
  get email(): string {
    return this._email;
  }

  @Adapt({ name: 'hello' })
  _hello: string;

  @Contains('hello')
  set hello(value: string) {
    this._hello = value;
  }
  get hello(): string {
    return this._hello;
  }

  constructor() {
    this.hello = 'Hello!';
  }
}
