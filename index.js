const schedule = require('node-schedule');

const utcSchedule = new schedule.RecurrenceRule();
utcSchedule.hour = 12; // +3 horas de America/Sao_Paulo
utcSchedule.minute = 34;
utcSchedule.tz = 'Etc/UTC';

schedule.scheduleJob(utcSchedule, function(){
  console.log('Rodou no UTC');
});


const americaSaoPauloSchedule = new schedule.RecurrenceRule();
americaSaoPauloSchedule.hour = 9;
americaSaoPauloSchedule.minute = 34;
americaSaoPauloSchedule.tz = 'America/Sao_Paulo';

schedule.scheduleJob(americaSaoPauloSchedule, function(){
  console.log('Rodou no America/Sao_Paulo');
});