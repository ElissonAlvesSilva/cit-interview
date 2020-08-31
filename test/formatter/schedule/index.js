const { expect } = require('chai');
const ScheduleFormatter = require('../../../formatters/schedule');

describe('Formatter', () => {
  describe('Schedule Formatter', () => {
    let sandbox;
    let jobsToRun;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
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

    it('should return a array of object', () => {
      const arrayOfObject = ScheduleFormatter.format(jobsToRun);

      expect(arrayOfObject).to.be.a('array');
    });

    it('should return a error if has empty param', () => {
      const format = ScheduleFormatter;

      expect(() => {
        format.format();
      }).to.throw('Must be pass array of schedules');
    });

    it('should return a formatted response', () => {
      const format = ScheduleFormatter.format(jobsToRun);
      const formattedResponse = [
        {
          id: 1,
          description: 'Importação de arquivos de fundos',
          maxDate: '2019-11-10 12:00:00',
          estimated: '2 horas',
        },
        {
          id: 2,
          description: 'Importação de dados da Base Legada',
          maxDate: '2019-11-11 12:00:00',
          estimated: '4 horas',
        },
        {
          id: 3,
          description: 'Importação de dados de integração',
          maxDate: '2019-11-11 08:00:00',
          estimated: '6 horas',
        },
      ];

      expect(format).to.deep.equals(formattedResponse);
    });
  });
});
