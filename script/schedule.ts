import * as schedule from 'node-schedule';

export const scheduleJob = (time: object, job: any): object => {
  return schedule.scheduleJob(time, job);
};

// schedule.cancel()

/**
 * time {object}
 *
 * second: Number (0-59)
 * minute: Number (0-59)
 * hour: Number (0-23)
 * date: Number (1-31)
 * month: Number (0-11)
 * year
 * dayOfWeek: Number (0-6) Starting with Sunday
 * start: Date
 * end: Date
 * rule: String
 */
