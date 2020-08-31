const ScheduleFormatter = {
  format(arrayOfSchedule) {
    let newArrayOfSchedule = [];
    if (!arrayOfSchedule) {
      const error = {
        code: 2,
        message: 'Must be pass array of schedules',
      };
      throw error;
    }

    newArrayOfSchedule = arrayOfSchedule.map(item => ({
      id: item.ID,
      description: item['Descrição'],
      maxDate: item['Data Máxima de conclusão'],
      estimated: item['Tempo estimado'],
    }));

    return newArrayOfSchedule;
  },
};

module.exports = ScheduleFormatter;
