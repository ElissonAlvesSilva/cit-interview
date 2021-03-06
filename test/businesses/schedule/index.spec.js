const { expect } = require('chai');
const ScheduleBusinesses = require('../../../businesses/schedule');

describe('Schedule', () => {
  let sandbox;
  let jobsToRun;
  let startDate;
  let endDate;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    startDate = new Date('2019-11-10 09:00:00');
    endDate = new Date('2019-11-11 12:00:00');

    jobsToRun = [
      {
        ID: 1,
        Descrição: 'Importação de arquivos de fundos',
        'Data Máxima de conclusão': '2019-11-10 12:00:00',
        'Tempo estimado': '2 horas',
      },
      {
        ID: 2,
        Descrição: 'Importação de dados da Base Legada',
        'Data Máxima de conclusão': '2019-11-11 12:00:00',
        'Tempo estimado': '4 horas',
      },
      {
        ID: 3,
        Descrição: 'Importação de dados de integração',
        'Data Máxima de conclusão': '2019-11-11 08:00:00',
        'Tempo estimado': '6 horas',
      },
    ];
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return a array set', () => {
    const response = ScheduleBusinesses.handle(jobsToRun, startDate, endDate);

    expect(response).to.be.a('array');
  });

  it('should return a error if start or end date is empty', () => {
    const schedule = ScheduleBusinesses;
    expect(() => {
      schedule.handle(jobsToRun);
    }).to.throw('Must be pass start and end date');
  });

  it('should return a error if start or end date is not type date', () => {
    const schedule = ScheduleBusinesses;
    expect(() => {
      schedule.handle(jobsToRun, '2020-09-09', '2020-09-08');
    }).to.throw('start and end date must to be type equals to date');
  });

  it('should return array result', () => {
    const response = ScheduleBusinesses.handle(jobsToRun, startDate, endDate);
    const jobsResponse = [
      [1, 3],
      [2],
    ];
    expect(response).to.be.a('array');
    expect(response).to.deep.equals(jobsResponse);
  });

  it('should return array result with new job added in last date', () => {
    jobsToRun.push(
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
    );
    const response = ScheduleBusinesses.handle(jobsToRun, startDate, endDate);
    const jobsResponse = [
      [1, 5, 3],
      [2, 4],
    ];
    expect(response).to.be.a('array');
    expect(response).to.deep.equals(jobsResponse);
  });
});
