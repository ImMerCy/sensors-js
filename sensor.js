class Sensor {

  constructor(description, id, lat, lng, place, readonly, state_code, value) {
    this.description = description
    this.id = id
    this.lat = lat
    this.lng = lng
    this.place = place
    this.readonly = readonly
    this.state_code = state_code
    this.value = value
  }

}

function JSONToMeal(jsonObject) {
  const {
    strDescription: description, 
    strId: id,
    strLat: lat,
    strLng: lng,
    strPlace: place,
    strReadonly: readonly,
    strStateCode: state_code,
    strValue: value,
  } = jsonObject // destructuring

  const sensor = new Sensor(description, id, lat, lng, place, readonly, state_code, value)

  //console.log(meal)
  return meal
}