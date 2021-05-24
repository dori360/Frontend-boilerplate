import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Button } from "@material-ui/core/";
import Container from "@material-ui/core/Container";

import TextField from "@material-ui/core/TextField";
const style = {
  fontFamily: "monospace",
  color: "offwhite",
  fontSize: 27,
  marginLeft: 490,
  marginTop: 20,
};
const ButtonStyle = {
  fontFamily: "monospace",
  color: "offwhite",
  fontSize: 27,
  marginLeft: -200,
  marginTop: 100,
};

const Contact = () => {
  return (
    <Container fixed>
      <form>
        <TextField label="Full Name" style={style} />
        <TextField label="Email" style={style} />
        <TextField label="Message" style={style} />
        <Button type="submit" style={ButtonStyle}>
          Submit
        </Button>
      </form>
    </Container>
  );
};
export default Contact;
