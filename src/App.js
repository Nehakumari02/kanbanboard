import react,{useEffect} from 'react'
import './App.css';
import Navbar from './components/Nav/Navbar';
import Dashview from './components/Dashview/Dashview';
import Card from './components/Card/Card';

const App=()=>{
  const data=async()=>{
    try{
      const res=await fetch(' https://api.quicksell.co/v1/internal/frontend-assignment ');
      console.log(res);
    }
    catch(err){
      console.log(err);
    }
  }
    useEffect(()=>{
      data();
    },[]);
    return(
    <>
    
    <h2>kanbanboard</h2>
    <Card></Card>
    </>
    )
}


export default App
