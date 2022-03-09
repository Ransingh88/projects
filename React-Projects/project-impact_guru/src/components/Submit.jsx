import React from 'react'
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Link } from "react-router-dom";

export const Submit = ({data}) => {
    console.log(data);
    axios.post("http://localhost:3001/patentInformation", data);
    return (
      <Container style={{ marginTop: 100 }} maxWidth="xs">
        <p>
          Thank you for registering with us, We will be shortly in touch with
          you
        </p>
        <img
          style={{
            width: "100%",
            borderRadius: 5,
            marginTop: 30,
            boxShadow: "4px 4px 10px gray",
          }}
          src="https://cdn.dribbble.com/users/1606913/screenshots/5323554/thanks.gif"
          alt=""
        />
        <button
          style={{
            backgroundColor: "#ff8502",
            color: "white",
            fontWeight: 800,
            marginTop: 40,
            padding: "10px 20px",
            borderRadius: 20,
            border: "none",
            boxShadow: "0 4px 10px gray",
            cursor: "pointer",
          }}
        >
          <Link style={{textDecoration:"none", color:"white"}} to="/fundraisers">SEE YOUR POST</Link>
        </button>
      </Container>
    );
}
