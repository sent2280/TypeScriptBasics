// Major type in TS
let flag:boolean = true;
let value:number = 15;
let title:string = "Welcome Page";
console.log("flag = " + flag + " Value = " + value + " title = " + title);

// Throwing Error if we assign wrong type
// flag = 1;

// Template Strings
// Resolve the expression and substitute in template
let age:number = 15;
let sentence: string = `His age is ${age}....`;

// Array
let arr1: number[] = [1,2,3,67,12];
let arr2: Array<number> = [3,8,10,43,23];

//Tuple - will hold the mixed type but length is fixed
let x: [string,number];
x = ["kumar",10];

//Enum - Values inside enum will be automaticlly initilized
enum colour {red,blue,green};
console.log("Value of green = " + colour.green);

// any type - When type of the value is unknown For Ex. Value received from third party lib, 
// or API or from user is unknown
let random:any;
random = 10;
random = "ten";

// mutiple type for same value
let multitype: boolean | string
multitype = true;
multitype = "true";

// Unkown - This is same as any, any value can be assigned to unkonwn type
// But unlike any type unknown, cant be processed  without type assertion ( Type casting - in other languges)
let random1:unknown;
random1 = 10;
// random1 = "ten";
let value2 = random1 as number +10;