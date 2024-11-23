import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TambahGuru = () => {
  const [nama, setNama] = useState('');
  const [mapel, setMapel] = useState('');
  const [nik, setNik] = useState('');
  const [gender, setGender] = useState('');
  const [jabatan, setJabatan] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newGuru = {
      nama,
      mapel,
      nik,
      gender,
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
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mata Pelajaran"
              value={mapel}
              onChange={(e) => setMapel(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="NIK"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Jenis Kelamin"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Jabatan"
              value={jabatan}
              onChange={(e) => setJabatan(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Tambah Guru
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TambahGuru;
