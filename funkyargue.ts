// function printAddress(street: string, streetTwo?: string, state = 'AK') {
// 	console.log(street);
// 	if (streetTwo) {
// 		console.log(streetTwo);
// 	}
// 	console.log(state);
// }

// printAddress('123 Any St');
// printAddress('123 Any St', 'Suite 666');
// printAddress('123 Any St', 'Suite 666', 'UT');

function lineupCard(team: string, ...players: string[]) {
  console.log('Team: ' + team);
  for (let player of players) {
  	console.log(player);
  }
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');