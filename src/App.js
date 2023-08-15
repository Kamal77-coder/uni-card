import './App.css';
import Header from './components/header';
import Middle from './components/middle';
import OnePercentComp from './components/onePercent';
import MobileDescription from './components/blackBgComp';
import Note from './components/note';
import Download from './download';
import Security from './components/security';
import { 
  onePercentComponentProps
} from './components/constants/componentProps';
import Experience from './components/experience';
import Footer from './footer';
import LifetimeFree from './free';



function App() {
  const onScroll = () => {
    console.log('hello')
  }
  return (
    <div className='page' onScroll={onScroll}>
       <Header/>
    <Middle/>
    <div className='middle-section'>
    {
      onePercentComponentProps.map((prop)=> {
        return <OnePercentComp
        {...prop}
        />
      })
    }
    </div>
    <LifetimeFree/>
    <MobileDescription/>
    <Experience/>
    <Note/>
    <Download/>
    <Security/>
    <Footer/>
    </div>
   
  );
}

export default App;
