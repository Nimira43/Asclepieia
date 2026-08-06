import dayjs from 'dayjs'

export const getDateTimeFormat = (date: string) => {
  return dayjs(date).format('D MMMM YYYY, HH:mm')
}