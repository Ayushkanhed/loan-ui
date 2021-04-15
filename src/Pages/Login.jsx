import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//css files
import useStyle from "../Component/Styles/LoginStyle";
import Dashboard from "./Dashboard";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
const BankData = [
    { name: "Bank" }, { name: "Bank" }, { name: "Bank" }, { name: "Bank" }, { name: "Bank" }, { name: "Bank" }, { name: "Bank" }, { name: "Bank" }, { name: "Bank" }
]

function Login() {

    const classes = useStyle();
    //temporary validation
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bank, setBank] = useState("");
    const i = 0;


    function validateform() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.margin}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Typography>
                        <LockIcon color="primary" fontSize="large" />
                    </Typography>
                    <Typography component="h1" variant="h5">
                        LOG IN
                </Typography>

                    <div className={classes.marginform}>
                        <form onSubmit={handleSubmit} autoComplete="off">

                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel >Bank</InputLabel>
                                <Select
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={bank}
                                    onChange={(e) => setBank(e.target.value)}
                                    label="Bank"
                                >

                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>

                                    {BankData.map((mapbank) =>
                                        <MenuItem value={mapbank.name + (i + 1)}>{mapbank.name + (i + 1)}</MenuItem>
                                    )}

                                </Select>
                            </FormControl>
                            <TextField
                                type="email"
                                variant="outlined"
                                margin="normal"
                                required="true"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                className={classes.button}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                href="/dashboard"
                                disabled={!validateform()}>
                                LOG IN
                    </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                            </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </div>
        </Container>
    );
}

export default Login;