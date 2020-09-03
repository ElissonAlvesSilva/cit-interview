const ScheduleFormatter = require('../../formatters/schedule');

const ScheduleBusinesses = {
  handle(arrayOfSchedules, startDate, endDate) {
    const response = [];
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

    const formattedArray = ScheduleFormatter.format(arrayOfSchedules);

    const beforeEndDate = [];
    const untilEndDate = [];

    formattedArray.forEach((item) => {
      if (!(item.estimated > 8)
      && (item.maxDate.getTime() < endDate.getTime())
      && !(item.maxDate.getTime() <= startDate.getTime())) {
        beforeEndDate.push(item.id);
      }

      if (!beforeEndDate.includes(item.id)
      && item.maxDate.getTime() <= endDate.getTime()) {
        untilEndDate.push(item.id);
      }
    });

    response.push(beforeEndDate);
    response.push(untilEndDate);

    return response;
  },
};

module.exports = ScheduleBusinesses;
