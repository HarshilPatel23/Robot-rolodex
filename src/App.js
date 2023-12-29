
import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App=()=>{
  const [searchField,setSearchField]=useState('')
  const [robots,setRobots]=useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
        // called function method
        .then(users=>setRobots(users))
  },[])

  const onSearchChange=(event)=>{
    const searchString=event.target.value.toLowerCase()
    setSearchField(searchString)         
  }
  const filterRobots=robots.filter((robot)=>{
    
    return robot.name.toLowerCase().includes(searchField);
  });
  return(
    <div className="App">
     <h1 className='app-tittle'>ROBOTS</h1>
     <SearchBox onChangeHandler={onSearchChange} 
       placeholder={'search robots'}
       className={'robots-search-box'}/>
       {console.log(filterRobots)}    
      <CardList robots={filterRobots}/>
    </div>
  )
}

// class App extends Component {
//   constructor(){                                        //no1 thing will run 
//     super();
//     this.state={
//       monsters:[],
//       searchString:'',
//     };  
//   }
//   componentDidMount(){                                  // run no3
//     fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
//     // called function method
//     .then(users=>this.setState(()=>{      
//       return {monsters:users}
//     },
//     ))
//   }
//   onSearchChange=(event)=>{
//     const searchString=event.target.value.toLowerCase()
//     this.setState(()=>{
//       return {searchString}
//     });          
//   }
//   render(){                                             // run no2

//     const {monsters,searchString}=this.state;
//     const {onSearchChange}=this;

    
//     const filtermonster=monsters.filter((monster)=>{
//       return monster.name.toLowerCase().includes(searchString);
//       });
    
    
//     return (
//       <div className="App">
//         <h1 className='app-tittle'>ROBOTS</h1>
//         <SearchBox onChangeHandler={onSearchChange} 
//           placeholder={'search robots'}
//           className={'monsters-search-box'}/>
          
//         <CardList monsters={filtermonster}/>
//       </div>
//     );
//   }

// }

export default App;
