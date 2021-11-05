import './App.css';
import AccordionCard from './AccordionCard';
import data from './data'

function App() {
  
  return (
    <div className="main">
      <div className="main__heading">

      <h1>Accordion</h1>
      </div>
      <div className="main__content">
        <div className="content__head"><h1>Confused? <br /> Read Question & Answer</h1></div>
        <div className="content__card">
          {
            data.map((ele) => {
              return <AccordionCard key={ele.id} {...ele}/>
            })
          }
      
        </div>
      </div>
    </div>
  );
}

export default App;
