import "./Map.css"
import { MapContainer, TileLayer } from 'react-leaflet'
import { showDataOnMap } from "../utils/utils"




const Mapp = ({ countries, casesType, center, zoom }) => {
    return (
        <div className="map">
            {/* <img src="./images/map.jpeg" alt="" width="200px"/> */}
           <MapContainer center={center} zoom={zoom} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {showDataOnMap(countries,casesType)}
</MapContainer>
           
        </div>
    )
}

export  {Mapp}
