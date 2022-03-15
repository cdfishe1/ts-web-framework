interface UserProps {
    name?: string;
    age?: number
}

type Callback = () => void;

export class User {
    events: { [key: string]: Callback[] } = {} //This tells TS that our events object will take a key that's a string and an array of callback functions

    constructor(private data: UserProps){};

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];

        if(!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => callback());
    }
}