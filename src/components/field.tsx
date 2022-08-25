import { useDispatch } from 'react-redux'
import { MapContainer, Polygon, Popup, TileLayer } from "react-leaflet";
import fields from "../data/partfield.json"
import soilmap from "../data/soilmap.json"


const Field = () => {
  const center:[number, number] = [fields.items[0].center[1], fields.items[0].center[0]]   

  const dispatch = useDispatch()
 
  return (
    <MapContainer style={{width: '100%', height: '100vh'}} center={center} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        fields.items.map((field, index) => {
          const poly = field.boundaries.coordinates[0][0].map(c => [c[1], c[0]]) as [number, number][]
          const color = `#${field.color_hex}`

          return (
            <Polygon key={index} pathOptions={{color}} positions={poly}>
              <Popup>
                {
                  field.id === soilmap.data.partfield_id ?
                    soilmap.data.features.map((item) => {
                      return item.features.map((feature, index) => {
                        return <> 
                          <button
                            style={{cursor: 'pointer', background: 'none', padding: '5px 10px', border: 'none'}} 
                            key={index}
                            onClick={() => {
                              dispatch({
                                type: 'SET-SELECTED-FEATURE',
                                payload: {
                                  geometry: feature.geometry.coordinates[0][0].map(c => [c[1], c[0]]) as [number, number][],
                                  color: feature.properties.color,
                                  center
                                }
                              })
                            }}
                          >
                            #feature {index + 1}
                          </button><br />
                        </>
                      })
                    }) : "No available features to display !"
                }
              </Popup>
            </Polygon>
          )
        })
      }
    </MapContainer>
  );
}

export default Field
