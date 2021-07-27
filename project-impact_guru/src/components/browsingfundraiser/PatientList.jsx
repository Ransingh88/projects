import styles from "./style.module.css";
import { Link } from "react-router-dom";

function PatientList({ pataientData, load }) {
  console.log("pataientData" + pataientData.length);

  return (
    <div className={styles.griddisplay}>
      {pataientData.slice(0,load).map((el) => (
        <div
          key={el.id}
          style={{
            height: "auto",
            background: "#FFFFFF",
            boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              height: 150,
              border: "1px solid white",
              backgroundImage: `url(${el.backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: 10,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "38%",
                borderTopLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                float: "left",
                background: "#21936A",
              }}
            >
              <p
                style={{
                  color: "#FFFFFF",
                  lineHeight: "4px",
                  letterSpacing: 1,
                  fontSize: "9px",
                  fontWeight: "bolder",
                }}
              >
                {el.tax}
              </p>
            </div>
            <div
              style={{
                width: "32%",
                borderTopRightRadius: "10px",
                borderBottomLeftRadius: "10px",
                float: "right",
                background: "#E63427",
              }}
            >
              <p
                style={{
                  color: "#FFFFFF",
                  lineHeight: "4px",
                  letterSpacing: 1,
                  fontSize: "9px",
                  fontWeight: "bolder",
                }}
              >
                {el.Emergency}
              </p>
            </div>
            <div
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                position: "relative",
                left: 90,
                marginTop: "135px",
                background: "#FFF",
              }}
            >
              <img src={el.typeOfEmergency} alt="" />
            </div>
          </div>
          <div
            style={{
              width: "95%",
              height: "7vh",
              border: "1px solid white",
              margin: "auto",
              marginTop: "1%",
            }}
          >
            <p
              style={{
                lineHeight: "normal",
                color: "#OOO",
                fontSize: 15,
              }}
            >
              {el.description}
            </p>
          </div>
          <div
            style={{
              margin: "auto",
              color: "#888",
              fontSize: 13,
            }}
          >
            <p>{el.sharedPerson}</p>
          </div>
          <div
            style={{
              height: "25px",
              border: "1px solid gray",
              marginLeft: "15%",
              float: "left",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 10px",
              marginRight: 3,
            }}
          >
            <img
              src="https://image.flaticon.com/icons/png/512/1384/1384023.png"
              style={{
                width: "15px",
                height: "15px",
              }}
            />
            <p style={{ marginLeft: 5, fontSize: 14 }}>Share</p>
          </div>
          <div
            style={{
              height: "25px",
              border: "1px solid gray",
              float: "left",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 8px",
              marginLeft: 3,
            }}
          >
            <img
              src="https://image.flaticon.com/icons/png/512/2111/2111564.png"
              style={{
                width: "15px",
                height: "15px",
              }}
            ></img>
            <p style={{ marginLeft: 5, fontSize: 14 }}>Share</p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: 20,
                fontSize: 13,
                color: "#45ad89",
              }}
            >
              <p>
                &#8377; {el.raisedFund}{" "}
                <span style={{ fontSize: 10 }}>Raised</span>
              </p>
              <p>{el.coverdfund}</p>
            </div>
            <div
              style={{
                height: 7,
                marginTop: "15px",
                borderRadius: 10,
                background: "#ddd",
              }}
            >
              <div
                style={{
                  width: `${el.coverdfund}`,
                  backgroundColor: "#21936A",
                  height: 7,
                  boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                  borderRadius: 10,
                }}
              ></div>
            </div>
          </div>
          <button className={styles.donatebtn}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/fundraisers/help-patient"
            >
              DONATE
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
}
export default PatientList;
