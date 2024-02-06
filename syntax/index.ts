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
// let msg: 'Hello' = 'Hello';

// msg = 'Hello';

// type Config = {protocol: 'http' | 'https', port: 3000 | 3001};
// interface Config {
// 	protocol: 'http' | 'https', 
// 	port: 3000 | 3001,
// 	log: (msg: string) => void
// };

// type Role = {role: string};
// type ConfigWithRole = Config & Role;

// interface Role {role: string}

// interface ConfigWithRole extends Config, Role {};

// const serverConfig: ConfigWithRole = {
// 	protocol: 'https',
// 	port: 3001,
// 	role: 'admin',
// 	log: (msg: string): void => console.log(msg)
// };

// const backupConfig: ConfigWithRole = {
// 	protocol: 'http',
// 	port: 3000,
// 	role: 'user'
// };

// type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001, log: (msg: string) => void) => string;

// const startServer: StartFunction = (
// 	protocol: 'http' | 'https', 
// 	port: 3000 | 3001,
// 	log: (msg: string) => void
// ): 'Server started' => {
// 	log(`${protocol}://localhost:${port}/`);
	
// 	return 'Server started';
// };

// console.log(startServer(serverConfig.protocol, serverConfig.port, serverConfig.log));

// type AnimationTiming = 'ease' | 'ease-out' | 'ease-in';
// type AnimationId = string | number;

// const createAnimation = (id: AnimationId, animName: string, timingFunc: AnimationTiming = 'ease', duration: number, iteration: "infinite" | number): void => {
	// const elem = document.querySelector(`#${id}`) as HTMLElement;

	// elem ? elem.style.animation = `${animName} ${timingFunc} ${duration}s ${iteration}` : console.log(`${animName} ${timingFunc} ${duration}s ${iteration}`);

// 	console.log(`${animName} ${timingFunc} ${duration}s ${iteration}`);
// };

// console.log(createAnimation(1, 'test', 'ease-out', 1, 'infinite'))

// interface Styles {
// 	[key: string]: string
// };

// const styles: Styles = {
// 	position: 'absolute',
// 	top: '20px',
// 	left: '20px',
//    width: '100px',
//    height: '100px',
//    backgroundColor: 'blue',
//    animation: 'blink 1s infinite'
// }
//////////////////////////////////////////////////////////////////////////////////////////////
// let salary;
// salary = 500;

// interface userData {
// 	isBirthday: boolean,
// 	name: string,
//    age: number
// }

// const userData = '{"isBirthday": true, "name": "Ihoe", "age": 30}';

// const userObj: userData = JSON.parse(userData);
// console.log(userObj.smt);

// const isOkay = true;
// let movement: boolean | string = false;

// isOkay ? movement = 'moving' : movement = false;
//////////////////////////////////////////////////////////////////////////////////////////////
// interface User {
// 	readonly login: string,
// 	password: string,
// 	age: number,
	// adress?: string,
// 	adress: string | undefined,
// 	parents?: {
// 		mom?: string,
// 		dad?: string
// 	}
// }

// const user: User = {
// 	login: 'Ihoe',
//    password: 'aboba',
//    age: 30,
//    adress: 'Odesa'
// }

// const dbName = '123123';

// function sendUserData(obj: User, db?: string):void {
// 	console.log(obj, db?.toUpperCase)
// }

// class Animal {
// 	readonly name: string = 'name';
// }

// const basicPorts: readonly [number, ...string[]] = [80, 'asda', 'asdasd', 'asdasd'];

// // basicPorts[0] = 5;
// basicPorts.push(2);
//////////////////////////////////////////////////////////////////////////////////////////////
enum Directions {
	TOP,
	BOTTOM,
	RIGHT,
	LEFT
}

enum TimingFunc {
	EASE = 'ease',
   EASE_OUT = 'ease-out',
   EASE_IN = 'ease-in'
}

function frame(elem: string, direction: Directions, tFunc: TimingFunc): void {
	if(direction === Directions.TOP) {
		console.log(tFunc);
	}
}

frame('id', Directions.TOP, TimingFunc.EASE_OUT);