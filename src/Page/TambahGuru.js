import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const TambahGuru = () => {
  const [nama, setNama] = useState('');
  const [mapel, setMapel] = useState('');
  const [nik, setNik] = useState('');
  const [jeniskelamin, setJenisKelamin] = useState('');
  const [jabatan, setJabatan] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newGuru = {
      nama,
      mapel,
      nik,
      jeniskelamin,
      jabatan
    };
  
    axios.post('http://localhost:3030/gurus', newGuru)
      .then((response) => {
        console.log('Response from server:', response);
        alert('Guru berhasil ditambahkan!');
        navigate('/guru');  // Kembali ke data guru setelah berhasil tambah data
      })
      .catch((error) => {
        console.error('Error adding guru:', error);
        alert('Gagal menambahkan guru!');
      });
  };

  return (
    <div style={{ backgroundColor: '#D3E4FD', minHeight: '100vh', padding: '50px 20px' }}>
    <Paper sx={{ maxWidth: 600, margin: '0 auto', padding: '30px', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom align="center" color="primary" sx={{ fontWeight: 'bold' }}>
          <PersonAddIcon sx={{ marginRight: 1 }} />
          Tambah Guru
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: '0 auto' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nama Guru"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                variant="outlined"
                sx={{ backgroundColor: '#f0f4f8' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mata Pelajaran"
                value={mapel}
                onChange={(e) => setMapel(e.target.value)}
                required
                variant="outlined"
                sx={{ backgroundColor: '#f0f4f8' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="NIK"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                required
                variant="outlined"
                sx={{ backgroundColor: '#f0f4f8' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Jenis Kelamin"
                value={jeniskelamin}
                onChange={(e) => setJenisKelamin(e.target.value)}
                required
                variant="outlined"
                sx={{ backgroundColor: '#f0f4f8' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Jabatan"
                value={jabatan}
                onChange={(e) => setJabatan(e.target.value)}
                required
                variant="outlined"
                sx={{ backgroundColor: '#f0f4f8' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                type="submit" 
                fullWidth 
                sx={{
                  backgroundColor: '#0288d1',
                  '&:hover': {
                    backgroundColor: '#01579b',
                  },
                  padding: '14px',
                  fontSize: '1.1rem',
                }}
              >
                Tambah Guru
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default TambahGuru;
