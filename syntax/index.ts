const isBirthdayData: boolean = true;

const ageData: number = 20;

let userNameData: string = 'Ihor';

const logDrthMsg = (isBirthday: boolean, userName: string, age: number): string => {
	return isBirthday ? `Congratulations, ${userName}! You are ${age} years old!` : 'Error';
};

console.log(logDrthMsg(isBirthdayData, userNameData, ageData));