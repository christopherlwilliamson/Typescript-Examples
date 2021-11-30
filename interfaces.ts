interface Human {
    readonly age: number;
    walk(): void;
}

interface Person extends Human {
    firstName: string;
    lastName?: string;
}

// For Objects

const user: Person = {
    firstName: ``,
    age: 10,
    walk: () => {return;}
};

// For classes

class Employee implements Person {
    firstName = ``;
    age = 10;
    walk(): void{
        return;
    }
}