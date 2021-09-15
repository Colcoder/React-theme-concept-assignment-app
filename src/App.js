import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import AddForm from './components/AddForm';
import Assignments from './components/Assignments';
import {useState} from 'react';
import Theme from './components/Theme';


function App() {
 
  const [showAddForm,setShowAddForm] = useState(false);
  const [darkTheme,setDarkTheme] = useState(false);
  const [Assignos,setAssignos] = useState( [

    {
  
    Unit:'Development Studies',
    Complexity:'Easy',
    Duration: 30
  
    },
  
    {
  
    Unit:'Object Oriented Programming',
    Complexity:'Hard',
    Duration: 60
  
    },
  
    {
  
    Unit:'E-commerce',
    Complexity:'Medium',
    Duration: 120
  
    },
  
  ])

  const addAssignos = text=>{
      const newAssignos=[...Assignos,{text}]
      setAssignos(newAssignos);
  }
 
  
   

  return (
       <div className = "container" style={{backgroundColor: darkTheme ? 'rgb(7, 7, 31)':'white',color:darkTheme ? 'white': 'black'}} >
       <Header/>
       <Theme darkThemeToggle={()=>setDarkTheme(!darkTheme)}/>
       <Button toggleForm={()=>setShowAddForm(!showAddForm)}/>
       {showAddForm ?<AddForm addAssignos={addAssignos}/>: 'Click on Add button to add an assignment'}
       <Assignments assignmentsAvailable = {Assignos}/>
       <p style={{fontFamily:'sans-serif'}}>@ MoshTech</p>
      </div>
  );
}

export default App;
