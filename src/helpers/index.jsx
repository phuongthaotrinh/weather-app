import moment from "moment";

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
   let time = moment(val).format('LT').toLowerCase();
   return `${today}, ${time}`
}


export const formatTime = (val) => {
   const date = new Date(val * 1000);
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var ampm = hours >= 12 ? "pm" : "am";
   hours = hours % 12;
   hours = hours ? hours : 12;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   var strTime = hours + ":" + minutes + " " + ampm;
   return strTime;
};