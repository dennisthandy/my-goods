import dayjs from "dayjs"

export const getAge = (date: string) => {
    const day = dayjs().diff(date, 'day')
    const month = dayjs().diff(date, 'month')
    const year = dayjs().diff(date, 'year')
    if(month >= 12) return `${year} Tahun`
    if(day >= 30) return `${month} Bulan`
    return `${day} Hari`
}