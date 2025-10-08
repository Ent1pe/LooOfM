import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//import { AuthProvider } from './context/AuthContext'
//import CampusMap from './components/Map/CampusMap'
//import Navbar from './components/Layout/Navbar'
//import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      
        <div className="app">
          
          <main>
            
          </main>
        </div>
      
    </QueryClientProvider>
  )
}

export default App