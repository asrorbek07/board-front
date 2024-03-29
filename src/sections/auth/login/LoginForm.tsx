import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Iconify from '../../../components/iconify';


export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  const propsCheckbox = {
    name: 'remember',
    label: 'Remember me'
  }

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Stack direction='row' alignItems='center'>
          <Checkbox {...propsCheckbox} name='remeber' />
          <Typography >
            Eslab qolish.
          </Typography>
        </Stack>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
