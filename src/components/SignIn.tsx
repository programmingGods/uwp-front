import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface LoginFormState {
    username: string;
    password: string;
  }

const defaultTheme = createTheme();

export default function SignIn() {
    const [data, setData] = useState<any>()
    const [formData, setFormData] = useState<LoginFormState> ({
        username: '',
        password: '',
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get('http://localhost:5074/api/Department')
                .then(function (resp) {
                    console.log(resp.data)
                    setData(resp.data)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
        fetchData()
    }, [])

    const handleSubmit = async (event:React.FormEvent) => {
        event.preventDefault();
        const newEmployee = {
            name: "Tom543",
            age: "20"
        };
        try {
            const response = await axios.post('http://localhost:5074/api/Run', formData);

            if (response.status === 206) {
                console.log('OK')
                console.log(response)
            }
        } catch (error) {
            setError('Error')
        }
    };

    return (
        <div style={{ height: "100%", }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Войти
                        </Typography>
                        <Box component="form"  noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Адрес электронной почты"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Запомнить меня"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Войти
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Забыли пароль?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Нет учетной записи? Зарегистрироваться"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}