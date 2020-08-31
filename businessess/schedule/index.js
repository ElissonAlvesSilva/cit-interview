const ScheduleBusinesses = {
  handle(arrayOfSchedules, startDate, endDate) {
    if (!startDate || !endDate) {
      const error = {
        code: 1,
        message: 'Must be pass start and end date',
      };

      throw error;
    }

    if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
      const error = {
        code: 2,
        message: 'start and end date must to be type equals to date',
      };

      throw error;
    }

    return arrayOfSchedules;
  },
};

module.exports = ScheduleBusinesses;
