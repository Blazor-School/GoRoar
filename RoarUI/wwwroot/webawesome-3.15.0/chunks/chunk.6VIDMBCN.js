/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */

// src/components/counter/duration.ts
var counterUnits = ["years", "months", "days", "hours", "minutes", "seconds"];
var unitLengths = {
  days: 864e5,
  hours: 36e5,
  minutes: 6e4,
  seconds: 1e3
};
function getDuration(from, to, largest, smallest, isCountdown = false) {
  const shown = counterUnits.slice(counterUnits.indexOf(largest), counterUnits.indexOf(smallest) + 1);
  const result = {};
  if (to < from) {
    to = from;
  }
  let rest = to.getTime() - from.getTime();
  if (largest === "years" || largest === "months") {
    let months = (to.getFullYear() - from.getFullYear()) * 12 + to.getMonth() - from.getMonth();
    const restAfter = (count) => isCountdown ? addMonths(to, -count).getTime() - from.getTime() : to.getTime() - addMonths(from, count).getTime();
    if (restAfter(months) < 0) {
      months--;
    }
    rest = restAfter(months);
    if (isCountdown && (smallest === "months" || smallest === "years")) {
      months += rest > 0 ? 1 : 0;
      if (smallest === "years") {
        months = Math.ceil(months / 12) * 12;
      }
    }
    if (largest === "years") {
      result.years = Math.floor(months / 12);
      months %= 12;
    }
    if (shown.includes("months")) {
      result.months = months;
    }
  }
  for (const unit of ["days", "hours", "minutes", "seconds"]) {
    if (shown.includes(unit)) {
      result[unit] = Math.floor(rest / unitLengths[unit]);
      rest %= unitLengths[unit];
    }
  }
  return result;
}
function addMonths(date, months) {
  const result = new Date(date.getTime());
  result.setFullYear(date.getFullYear(), date.getMonth() + months, 1);
  const lastDay = new Date(result.getTime());
  lastDay.setMonth(lastDay.getMonth() + 1, 0);
  result.setDate(Math.min(date.getDate(), lastDay.getDate()));
  return result;
}

export {
  counterUnits,
  unitLengths,
  getDuration
};
