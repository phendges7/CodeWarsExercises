function formatDuration(seconds) {
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let years = Math.floor(days / 365);

  if (seconds === 0) console.log("NOW");

  //adjusting quantities with leftovers
  if (seconds >= 60) seconds = seconds % 60;
  if (minutes >= 60) minutes = minutes % 60;
  if (hours >= 24) hours = hours % 24;
  if (days >= 365) days = days % 24;

  // Array de objetos de unidades
  const units = [
    { value: years, name: "year", label: "" },
    { value: days, name: "day", label: "" },
    { value: hours, name: "hour", label: "" },
    { value: minutes, name: "minute", label: "" },
    { value: seconds, name: "second", label: "" },
  ];

  // Arruma as labels das unidades
  for (let unit of units) {
    if (unit.value === 0) {
      unit.label = "";
    } else if (unit.value === 1) {
      unit.label = `1 ${unit.name}`;
    } else {
      unit.label = `${unit.value} ${unit.name}s`;
    }
  }

  //add AND
  if (secondsLabel != "") secondsLabel = `and ${secondsLabel}`;

  const result = [years, days, hours, minutes, seconds];
  const resultLabels = [
    yearsLabel,
    daysLabel,
    hoursLabel,
    minutesLabel,
    secondsLabel,
  ];

  console.log(result);
  console.log(resultLabels);
}

formatDuration(59);
formatDuration(61);
formatDuration(3660);
formatDuration(7022);
formatDuration(777022);
formatDuration(777000222);
