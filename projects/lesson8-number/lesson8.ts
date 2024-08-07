//Number Type
let count: number = 0;
count = 10;


//String Type
let myName: string = "HoangDM";
let companyName: string = "DGW";
let info: string = `${myName} ${companyName}`;


//Boolean Type
let pending: boolean;
pending = true;


//Object Type
let employee: {
  name: string,
  age: number,
  department: string
} = {
  name: 'John Doe',
  age: 30,
  department: 'IT'
}
employee.name = 'New name';


//Array Type
let numbers: (string | number)[] = [1, 2, 3, 4, 5, 'hoang'];
let names: string[] = ['John', 'Doe', 'Smith'];

numbers.push(6);
names.push('Williams');


//Tuple Type
let skills: [string, number] = ['name', 25];//Với tuple, thứ tự của phần tử rất QUAN TRỌNG


//Any Type (compiler bỏ qua việc check types)
let body: any = "body";
body = 23;
body = true;
body = "innerHTML";


//Union Type
let count1: number|string = 10;
count1 = 'count1';


//Aliases Type
type countType = number|string;
let count3: countType = 10;
count3 = 'count3';