var styleDict = {

  "raceStyle":
  (function(feature) {
  if (feature.properties["PctWhite"]>=90) {
    return {
    weight: 2,
    color: '#FFEDA0',
    dashArray: '3',
  };
  }
  if (feature.properties["PctWhite"]>=80 && feature.properties["PctWhite"]<=89.99) {
    return {
    weight: 2,
    color: '#FED976',
    dashArray: '3',
  };
  }
  if (feature.properties["PctWhite"]>=70 && feature.properties["PctWhite"]<=79.99) {
    return {
    weight: 2,
    color: '#FEB24C',
    dashArray: '3',
    opacity: 0.7
  };
  }
  if (feature.properties["PctWhite"]>=60 && feature.properties["PctWhite"]<=69.99) {
    return {
    weight: 2,
    color: '#FC4E2A',
    dashArray: '3',
  };
  }
  if (feature.properties["PctWhite"]>=50 && feature.properties["PctWhite"]<=59.99) {
    return {
    weight: 2,
    color: '#E31A1C',
    dashArray: '3',
  };
  }
  if (feature.properties["PctWhite"]>=25 && feature.properties["PctWhite"]<=49.99) {
    return {
    weight: 2,
    color: '#a0191c',
    dashArray: '3',
  };
  }

  if (feature.properties["PctWhite"]<=24.99) {
    return {
    weight: 2,
    color: '#800026',
    dashArray: '3',
  };
  }
}),

"citizenStyle":
(function(feature) {
  if (feature.properties["PctAmerica"]>=90) {
    return {
    weight: 2,
    color: '#FFEDA0',
    dashArray: '3',
  };
  }
  if (feature.properties["PctAmerica"]>=80 && feature.properties["PctAmerica"]<=89.99) {
    return {
    weight: 2,
    color: '#FED976',
    dashArray: '3',
  };
  }
  if (feature.properties["PctAmerica"]>=70 && feature.properties["PctAmerica"]<=79.99) {
    return {
    weight: 2,
    color: '#FEB24C',
    dashArray: '3',
  };
  }
  if (feature.properties["PctAmerica"]>=60 && feature.properties["PctAmerica"]<=69.99) {
    return {
    weight: 2,
    color: '#FC4E2A',
    dashArray: '3',
  };
  }
  if (feature.properties["PctAmerica"]>=50 && feature.properties["PctAmerica"]<=59.99) {
    return {
    weight: 2,
    color: '#E31A1C',
    dashArray: '3',
  };
  }
  if (feature.properties["PctAmerica"]>=25 && feature.properties["PctAmerica"]<=49.99) {
    return {
    weight: 2,
    color: '#a0191c',
    dashArray: '3',
  };
  }

  if (feature.properties["PctAmerica"]<=24.99) {
    return {
    weight: 2,
    color: '#800026',
    dashArray: '3',
  };
  }
}),

"insuranceStyle":
(function(feature) {
  if (feature.properties["PctWInsur"]>=90) {
    return {
    weight: 2,
    color: '#FFEDA0',
    dashArray: '3',
  };
  }
  if (feature.properties["PctWInsur"]>=80 && feature.properties["PctWInsur"]<=89.99) {
    return {
    weight: 2,
    color: '#FED976',
    dashArray: '3',
  };
  }
  if (feature.properties["PctWInsur"]>=70 && feature.properties["PctWInsur"]<=79.99) {
    return {
    weight: 2,
    color: '#FEB24C',
    dashArray: '3',
  };
  }
  if (feature.properties["PctWInsur"]>=60 && feature.properties["PctWInsur"]<=69.99) {
    return {
    weight: 2,
    color: '#FC4E2A',
    dashArray: '3',
  };
  }
  if (feature.properties["PctWInsur"]>=50 && feature.properties["PctWInsur"]<=59.99) {
    return {
    weight: 2,
    color: '#E31A1C',
    dashArray: '3',
  };
  }
  if (feature.properties["PctWInsur"]>=25 && feature.properties["PctWInsur"]<=49.99) {
    return {
    weight: 2,
    color: '#a0191c',
    dashArray: '3',
  };
  }

  if (feature.properties["PctWInsur"]<=24.99) {
    return {
    weight: 2,
    color: '#800026',
    dashArray: '3',
  };
  }
})
}
