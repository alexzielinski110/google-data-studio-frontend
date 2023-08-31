import { sdk } from '../src/helpers/CorsSession'
import { Query, Visualization } from '@looker/visualizations'
import { DataProvider } from '@looker/components-data'
import { ComponentsProvider } from '@looker/components'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Get started with Looker visualization components</h1>
      <ComponentsProvider>
        <DataProvider sdk={sdk}>
          {/* Change this query slug to match your query slug */}
          <Query query="Jlm4YHPeT3lLGA9UtHjZcA">
            <Visualization />
          </Query>
        </DataProvider>
      </ComponentsProvider>
    </>
  )
}

export default App;
