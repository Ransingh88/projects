import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const style1={
  width: 30,
  margin:"0 2px",
  borderRadius:"50%",
  cursor: "pointer"
}

export const BasicDetails = ({ data, setData, navigation }) => {
  const { sharedPerson, email, mob } = data;
  return (
    <div>
      <Container maxWidth="xs" style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            backgroundImage: "linear-gradient(to right, #1e966e , #04b09b)",
            width: 70,
            height: 8,
            borderRadius:4,
            marginRight:10
          }}
        ></div>
        <p style={{fontSize:12}}>Step 1 of 4</p>
      </Container>
      <Container
        style={{
          height: 385,
          borderRadius: 10,
          boxShadow: " 4px 4px 5px gray, -4px -4px 5px gray",
          textAlign: "left",
          paddingTop: 15,
          backgroundColor: "white",
        }}
        maxWidth="xs"
      >
        <div style={{ fontSize: 15, display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: 10 }}>Fetch Details from: </span>
          <img
            style={style1}
            src="https://i.pinimg.com/236x/f7/99/20/f79920f4cb34986684e29df42ec0cebe.jpg"
            alt=""
          />
          <img
            style={style1}
            src="https://img-authors.flaticon.com/google.jpg"
            alt=""
          />
        </div>
        <TextField
          label="Full Name"
          name="sharedPerson"
          value={sharedPerson}
          onChange={setData}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="E-mail"
          name="email"
          value={email}
          onChange={setData}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          type="number"
          label="Mobile Number"
          name="mob"
          value={mob}
          onChange={setData}
          margin="normal"
          fullWidth
          required
        />
        <input style={{ marginTop: 20, cursor: "pointer" }} type="checkbox" />
        <span style={{ fontSize: 10 }}>
          I agree with the Terms of Use and Privacy Policy thereby the safety of
          information shared with and by ImpactGuru.
        </span>

        <p style={{ textAlign: "center", fontSize: 14, margin: "12px 0 0 0" }}>
          Already a member ? <span style={{ color: "green" }}>Login Here</span>
        </p>

        <Button
          style={{
            marginLeft: "25%",
            backgroundColor: "#21936a",
            color: "white",
            marginTop: "1rem",
            borderRadius: 20,
            width: 200,
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
