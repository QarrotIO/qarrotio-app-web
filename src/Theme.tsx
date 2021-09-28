import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: '#ffa000'
                },
                secondary: {
                    main: '#7cb342',
                },
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: '#ffa000'
                },
                secondary: {
                    main: '#7cb342',
                },
                text: {
                    primary: '#fffff',
                    secondary: grey[500],
                },
            }),
    },
});

export default getDesignTokens