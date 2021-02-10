const seasons = ['winter', 'spring', 'summer', 'autumn', 'fall', 'holiday'];

const processMonth = (month) => {
  let monthNumber, namedMonth, quarter, season;

  if (typeof month === 'string' || month instanceof String) {
    monthNumber = parseInt(month);
  }else {
    monthNumber = month;
  }

  switch (monthNumber) {
    case 1 : namedMonth = Math.random() > 0.5 ? 'January' : 'Jan'; quarter = 1; season = 0; break;
    case 2 : namedMonth = Math.random() > 0.5 ? 'February' : 'Feb'; quarter = 1; season = 0; break;
    case 3 : namedMonth = Math.random() > 0.5 ? 'March' : 'Mar'; quarter = 1; season = 1; break;
    case 4 : namedMonth = Math.random() > 0.5 ? 'April' : 'Apr'; quarter = 2; season = 1; break;
    case 5 : namedMonth = 'May';  quarter = 2; season = 1; break;
    case 6 : namedMonth = Math.random() > 0.5 ? 'June' : 'Jun'; quarter = 2; season = 2; break;
    case 7 : namedMonth = Math.random() > 0.5 ? 'Jul' : 'July'; quarter = 3; season = 2; break;
    case 8 : namedMonth = Math.random() > 0.5 ? 'August' : 'Aug'; quarter = 3; season = 2; break;
    case 9 : namedMonth = Math.random() > 0.5 ? 'September' : 'Sep'; quarter = 3; season = Math.random() > 0.5 ? 3 : 4; break;
    case 10 : namedMonth = Math.random() > 0.5 ? 'October' : 'Oct'; quarter = 4; season = Math.random() > 0.5 ? 3 : 4; break;
    case 11 : namedMonth = Math.random() > 0.5 ? 'November' : 'Nov'; quarter = 4; season = Math.random() > 0.5 ? 4 : 5; break;
    case 12 : namedMonth = Math.random() > 0.5 ? 'December' : 'Dec'; quarter = 3 ;season = 5; break;
  }

  if (quarter === undefined) {
    alert(`oh crap ${month}`);
  }

  return {
    namedMonth : namedMonth,
    quarter : quarter,
    season : season,
  }
}

const generateReleaseDate = (processedDate) => {
  const generatedMonth = Math.floor(Math.random() * 12) + 1;
  const type = Math.floor(Math.random() * (4 - 1)) + 1;
  const monthObject = processMonth(generatedMonth);
  let year = parseInt(processedDate.year);

  if (generatedMonth <= processedDate.month){
    year = year + 1;
  }

  let dateString = '';

  switch (type) {
    case 1:
      let day = Math.floor(Math.random() * (28 - 1)) + 1;
      dateString = `${monthObject.namedMonth}, ${day} ${year}`;
      break;
    case 2:
      dateString = `${seasons[monthObject.season]}, ${year}`;
      break;
    case 3:
      dateString = `Q${monthObject.quarter}, ${year}`;
      break;
  }
  return dateString;
}

const processDate = (date) => {
  const tempDate = date.split('-');
  const monthObject = processMonth(tempDate[1]);

  return {
    month : tempDate[1],
    day : tempDate[2],
    year : tempDate[0],
    namedMonth : monthObject.namedMonth,
    quarter : monthObject.quarter,
    season : monthObject.season
  };
}

export default {
  processDate : processDate,
  processMonth : processMonth,
  generate : generateReleaseDate,
}