import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from "react-router-dom";


const theme = createTheme();

function SelectCategory() {
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 500 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">I'm having a problem with...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"installation"}>installing Grafana (on K8s, Windows, Raspberry Pi, etc)</MenuItem>
          <MenuItem value={"configuration"}>networking / configuring Grafana (reverse proxy, grafana.ini, migrating to MySQL)</MenuItem>
          <MenuItem value={"authenticating"}>authenticating Grafana (LDAP, SAML, Oauth, etc)</MenuItem>
          <MenuItem value={"administrating"}>administrating Grafana (Roles, Teams, Users, Orgs, etc)</MenuItem>
          <MenuItem value={"alerting"}>Grafana Alerting</MenuItem>
          <MenuItem value={"datasources"}>a specific datasource (Prometheus, Loki, InfluDB, connection issues, query issues, etc)</MenuItem>
          <MenuItem value={"visualizations"}>a specific visualization (Time Series, Table, Bar Chart, etc)</MenuItem>
          <MenuItem value={"dashboards"}>a general dashboard feature (data-links, time-picker, templating, value-mapping, etc)</MenuItem>
        </Select>
        <Link
          to={{
            pathname: `/${category}`,
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
      </FormControl>
    </Box>
  );
}

export default function Home() {
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
              Lets get you some help
            </Typography>
            <br />
            <Typography component="h1" variant="h6">
              1) I'm having a problem with...
            </Typography>
            <br />
            <SelectCategory />
            <br />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
