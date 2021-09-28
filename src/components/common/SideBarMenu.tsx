import { Grid, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ExtensionIcon from '@mui/icons-material/Extension';

import React from 'react';
import SideMenuItem from './SideMenuItem';

const SideBarMenu = () => {
    return (
        // <div>
            <Box sx={{p: 1 }}>
            {/* <Paper sx={{ p: 1, margin: 'auto', maxWidth: 350, flexGrow: 1}} elevation={3}> */}
                <Grid container direction='column' alignItems='center' justifyContent='center'
                    style={{ minHeight: '85vh' }}>
                    <Grid item xs />

                    <Grid item xs={1}>
                        <SideMenuItem title='Publish'>
                            <CloudUploadIcon />
                        </SideMenuItem>
                    </Grid>

                    <Grid item xs={1}>
                        <SideMenuItem title='Consume'>
                            <CloudDownloadIcon />
                        </SideMenuItem>
                    </Grid>

                    <Grid item xs>
                        <SideMenuItem title='Plugins'>
                            <ExtensionIcon />
                        </SideMenuItem>
                    </Grid>

                    <Grid item xs={5}>
                        <SideMenuItem title='Settings'>
                            <SettingsIcon />
                        </SideMenuItem>
                    </Grid>

                </Grid>
            {/* </Paper> */}
            </Box>
        // </div >
    );
}

export default SideBarMenu;