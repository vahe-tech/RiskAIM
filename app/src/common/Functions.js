export function formatDateMDY(date) {
  if (!date)
    return '';
  var dateYMD = date.split("-");
  return [dateYMD[1], dateYMD[2], dateYMD[0]].join('/');
}

export function riskValue(level, likelihood, consequence) {
  return level +  " " + likelihood + "-" + consequence;
}

export function formatName(lastname, firstname) {
  return [lastname, firstname].join(', ').replace(/^,/, '').trim().replace(/,$/, '');
}