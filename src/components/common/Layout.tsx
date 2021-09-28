import { Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import SideBarMenu from "./SideBarMenu";


const Layout = () => {
    return (
        <Grid container direction='column' spacing='2'>
            <Grid container>
                <Header />
            </Grid>
            <Grid container direction='row'>
                <SideBarMenu />
            </Grid>
        </Grid>
    )
}

export default Layout;