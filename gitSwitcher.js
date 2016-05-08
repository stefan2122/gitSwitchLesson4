var weekday = prompt('Name a day of the week, and I will tell you more about that day...');

switch(weekday) {
	case 'monday':
		console.log('case of the mondays');
		break;
	case 'tuesday':
		console.log('taco tuesday!');
		break;
	case 'wednesday':
		console.log('Middle of the week wednesday');
		break;
	case 'thursday':
		console.log('Thursdee Fundee')
		break;
	case 'friday':
		console.log('TGIF');
		break;
	case 'saturday':
		console.log('lets get turnt');
		break;
	case 'sunday':
		console.log('sleep day');
		break;
	default: 
		console.log('you did not name a day of the week! try again!');
}