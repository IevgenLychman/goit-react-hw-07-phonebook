import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 1 }}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/IevgenLychman/goit-react-hw-08-phonebook"
      >
        IevgenLychman
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}
