import { config, myFunction } from './module';

import * as mod1 from './module';// означает что импортирует все 
console.log(mod1.foo)

import Product from './module1'; // не завятся скобки потому что экспорт был через default


console.log(config)
myFunction()