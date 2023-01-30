import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from "react-router-dom";
import StartOver from '../nav/StartOverButton';


const theme = createTheme();

function SelectCategory() {
  const [choice, setChoice] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setChoice(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 500 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">I'm having a problem with...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={choice}
          label="Choice"
          onChange={handleChange}
        >
          <MenuItem value={"rule"}>Creating an alert rule</MenuItem>
          <MenuItem value={"notification-channel"}>Configuring a notification channel</MenuItem>
          <MenuItem value={"templating"}>Creating a templated notification</MenuItem>
          <MenuItem value={"flapping"}>Resolving a flapping alert</MenuItem>
          <MenuItem value={"migrating"}>Migrating from the legacy alerting platform</MenuItem>
          <MenuItem value={"provisioning"}>Provisioning alerts</MenuItem>
          <MenuItem value={"alertmanager"}>Using an external Alertmanager</MenuItem>
        </Select>  
          <Link
              to={{
                pathname: `/alerting/${choice}`,
              }}
              className={`btn primary`}
            >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Link>
          <Link
              to={{
                pathname: `/`,
                // search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
              }}
              className={`btn primary`}
            >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Back
            </Button>         
          </Link> 
          <StartOver />
      </FormControl>
    </Box>
  );
}

export default function Alerting() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      emails: data.get('emails'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography component="h1" variant="h3">
              GRAFANA TROUBLESHOOTER
            </Typography>
            <br />
            <Typography component="h1" variant="h4">
              ALERTING
            </Typography>
            <br />
            <Typography component="h1" variant="h6">
              2) I'm having a problem with...
            </Typography>
            <br />
            <SelectCategory />
            {/* <br />
            <Typography component="h1" variant="h6">
              2) How long should the test stacks last?
            </Typography>
            <br />
        <SelectExpiration />*/}
            <br />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
