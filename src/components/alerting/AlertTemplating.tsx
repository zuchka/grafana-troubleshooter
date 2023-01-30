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
import BugButton from '../nav/BugButton';
import StillStuckButton from '../nav/StillStuckButton';

const theme = createTheme();

function SelectCategory() {
  const [choice, setChoice] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setChoice(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 500 }}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">I'm having a problem with...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={choice}
          label="Choice"
          onChange={handleChange}
        >
          <MenuItem value={"rule"}>Creating an alert rule</MenuItem>
          <MenuItem value={"notify-channel"}>Configuring a notification channel</MenuItem>
          <MenuItem value={"templating"}>Creating a templated notification</MenuItem>
          <MenuItem value={"flapping"}>Resolving a flapping alert</MenuItem>
          <MenuItem value={"migrating"}>Migrating from the legacy alerting platform</MenuItem>
          <MenuItem value={"provisioning"}>Provisioning alerts</MenuItem>
          <MenuItem value={"alertmanager"}>Using an external Alertmanager</MenuItem>
        </Select>   */}
          
      </FormControl>
    </Box>
  );
}

export default function AlertingTemplating() {
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography component="h1" variant="h3">
              GRAFANA TROUBLESHOOTER
            </Typography>
            <br />
            <Typography component="h1" variant="h4">
              ALERT MESSAGE TEMPLATING
            </Typography>
            <br />
            <Typography component="h1" variant="h6">
              Troubleshooting Checklist:
            </Typography>
            <ul>
              <li>Check your templating syntax</li>
                <ul>
                  <li>Grafana's alert notifications use Go Templating. If this method is new to you, <a href="https://pkg.go.dev/text/template">refer to the official docs</a>.</li>
                  <li><a href="https://camlittle.com/go-template-validation">here is a free tool</a> to help you validate your Go Templates</li>
                </ul>
              <li>Read this popular thread on our forum. It includes templating examples and step-by-step instructions</li>
              <li>Read Grafana's official documentation on alert templating</li>
              <li>If you are self-hosting grafana, make sure you are using the newest version of alerting.</li>
              <li>Increase the verbosity of Grafana's server logs to DEBUG and look for errors</li>
              <li>Make sure that your notification channel is working properly without any templating</li>
              <li>Start with a simple template and slowly add complexity</li>
              <li>Search our community forum for related threads. This is a popular topic.</li>
            </ul>
            <Link
                to={{
                  pathname: `/alerting`,
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
            <StillStuckButton />
            <BugButton />
            <StartOver />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
