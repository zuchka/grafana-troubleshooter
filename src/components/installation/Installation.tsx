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
  const [platform, setPlatform] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 500 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">I'm having a problem with...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={platform}
          label="Platform"
          onChange={handleChange}
        >
          <MenuItem value={"osx"}>Mac OSx</MenuItem>
          <MenuItem value={"windows"}>Windows</MenuItem>
          <MenuItem value={"linux"}>Linux</MenuItem>
          <MenuItem value={"docker"}>Docker</MenuItem>
          <MenuItem value={"kubernetes"}>Kubernetes</MenuItem>
          <MenuItem value={"Raspberry Pi"}>Raspberry Pi</MenuItem>
        </Select>       
          <Link
              to={{
                pathname: `/installation/${platform}`,
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

export default function Installation() {
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
              INSTALLATION
            </Typography>
            <br />
            <Typography component="h1" variant="h6">
              2) I'm trying to install grafana on...
            </Typography>
            <br />
            <SelectCategory />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
