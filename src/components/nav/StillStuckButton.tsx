import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



export default function StillStuckButton() {
  return (
    <Box sx={{ minWidth: 500 }}>
      <FormControl fullWidth>
          <Link
              to={{
                pathname: `/still-stuck`,
              }}
              className={`btn primary`}
            >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              I'm still stuck
            </Button>         
          </Link> 
      </FormControl>
    </Box>
  );
}


