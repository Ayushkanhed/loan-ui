import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;