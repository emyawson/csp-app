import { phrase } from './phrase';

const openingHoursCMS = (hours) => {
  // Main variables - the function will return them inside of hoursCMS
  let hoursCMS;
  let afterHoursMessage;
  let afterHoursInline;
  let afterHoursAvailability;
  // inline block variables (skapa component)
  const headline = phrase.inlineMessageHead;
  const message = phrase.inlineMessageBody;
  // eslint-disable-next-line max-len
  const weekDay = [phrase.monday, phrase.tuesday, phrase.wednesday, phrase.thursday, phrase.friday, phrase.saturday, phrase.sunday];
  // Sometimes the prop hour may or not exist depending on the contact option
  const isHours = !!hours;
  // Javascript time API
  const currentHour = new Date().getHours();
  const currentDay = new Date().getDay();

  // Variables to be modified if hours prop is true
  let weekDaysOpen;
  let saturdayOpen;
  let sundayOpen;
  let weekDaysOpenTime;
  let weekDaysCloseTime;
  if (isHours) {
    // Monday to Friday variables
    weekDaysOpenTime = hours[0].slice(1, 2);
    weekDaysCloseTime = hours[0].slice(8, 10);
    weekDaysOpen = weekDaysOpenTime < currentHour && weekDaysCloseTime > currentHour;
    // Saturday
    saturdayOpen = currentHour > hours[5].slice(1, 2) && currentHour < hours[5].slice(8, 10);
    // sunday
    sundayOpen = currentHour > hours[6].slice(1, 2) && currentHour < hours[6].slice(8, 10);
  }

  const weekDaysIndex = currentDay >= 1 && currentDay <= 5;
  const saturdayIndex = currentDay === 6;
  const sundayIndex = currentDay === 0;

  // Monday to friday
  if (weekDaysOpenTime && weekDaysIndex) {
    afterHoursAvailability = 'open';
    afterHoursMessage = isHours ? `${phrase.hoursOpen} ${hours[0]}` : null;
    // Saturday
  } else if (saturdayOpen && saturdayIndex) {
    afterHoursAvailability = 'open';
    afterHoursMessage = isHours ? `${phrase.hoursOpen} ${hours[6]}` : null;
    // Sunday
  } else if (sundayOpen && sundayIndex) {
    afterHoursMessage = isHours ? `${phrase.hoursOpen} ${hours[7]}` : null;
    afterHoursAvailability = 'open';
  }
  // If store is closed and hours props is true
  else if (isHours) {
    afterHoursMessage = phrase.hoursClosed;
    afterHoursAvailability = 'closed';
    afterHoursInline = {
      headline,
      message,
    };
  } else null;

  hoursCMS = {
    weekDay,
    afterHoursAvailability,
    afterHoursMessage,
    afterHoursInline,
  };
  return hoursCMS;
};

export default openingHoursCMS;
