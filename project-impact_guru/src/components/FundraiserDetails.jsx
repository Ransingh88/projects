import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const FundraiserDetails = ({ data, setData, navigation }) => {
  const { typeOfneed, description, goal } = data;
  return (
    <div>
      <Container
        maxWidth="xs"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div
          style={{
            backgroundImage: "linear-gradient(to right, #1e966e , #04b09b)",
            width: 300,
            height: 8,
            borderRadius: 4,
            marginRight: 10,
          }}
        ></div>
        <p style={{ fontSize: 12 }}>Step 3 of 4</p>
      </Container>
      <Container
        style={{
          height: 300,
          borderRadius: 10,
          boxShadow: " 4px 4px 5px gray, -4px -4px 5px gray",
          paddingTop: 15,
        }}
        maxWidth="xs"
      >
        <TextField
          label="Cause"
          name="typeOfneed"
          value={typeOfneed}
          onChange={setData}
          margin="normal"
          fullWidth
          required
        />

        <TextField
          label="Fundraiser Title"
          name="description"
          value={description}
          onChange={setData}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          type="number"
          label="Goal Amount"
          name="goal"
          value={goal}
          onChange={setData}
          margin="normal"
          fullWidth
          required
        />
        <Button
          style={{ backgroundColor: "#21936a", color: "white", margin: "1rem" }}
          variant="contained"
          onClick={() => {
            navigation.go("Submit");
          }}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};
