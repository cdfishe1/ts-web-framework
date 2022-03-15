import { User } from "./models/User";

const user = new User({name: 'Raven', age: 9});

user.events.on('change', () => {
    console.log('change!')
})

user.events.trigger('change')

