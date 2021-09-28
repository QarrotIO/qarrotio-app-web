import React, { useState, useMemo } from 'react';
import { createTheme, CssBaseline, PaletteMode, Theme, ThemeProvider } from '@mui/material';
import Layout from './components/common/Layout';
import getDesignTokens from './Theme';

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const theme: Theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;