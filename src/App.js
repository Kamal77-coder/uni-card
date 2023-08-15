import './App.css';
import Header from './components/header';
import Middle from './components/middle';
import OnePercentComp from './components/onePercent';
import { 
  onePercentProps ,
  fivexProps,
  forexProps
} from './components/constants/componentProps';



function App() {

  return (
    <div className='page'>
       <Header/>
    <Middle/>
    <OnePercentComp
   {...onePercentProps}
    />
     <OnePercentComp
    {...fivexProps}
    />
      <OnePercentComp
   {...forexProps}
    />
    </div>
   
  );
}

export default App;
