// const isBirthdayData: boolean = true;
// const ageData: number = 20;
// let userNameData: string = 'Ihor';

// const userData = {
// 	isBirthdayData: true,
// 	ageData: 20,
// 	userNameData:'Ihor',
// 	messages: {
// 		message1: 'Hello',
//       message2: 'World'
// 	}
// };

// const userDataTuple: [boolean, number, ...string[]] = [true, 20, 'Ihor', 'Alex', 'Debchik'];
// userDataTuple[3];
// userDataTuple.push(50)
// userDataTuple[3];

// const res = userDataTuple.map(t => `${t} - data`);
// const [bthd, age, useName] = userDataTuple;

// const sayHello = (message: string) => {
// 	return message;
// };

// const logDrthMsg = ({isBirthdayData, 
// 	ageData, 
// 	userNameData,
// 	messages: {message1}}: {
// 	isBirthdayData: boolean,
// 	ageData: number,
// 	userNameData: string,
// 	messages: {
//       message1: string,
//       message2: string
//    }
// }): string => {
// 	if(isBirthdayData) {
// 		return `Congratulations, ${userNameData}! You are ${ageData} years old!`;
// 	} else {
// 		return sayHello(message1);
// 	}
// };

// console.log(logDrthMsg(userData));

// const departments: string[] = ['dev', 'design', 'marketing'];

// const department = departments[0];

// // departments.push('admin');
// const report = departments
// 								.filter((d: string) => d !== 'dev')
// 								.map((d: string) => `${d} - done`)

// const nums: number[][] = [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1]]; 

// const [first] = report;
// console.log(first);

//TYPE: ANY !USE
// let salary;
// salary = 5000;
//////////////////////////////////////////////////////////////////////////////////////////////
// const test: null = null;																						
// const test2: any = null;
// const test3: string = null;
// const test4: number = null;        
// const test5: boolean = null;
//////////////////////////////////////////////////////////////////////////////////////////////
// let id: symbol = Symbol('id');

// const data = {
// 	[id]: 1
// }

// console.log(data[id]);

// const num1: bigint = 1n;
// const num2: bigint = 2n;

// console.log(num1 + num2);
//////////////////////////////////////////////////////////////////////////////////////////////
// const message: string | number = 1;
// const messages: string[] | number[] = ['a', 'b', 'c'];

// const printMsg = (msg: string | number | boolean): void => {
// 	typeof msg ==='string' || typeof msg === 'number' ? console.log(msg.toString()) : console.log(msg);
// };

// const printMsg = (msg: string[] | number | boolean): void => {
// 	if(Array.isArray(msg)) {
// 		msg.forEach(m => console.log(m))
// 	} else if (typeof msg === 'number') {
// 		console.log(msg.toFixed())
// 	} else {
// 		console.log(msg);
// 	}
// };

// const printReadings = (a: number | string, b: number | boolean) => {
// 	if(a === b) {
// 		console.log(a, b);
// 	}
// };

// const printReadings2 = (a: number[] | string) => {
// 	console.log(a.slice(0, 3))
// };

// const checkReading = (readings: {system: number} | {user: number}): void => {
// 	if('system' in readings) {
// 		console.log(readings.system);
// 	} else {
// 		console.log(readings.user);
// 	}
// };

// const logValue = (x: string | Date) => {
// 	if(x instanceof Date) {
// 		console.log(x.getDate());
// 	} else {
// 		console.log(x.trim());
// 	}
// };
//////////////////////////////////////////////////////////////////////////////////////////////
let msg: 'Hello' = 'Hello';

msg = 'Hello';

const port3000: number = 3000;
const port3001: number = 3001;


const startServer = (protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' => {
	if(port === port3000 || port === port3001) {
		console.log(`${protocol}://localhost:${port}/`);
	} else {
		console.error('Wrong port number');
	}
	
	return 'Server started';
};

console.log(startServer('http', 3000));

type AnimationTiming = 'ease' | 'ease-out' | 'ease-in';
type AnimationId = string | number;

const createAnimation = (id: AnimationId, animName: string, timingFunc: AnimationTiming = 'ease', duration: number, iteration: "infinite" | number): void => {
	// const elem = document.querySelector(`#${id}`) as HTMLElement;

	// elem ? elem.style.animation = `${animName} ${timingFunc} ${duration}s ${iteration}` : console.log(`${animName} ${timingFunc} ${duration}s ${iteration}`);

	console.log(`${animName} ${timingFunc} ${duration}s ${iteration}`);
};

console.log(createAnimation(1, 'test', 'ease-out', 1, 'infinite'))