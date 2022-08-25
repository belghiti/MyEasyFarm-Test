import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import { PreviewProps } from "../types/app-types";
import { useDispatch, useSelector } from 'react-redux'

const Preview = ({isOpen}: PreviewProps) => {  
  const state: any = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    isOpen ? 
      <div style={{position: 'relative', width: '100%', height: '100vh' }}> 
        <h3 onClick={() => dispatch({type: 'SET-CLOSED'})} style={{position: 'fixed', top: 0, right: 0, padding: 20, cursor: 'pointer', zIndex: 11}}>Close Preview</h3>
        <MapContainer style={{width: '100%', height: '100%', zIndex: 10}} center={state.map?.feature.center} zoom={15} scrollWheelZoom={false}>
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polygon pathOptions={{color: state.map?.feature.color}} positions={state.map?.feature.geometry} />
        </MapContainer>
      </div> : <></>
  )
}

export default Preview;
