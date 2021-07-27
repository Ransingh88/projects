import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};




export function Slide3({ data ,data1}) {
  console.log(data[0]);
    return <>
   <Carousel responsive={responsive} autoPlay={true}  containerClass="carousel-container" renderDotsOutside={true} showDots={true}   autoPlaySpeed={2000} draggable={false} transitionDuration={500}   infinite={true}>
        <div className="cart"><img src={data[0]} alt="" />
          <hr style={{ width: "70%" ,alignItems:"center",color:"grey"}}></hr>
                <h4>{data1[0]}</h4>
                <h5>Maximum Raised</h5>
          <h5  >₹12 Lakh</h5></div>
        <div className="cart"><img src={data[1]} alt="" />
           <hr style={{ width: "70%" ,alignItems:"center",color:"grey"}}></hr>
                <h4>{data1[1]}</h4>
                <h5>Maximum Raised</h5>
          <h5 >₹14 Lakh</h5>
          
                </div>
            


        <div className="cart"><img src={data[2]} alt="" />
           <hr style={{ width: "70%" ,alignItems:"center",color:"grey"}}></hr>
                <h4>{data1[2]}</h4>
                <h5>Maximum Raised</h5>
          <h5 >₹17 Lakh</h5>
          </div>
        <div className="cart"><img src={data[3]} alt="" />
           <hr style={{ width: "70%" ,alignItems:"center",color:"grey"}}></hr>
                <h4>{data1[3]}</h4>
                <h5>Maximum Raised</h5>
          <h5 >₹11 Lakh</h5>
          </div>
        <div className="cart"><img src={data[4]} alt="" />
           <hr style={{ width: "70%" ,alignItems:"center",color:"grey"}}></hr>
                <h4>{data1[4]}</h4>
                <h5>Maximum Raised</h5>
          <h5 >₹16 Lakh</h5></div>
        <div className="cart"><img src={data[5]} alt="" />
           <hr style={{ width: "70%" ,alignItems:"center",color:"grey"}}></hr>
                <h4>{data1[5]}</h4>
                <h5>Maximum Raised</h5>
          <h5 >₹9 Lakh</h5></div>
        <div className="cart"><img src={data[6]} alt="" />
           <hr style={{ width: "70%" ,alignItems:"center",color:"grey"}}></hr>
                <h4>{data1[6]}</h4>
                <h5>Maximum Raised</h5>
          <h5 >₹14 Lakh</h5></div>
        <div className="cart"><img src={data[7]} alt="" />
           <hr style={{ width: "70%" ,alignItems:"center",color:"grey"}}></hr>
                <h4>{data1[7]}</h4>
                <h5>Maximum Raised</h5>
          <h5 >₹19 Lakh</h5></div>
        

      </Carousel>;
   
        </>
}