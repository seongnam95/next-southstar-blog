import dayjs, { Dayjs } from 'dayjs';

type DateType = string | number | Date | Dayjs;

export const dateFormatter = (date: DateType, format: string = 'YY-MM-DD') => {
  console.log(dayjs(date).locale('ko').format('YY-MM-DD'));
  return dayjs(date).locale('ko').format(format);
};

export const dateCompare = (date: DateType, compareDate: DateType) => {
  return dayjs(date).diff(compareDate);
};
