import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TambahMurid = () => {
  const [nama, setNama] = useState('');
  const [kelas, setKelas] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [nisn, setNisn] = useState('');
  const [asalSekolah, setAsalSekolah] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMurid = {
      nama,
      kelas,
      jurusan,
      nisn,
      asalSekolah
    };

    axios.post('http://localhost:3030/murids', newMurid)
      .then((response) => {
        alert('Siswa berhasil ditambahkan!');
        navigate('/siswa');  // Kembali ke data siswa setelah berhasil tambah data
      })
      .catch((error) => {
        console.error('Error adding murid:', error);
        alert('Gagal menambahkan siswa!');
      });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Tambah Siswa
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: '0 auto' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nama Siswa"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Kelas"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Jurusan"
              value={jurusan}
              onChange={(e) => setJurusan(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="NISN"
              value={nisn}
              onChange={(e) => setNisn(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Asal Sekolah"
              value={asalSekolah}
              onChange={(e) => setAsalSekolah(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Tambah Siswa
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TambahMurid;
