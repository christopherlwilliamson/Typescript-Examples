// void

function logToConsole(); void {
    console.log("Hello World!");
}

// Array

let fruits: string[];
fruits = [`🍎`, `🍏`, `🍊`, '🍉'.toUpperCase(), (() => '🍇')(), null, undefined];

let food: Array<string>;
food = ['🍕', '🍔'];

let genericArray: Array<string | number | boolean>;
genericArray = ['🍕', '🍔', 122, 0b10101, false, true, null, undefined];

// Tuple

let coordinates: [number, number, number];
coordinates = [12, 13, 14];

let genTuple: [number, string, boolean];
genTuple = [12, '13', false];

// Objects

let user = {
    firstName: 'Chris',
    lastName: 'Williamson',
    username: 'ChrisWilliamson',
    getUserName: (): string => this.username
};

// Enum

enum DaysOfTheWeek = {
    MONDAY = 'monday',
    TUESDAY = 'tuesday',
    WEDNESDAY = 'wednesday',
};

let dayToday: DaysOfTheWeek;
dayToday = DaysOfTheWeek.MONDAY;

// any

let authorizedUser: any = {
    firstName: 'Chris',
    lastName: 'Williamson',
    username: 'ChrisWilliamson'
};