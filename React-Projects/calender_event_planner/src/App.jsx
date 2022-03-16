import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import data from './data'

function App() {
  const [eventss, setEventss] = useState(true);
  const [eventModal,setEventModal] = useState(false)
  const [title,setTitle] =useState('')
  const [time,setTime] =useState('')
  const [desc,setDesc] =useState('')
  const [dataId,setDataId] = useState(null)
  const [appData,setAppData] = useState(data)
  const [showEventModal,SetShowEventModal] = useState(false)
  const [eventId,setEventId] = useState(null)

 



useEffect(()=>{
  console.log(appData,'-----')
},[appData])

  // let data = [
  //   {
  //     "time": 1,
  //     "events" : [{"title":"Google Meet", "events_time":"12am to 2pm","desc":"description"}]
  //   },
  //   {
  //     "time": 2,
  //     "events" : []
  //   },
  //   {
  //     "time": 3,
  //     "events" : []
  //   },
  //   {
  //     "time": 4,
  //     "events" : []
  //   },
  //   {
  //     "time": 5,
  //     "events" : []
  //   },
  //   {
  //     "time": 6,
  //     "events" : []
  //   },
  //   {
  //     "time": 7,
  //     "events" : []
  //   },
  //   {
  //     "time": 8,
  //     "events" : [{"title":"Google Meet", "events_time":"12am to 2pm","desc":"description"},{"title":"React Global", "events_time":"1am to 4pm","desc":"description"}]
  //   },
  //   {
  //     "time": 9,
  //     "events" : []
  //   },
  //   {
  //     "time": 10,
  //     "events" : []
  //   },
  //   {
  //     "time": 11,
  //     "events" : []
  //   },
  //   {
  //     "time": 12,
  //     "events" : []
  //   }
    
  // ]

  const handleClick = (id)=>{
    setDataId(id)
    setEventModal(true)

  }
  const handlePlanner = (id)=>{
    setEventId(id)
    // setEventModal(false)
    SetShowEventModal(true)
    setEventModal(false)
    // alert("kkhk")
  }
  const handleCloseShowEventData = ()=>{
    setEventModal(false)
    SetShowEventModal(false)
  }
  const handleCreateEvent = ()=>{
    console.log(title,time,desc)
    data[dataId].events.push({"title":title, "events_time":time,"desc":desc})
    console.log(data)
    setTitle('')
    setTime('')
    setDesc('')
    setEventModal(false)
  }
  const handleCloseModal= ()=>{
    setEventModal(false)
  }

  const handleDeleteEventPlanner= ()=>{
    // appData[dataId].events[eventId]

    appData[dataId].events.splice(eventId,1)
    console.log(appData,);
    setEventModal(false)
    SetShowEventModal(false)
  }
  return (
    <div className="App">
      <div className="app__header">
        <h1>Calender Event Planner</h1>
      </div>
      <div className="app_content">
        {data.map((ele,k) => {
          return (
            <div key={k} className="timeSlot_box" onClick={()=>handleClick(k)}>
              <p className="time_element">{ele.time} AM</p>
              <div>
                {ele.events.length <=0 ? (
                  <div className="hr_line">  </div>
                ) : (
                  <div className="planner_events">
                    {ele.events.map((item,id)=>(
                      <>
                      
                       <div className="planner" onClick={()=>handlePlanner(id)}>
                       <p className="planner_head">{item.title}</p>
                       <p className="planner_time">{item.events_time}</p>
                     </div>
                     
                     </>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {eventModal && <div className="app_form">
          <h2>Create Event</h2>
          <div>
          <label htmlFor="">Title</label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          </div>
          <div>
          <label htmlFor="">Time</label>
          <input type="time" value={time} onChange={(e)=>{setTime(e.target.value)}}/>
          </div>
          <div>
          <label htmlFor="">Description</label>
          <textarea name="" id="" cols="30" value={desc} rows="4" onChange={(e)=>{setDesc(e.target.value)}}></textarea>
          </div>
          <span className="app_formBtn">
            <button onClick={handleCloseModal}>cancel</button>
            <button onClick={handleCreateEvent}>Save</button>
          </span>
        </div>}

        {showEventModal && <div className="app_form">
          <h2>Event</h2>

          <div className="showEventData">
          <h3>{appData[dataId].events[eventId].title}</h3>
          <p>{appData[dataId].events[eventId].events_time}</p>
          <p>{appData[dataId].events[eventId].desc}</p>

          </div>
          <span className="app_formBtn">
            <button onClick={handleCreateEvent}>Edit</button>
            {/* <button onClick={handleCreateEvent}>Save</button> */}
            <button onClick={handleDeleteEventPlanner}>Delete</button>
            <button onClick={handleCloseShowEventData}>close</button>
          </span>
        </div>}

      </div>
    </div>
  );
}

export default App;
