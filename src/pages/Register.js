import { Avatar, Button, Card, CardContent, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { defaultPath } from '../App'
import Layout from '../components/Layout'

export default function Register() {
  return (
    <Layout>
        <Container sx={{ 
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center' 
        }}>
            <Card sx={{ width: '50%', minHeight: '80%' }}>
                <CardContent>
                    <Box mb={10}>
                        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography mb={1} variant='h3'>Register</Typography>
                            <Avatar sx={{ backgroundColor: 'red' }} >S</Avatar>
                        </Container>
                    </Box>
                    <Box>
                        <TextField 
                            fullWidth
                            placeholder='Email'
                            sx={{ marginTop: 2.5, marginBottom: 2.5 }}
                        />

                        <TextField
                            fullWidth
                            sx={{ marginBottom: 2.5 }}
                            placeholder='Senha'
                        />

                        <TextField
                            fullWidth
                            placeholder='Confirmar senha'
                        />
                    </Box>
                    <Button sx={{ marginTop: 2.5 }} variant='contained' type='submit' color='secondary' >
                        <Link to={defaultPath + '/'} style={{ textDecoration: 'none', color: 'white' }} >
                            Cadastrar
                        </Link>
                    </Button>
                </CardContent>
            </Card>
            <Typography mt={2.5}>Já possui uma conta? <Link to={defaultPath}>Log in.</Link></Typography>
        </Container>
    </Layout>
  )
}
