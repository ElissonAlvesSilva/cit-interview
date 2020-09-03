const ScheduleFormatter = {
  format(arrayOfSchedule) {
    let newArrayOfSchedule = [];
    if (!arrayOfSchedule) {
      const error = {
        code: 3,
        message: 'Must be pass array of schedules',
      };
      throw error;
    }

    newArrayOfSchedule = arrayOfSchedule.map(item => ({
      id: item.ID,
      description: item['Descrição'],
      maxDate: new Date(item['Data Máxima de conclusão']),
      // eslint-disable-next-line radix
      estimated: parseInt(item['Tempo estimado']),
    })).sort((a, b) => a.maxDate - b.maxDate);

    return newArrayOfSchedule;
  },
};

module.exports = ScheduleFormatter;
