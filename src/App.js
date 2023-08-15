import './App.css';
import Header from './components/header';
import Middle from './components/middle';
import OnePercentComp from './components/onePercent';
import MobileDescription from './components/blackBgComp';
import { 
  onePercentComponentProps
} from './components/constants/componentProps';



function App() {

  return (
    <div className='page'>
       <Header/>
    <Middle/>
    {
      onePercentComponentProps.map((prop)=> {
        return <OnePercentComp
        {...prop}
        />
      })
    }
    <MobileDescription/>
    </div>
   
  );
}

export default App;
