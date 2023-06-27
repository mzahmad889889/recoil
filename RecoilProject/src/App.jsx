import { RecoilRoot} from 'recoil'
import './App.css'
import Character from './Character'


function App() {
 
  
  return (
    <>
    <RecoilRoot>
      <h1>Recoil Small Project</h1>
      <Character/>                 
    </RecoilRoot>   
    </>
  )
}

export default App
