import moment from "moment/moment";
export const convertText = (string) => {
   return string.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "") //remove diacritics
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '+')
      .replace(/^-+|-+$/g, '');
}

export const getCurrentTime = (val) => {
   let today = moment(val).format('dddd');
   let time = moment(val).format('LT');
   return `${today}, ${time}`
}