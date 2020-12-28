import { useQuery, gql } from '@apollo/client'
import SpaceShipCard from './cards'

// gql will parse the GraphQL query and make sure it can be used with Apollo to fetch data
const ALL_SPACEX_SHIPS = gql`
    {
      ships {
        id
        name
        roles
        successful_landings
      }
    }

`

function App() {
  const { loading, error, data } = useQuery(ALL_SPACEX_SHIPS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Whoops!!..... Something went wrong</p>
  return (
    <div className="spaceship-page">
      <>
        <h2>
          SpaceX Space Ships&emsp;
          <span role="img" aria-label="spaceships">
            🚀
          </span>
        </h2>
        <>
          {data.ships.map(spaceShip => (
            <div key={spaceShip.id}>
              <SpaceShipCard 
                name={spaceShip.name} 
                roles={spaceShip.roles} 
                successful_landings={spaceShip.successful_landings} 
              />
            </div>
          ))}
        </>
      </>
    </div>
  );
}

export default App;
