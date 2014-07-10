var prompt = require('sync-prompt').prompt;

console.log("Let's get your Task Manager together! Your options are Play, Home and School. ");
var option = prompt('Type p for Play, h for Home and s for School. Type q when your list is complete. ');
var play = [], home = [], school = [];

while(option !== 'q'){
  var task = prompt('What would you like to add? ');

  if(option === 'p'){
    play.push(task);
  }else if( option === 'h'){
    home.push(task);
  }else if(option === 's'){
    school.push(task);
  }

  option = prompt('Type p for Play, h for Home and s for School. Type q when your list is complete. ');
}
console.log('Your Play list is:  ', play);
console.log('Your Home list is: ', home);
console.log('Your School list is: ',school);

