// @mui
import { alpha, styled } from '@mui/material/styles';
import { Card, Theme, Typography } from '@mui/material';
import { fShortenNumber } from '~/utils/formatNumber';
import Iconify from '../../../components/iconify';

const StyledIcon = styled('div')(({ theme }: { theme: Theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

interface TypeProps {
  color?: string,
  icon?: string,
  title: string,
  total: number,
  sx?: object,
}

interface ITheme extends Theme {
  palette: any
}

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }: React.PropsWithChildren<TypeProps>) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme: ITheme) => theme.palette[color].darker,
        bgcolor: (theme: ITheme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <StyledIcon
        sx={{
          color: (theme: ITheme) => theme.palette[color].dark,
          backgroundImage: (theme: ITheme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
        <Iconify icon={icon ?? ''} width={24} height={24} />
      </StyledIcon>

      <Typography variant="h3">{fShortenNumber(total)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
