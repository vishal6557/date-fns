import endOfDay from '../endOfDay/index'
import endOfMonth from '../endOfMonth/index'
import toDate from '../toDate/index'

/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check

 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
export default function isLastDayOfMonth<DateType extends Date>(
  date: DateType | number
): boolean {
  const _date = toDate(date)
  return +endOfDay(_date) === +endOfMonth(_date)
}
