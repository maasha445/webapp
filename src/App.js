import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './components/firebase/Firebase';


function App() {
  const [usageData, setUsageData] = useState({});

  useEffect(() => {
    let dataRef = fire.database().ref('Variable');
    dataRef.on('value', snapshot=>{
      const data = snapshot.val();
      setUsageData(data);
    });

  }, []);

  return (
    <div className="ui container">
      <span>
        <h1>Energy Consumption Dashboard</h1>
      </span>
      <br/>
      <hr/>
      <div>
        <h3 style={{display:'inline-block'}}>Bill Monthly: {usageData['Bill Monthly']}</h3><br/>
        <h3 style={{display:'inline-block'}}>Consumption (kWh): {usageData['Consumption kWh']}</h3><br/>
        <h3 style={{display:'inline-block'}}>Current (A): {usageData['Current A']}</h3><br/>
        <h3 style={{display:'inline-block'}}>Power (kW): {usageData['Power kW']}</h3>
      </div>
    </div>
  );
}

export default App;
