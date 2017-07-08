export function selectCrime (crime) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "CRIME_SELECTED",
    payload: crime
  }
}

// Actions always contains type and sometimes a payload
