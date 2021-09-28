import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import { FC } from "react";

interface SideMenuItemProps {
    title: string,
}

const SideMenuItem: FC<SideMenuItemProps> = ({ title, children }) => {
    return (
        <Tooltip TransitionComponent={Zoom} title={title} placement="right">
            <IconButton size='medium' color='default'>
                {children}
            </IconButton>
        </Tooltip>
    )
}

export default SideMenuItem;