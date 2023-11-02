import ReactGoogleAutocomplete from "react-google-autocomplete";

export default function SelectLocation({location, setLocation}){
  const YOUR_GOOGLE_MAPS_API_KEY = 'AIzaSyBdOVHEaQ9lAlTI1tCntVcGJamHsUmkLhU';  
  async function onPlaceSelectedHandler(place){
      if (place){
        console.log(`Place : ${JSON.stringify(place)}`);
          
        const locObject = {
          place_id: place.place_id, 
          city: place.address_components[0].long_name, 
          country: place.address_components[place.address_components.length - 1].long_name,
          longitude: place.geometry.location.lng,
          Latitude: place.geometry.location.lat,
          formatted_address: place.formatted_address
        }

        console.log(`Selected Place Object : ${JSON.stringify(locObject)}`);
        setLocation(locObject)
      }
    }
    return(   
        <ReactGoogleAutocomplete
          apiKey={YOUR_GOOGLE_MAPS_API_KEY}
          onPlaceSelected={onPlaceSelectedHandler}
          defaultValue={location.formatted_address}/>
    )
  
}
  


// async function onPlaceSelectedHandler(place){
//     if (place) {
//       console.log(`Place : ${JSON.stringify(place)}`)
// }}

// export { onPlaceSelectedHandler }