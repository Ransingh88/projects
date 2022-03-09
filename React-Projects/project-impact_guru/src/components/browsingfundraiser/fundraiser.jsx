import styles from "./style.module.css";
import { useState } from "react";
import PatientList from "./PatientList";
import { patentInformation } from "./data.json";

export function FundRaiser() {
  const [num, setNum] = useState(5);
  const [data, setData] = useState(patentInformation);
  const [search, setSearch] = useState("");

  const handleToMedical = () => {
    let newData = [...patentInformation];
    newData = newData.filter((el) => {
      return el.typeOfneed == "medical";
    });
    setData(newData);
  };
  const handleToNgo = () => {
    let newData = [...patentInformation];
    newData = newData.filter((el) => {
      return el.typeOfneed == "NGO";
    });
    setData(newData);
  };
  const handleToCreativeIdea = () => {
    let newData = [...patentInformation];
    newData = newData.filter((el) => {
      return el.typeOfneed == "creative idea";
    });
    setData(newData);
  };
  const handleToChange = (e) => {
    setSearch(e.target.value);
  };
  const handleInput = (search) => {
    let newData = [...patentInformation];
    newData = newData.filter((el) => {
      return el.typeOfneed == search;
    });
    setData(newData);
  };

  return (
    <div className={styles.mainCont} style={{ background: "#F7F7F7" }}>
      <div className={styles.imagediv}>
        <p
          style={{
            textAlign: "center",
            marginTop: "130px",
            color: "white",
            fontSize: "45px",
            fontFamily: "sans-serif",
          }}
        >
          Browse Fundraisers
        </p>
        <div className={styles.collectiondiv}>
          <div className={styles.textcontainer}>
            <div>
              <h1>&#8377;1500+ Cr*</h1>
              <p>Total amount raised so far</p>
            </div>
            <div>
              <h1>5 Lakh +</h1>
              <p>Lives impacted across the globe</p>
            </div>
            <div>
              <h1>165 +</h1>
              <p>No. of countries raised funds from</p>
            </div>
            <div>
              <h1>₹30 Lakh</h1>
              <p>Fastest funds raised in 24 hr</p>
            </div>
            <div>
              <h1>80G</h1>
              <p>80G Tax benefits for Indian donors</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inputbox}>
        <div className={styles.searchbox}>
          <input onChange={handleToChange} type="text" placeholder="Search for Fundraiser" />
          <button onClick={() => handleInput(search)} style={{ background: "white", border: "none" }}>
            <img
              style={{ width: 25 }}
              src="https://i2.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640"
            ></img>
          </button>
        </div>
        <div className={styles.selection}>
          <select
            style={{
              border: "none",
              outline: "none",
              fontWeight: "bolder",
              marginLeft: "5px",
              height: "7vh",
            }}
            value="FILTER"
          >
            <option value="">FILTER</option>
            <option value="most funded"> &#8377; MOST FUNDED</option>
            <option value="urgent">&#8377; URGENT</option>
            <option value="tax">&#8377; TAX</option>
          </select>
        </div>
      </div>
      <div className={styles.databox}>
        <div className={styles.list}>
          <div onClick={handleToMedical}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNMoEDl3Y3hs0ctTe_HGnywwT-BiKICdFfA&usqp=CAU"></img>
            <p>Medical</p>
          </div>
          <div onClick={handleToNgo}>
            <img src="https://i.pinimg.com/originals/37/19/ec/3719eceb9a3562487051c17741aad593.png"></img>
            <p>NGO</p>
          </div>
          <div>
            <img src="https://static.thenounproject.com/png/104631-200.png"></img>
            <p>Personal Cause</p>
          </div>
          <div onClick={handleToCreativeIdea}>
            <img src="https://mpng.subpng.com/20200219/sjz/transparent-idea-icon-creative-icon-ipad-icon-5e4def8ee1c764.6668120315821659029248.jpg"></img>
            <p>Creative Ideas</p>
          </div>
          <div>
            <img src="https://image.flaticon.com/icons/png/512/2162/2162957.png"></img>
            <p>Acid Attacks</p>
          </div>
        </div>
        <div className={styles.patient}>
          <PatientList pataientData={data} load={num} />
        </div>
      </div>
      <button className={styles.loadbtn} onClick={() => setNum(num + 2)}>
        LOAD MORE
      </button>
    </div>
  );
}
