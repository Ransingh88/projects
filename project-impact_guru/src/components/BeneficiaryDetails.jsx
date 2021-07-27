import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const BeneficiaryDetails = ({ data, setData, navigation }) => {
  const { beneficiary, loan, religious, city } = data;

  return (
    <div>
      <Container
        maxWidth="xs"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div
          style={{
            backgroundImage: "linear-gradient(to right, #1e966e , #04b09b)",
            width: 150,
            height: 8,
            borderRadius: 4,
            marginRight: 10,
          }}
        ></div>
        <p style={{ fontSize: 12 }}>Step 2 of 4</p>
      </Container>
      <Container
        style={{
          height: 335,
          borderRadius: 10,
          boxShadow: " 4px 4px 5px gray, -4px -4px 5px gray",
          paddingTop: 15,
        }}
        maxWidth="xs"
      >
        <TextField
          label="Beneficiary Name"
          name="beneficiary"
          value={beneficiary}
          onChange={setData}
          margin="normal"
          fullWidth
          required
        />

        <TextField
          label="Do you have any loan or debt ?"
          name="loan"
          value={loan}
          onChange={setData}
          margin="normal"
          fullWidth
          required
        />

        <TextField
          label="Is this related to Politics or Religious ?"
          name="religious"
          value={religious}
          onChange={setData}
          margin="normal"
          fullWidth
          required
        />

        <TextField
          label="City"
          name="city"
          value={city}
          onChange={setData}
          margin="normal"
          fullWidth
          required
        />

        <Button
          style={{
            backgroundColor: "coral",
            color: "white",
            margin: "1rem",
            width: 120,
            borderRadius: 20,
          }}
          variant="contained"
          onClick={navigation.previous}
        >
          Back
        </Button>

        <Button
          style={{
            backgroundColor: "#21936a",
            color: "white",
            margin: "1rem",
            width: 120,
            borderRadius: 20,
          }}
          variant="contained"
          onClick={navigation.next}
        >
          Next
        </Button>
      </Container>
    </div>
  );
};
