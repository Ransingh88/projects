import styled from "styled-components"



export function Slide4() {

    const Set12 = styled.div`{
   
     img{
       border-radius:10px;
     
     }
     img:nth-child(1){
       
         color:grey;
         margin:10px;
         margin-bottom:20px;
          -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 28%;
}
    img:nth-child(2){
  
    width: 35%;
}
    img:nth-child(3){
        margin:10px;
        margin-bottom:20px;
          
         -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
     width: 28%;
}
.crousel{
    width:20%;
    display:flex;
  padding:2rem;
    text-align:center;
font-size: 4rem;
margin:auto;

}
}`
    return <>
        <Set12>
            <div style={{ marginTop: "30px", }}>
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Dhairyaraj.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Teera.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Shubhangi.png" alt="" />
            </div>
            <div className="crousel">
                <div style={{color:"grey"}}>•</div>
                <div style={{ color:"green" }}>•</div>
                <div style={{color:"grey"}}>•</div>
            </div>
           
            </Set12>
        </>
}