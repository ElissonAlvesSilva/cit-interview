const ScheduleBusinesses = require('./businesses/schedule');

const arrayOfSchudules = [
  {
    ID: 1,
    Descrição: 'Importação de arquivos de fundos',
    'Data Máxima de conclusão': new Date('2019-11-10 12:00:00'),
    'Tempo estimado': '2 horas',
  },
  {
    ID: 2,
    Descrição: 'Importação de dados da Base Legada',
    'Data Máxima de conclusão': new Date('2019-11-11 12:00:00'),
    'Tempo estimado': '4 horas',
  },
  {
    ID: 3,
    Descrição: 'Importação de dados de integração',
    'Data Máxima de conclusão': new Date('2019-11-11 08:00:00'),
    'Tempo estimado': '6 horas',
  },
  {
    ID: 4,
    Descrição: 'Importação de dados de integração',
    'Data Máxima de conclusão': new Date('2019-11-11 12:00:00'),
    'Tempo estimado': '6 horas',
  },
  {
    ID: 5,
    Descrição: 'Importação de dados de integração',
    'Data Máxima de conclusão': new Date('2019-11-10 14:00:00'),
    'Tempo estimado': '6 horas',
  },
];

const response = ScheduleBusinesses
  .handle(arrayOfSchudules,
    new Date('2019-11-10 09:00:00'),
    new Date('2019-11-11 12:00:00'));
console.log(response);
