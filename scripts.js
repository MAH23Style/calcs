function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const bmi = (weight / height / height) * 10000;
  document.getElementById("bmi-result").innerHTML = Math.round(bmi * 100) / 100;
  if (document.getElementById("bmi-result").innerHTML === "NaN") {
    document.getElementById("bmi-result").innerHTML =
      "Please enter a valid number.";
  }
}

function calculateAge() {
  var userinput = document.getElementById("birthdate").value;
  var dob = new Date(userinput);

  if (userinput == null || userinput == "") {
    document.getElementById("age-result").innerHTML = "Please provide a date";
  } else {
    var dobYear = dob.getYear();
    var dobMonth = dob.getMonth();
    var dobDate = dob.getDate();

    var now = new Date();
    var currentYear = now.getYear();
    var currentMonth = now.getMonth();
    var currentDate = now.getDate();

    if (
      dobYear > currentYear ||
      (dobYear === currentYear && dobMonth > currentMonth) ||
      (dobYear === currentYear &&
        dobMonth === currentMonth &&
        dobDate > currentDate)
    ) {
      window.alert(";-;");
      return;
    }
    var age = {};
    var ageString = "";

    var yearAge = currentYear - dobYear;

    if (currentMonth >= dobMonth) var monthAge = currentMonth - dobMonth;
    else {
      yearAge--;
      var monthAge = 12 + currentMonth - dobMonth;
    }

    if (currentDate >= dobDate) var dateAge = currentDate - dobDate;
    else {
      monthAge--;
      var dateAge = 31 + currentDate - dobDate;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge,
    };

    if (age.years > 0 && age.months > 0 && age.days > 0)
      ageString =
        age.years +
        " years, " +
        age.months +
        " months, and " +
        age.days +
        " days old.";
    else if (age.years == 0 && age.months == 0 && age.days > 0)
      ageString = "Only " + age.days + " days old!";
    else if (age.years > 0 && age.months == 0 && age.days == 0)
      ageString = age.years + " years old. Happy Birthday!!";
    else if (age.years > 0 && age.months > 0 && age.days == 0)
      ageString = age.years + " years and " + age.months + " months old.";
    else if (age.years == 0 && age.months > 0 && age.days > 0)
      ageString = age.months + " months and " + age.days + " days old.";
    else if (age.years > 0 && age.months == 0 && age.days > 0)
      ageString = age.years + " years, and " + age.days + " days old.";
    else if (age.years == 0 && age.months > 0 && age.days == 0)
      ageString = age.months + " months old.";
    else ageString = "Welcome to Earth! <br> Your first day on Earth!";

    return (document.getElementById("age-result").innerHTML = ageString);
  }
}

function convertUnit() {
  const value = parseFloat(document.getElementById("unit-value").value);
  const unitFrom = document.getElementById("unit-from").value;
  const unitTo = document.getElementById("unit-to").value;
  const resultDiv = document.getElementById("unit-result");

  if (isNaN(value)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  let conversionFactor = getConversionFactor(unitFrom, unitTo);

  if (conversionFactor === null) {
    resultDiv.textContent = `Conversion from ${unitFrom} to ${unitTo} is not supported.`;
    return;
  }

  const convertedValue = value * conversionFactor;

  resultDiv.textContent = `${value} ${unitFrom} is equal to ${convertedValue.toFixed(
    2
  )} ${unitTo}.`;
}

function getConversionFactor(unitFrom, unitTo) {
  const conversions = {
    km: { mi: 0.621371, m: 1000, cm: 100000, mm: 1000000 },
    m: { km: 0.001, cm: 100, mm: 1000 },
    cm: { km: 0.00001, m: 0.01, mm: 10 },
    mm: { km: 0.000001, m: 0.001, cm: 0.1 },

    kg: { lb: 2.20462, g: 1000, mg: 1000000 },
    g: { kg: 0.001, mg: 1000 },
    mg: { kg: 0.000001, g: 0.001 },

    y: {
      mo: 12,
      d: 365,
      h: 8760,
      min: 525600,
      s: 31536000,
    },
    mo: {
      y: 1 / 12,
      d: 30,
      h: 720,
      min: 43200,
      s: 2592000,
    },
    d: {
      y: 1 / 365,
      mo: 1 / 30,
      h: 24,
      min: 1440,
      s: 86400,
    },
    h: {
      y: 1 / 8760,
      mo: 1 / 720,
      d: 1 / 24,
      min: 60,
      s: 3600,
    },
    min: {
      y: 1 / 525600,
      mo: 1 / 43200,
      d: 1 / 1440,
      min: 1 / 60,
      s: 60,
    },
    s: {
      y: 1 / 31536000,
      mo: 1 / 2592000,
      d: 1 / 86400,
      h: 1 / 3600,
      min: 1 / 60,
    },
  };

  return conversions[unitFrom]?.[unitTo] || null;
}

const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

day = day < 10 ? "0" + day : day;
month = month < 10 ? "0" + month : month;

const formattedDate = `${day}/${month}/${year}`;

document.getElementById("footerCredits").innerHTML =
  "Mohammed Amer, " + formattedDate;
