import { Box, GlobalStyles, CircularProgress } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import colors from '../../constants/colors.js';

import { motion } from 'framer-motion';

import Logo from './Logo.jsx';

const RootStyle = styled( 'div' )(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

export const ProgressBarStyle = () => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        '#nprogress': {
          pointerEvents: 'none',
          '& .bar': {
            top: 0,
            left: 0,
            height: 2,
            width: '100%',
            position: 'fixed',
            zIndex: theme.zIndex.snackbar,
            backgroundColor: theme.palette.primary.main,
            boxShadow: `0 0 2px ${theme.palette.primary.main}`,
          },
          '& .peg': {
            right: 0,
            opacity: 1,
            width: 100,
            height: '100%',
            display: 'block',
            position: 'absolute',
            transform: 'rotate(3deg) translate(0px, -4px)',
            boxShadow: `0 0 10px ${theme.palette.primary.main},
            0 0 5px ${theme.palette.primary.main}`,
          },
        },
      }}
    />
  );
};

const LoadingScreen = ({ ...other }) => (
  <>
    <Box sx={{ width: '100%' }}>
      <CircularProgress variant="determinate" />
    </Box>

    <RootStyle {...other}>
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <Logo sx={{ width: 105, height: 100, display: 'flex' }} />
      </motion.div>

      <Box
        animate={{
          scale: [1.2, 1, 1, 1.2, 1.2],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
        sx={{
          width: 100,
          height: 100,
          borderRadius: '25%',
          position: 'absolute',
          border: ( theme ) => `solid 3px ${colors.lightMenuColorText}`,
        }}
      />

      <Box
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{
          ease: 'linear',
          duration: 3.2,
          repeat: Infinity,
        }}
        sx={{
          width: 120,
          height: 120,
          borderRadius: '25%',
          position: 'absolute',
          border: ( theme ) => `solid 8px ${colors.lightMenuColorText}`,
        }}
      />
    </RootStyle>
  </>
);

export default LoadingScreen;
