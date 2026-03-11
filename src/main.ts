import { TestEnum } from './enums';
import {Main1} from './app/a'
class Main {
  sayHello() {
    console.log('Hello World!');
    console.log(TestEnum.A);
      new Main1().sayHello()
  }
}

new Main().sayHello();
