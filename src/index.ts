import { User } from "./models/User";

const user = new User({name: 'Raven', age: 9 });

user.set({name: 'Olivia', age: 10})
console.log(user.get('name'));
console.log(user.get('age'));

user.set({name: "Cha cha"})
console.log(user.get('name'));

user.on('change', () => {console.log('Change #1')});
user.on('state', () => {console.log('Change #2')});
user.on('update', () => {console.log('Change #3')});

user.trigger('update')