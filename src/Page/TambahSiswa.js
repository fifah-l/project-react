import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

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
      asalSekolah,
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
      <div style={{ backgroundColor: '#D3E4FD', minHeight: '100vh', padding: '50px 20px' }}>
      <Paper sx={{ maxWidth: 600, margin: '0 auto', padding: '30px', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary" sx={{ fontWeight: 'bold' }}>
        <PersonAddIcon sx={{ marginRight: 1 }} />
          Tambah Siswa
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nama Siswa"
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
                label="Kelas"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                required
                variant="outlined"
                sx={{ backgroundColor: '#f0f4f8' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Jurusan"
                value={jurusan}
                onChange={(e) => setJurusan(e.target.value)}
                required
                variant="outlined"
                sx={{ backgroundColor: '#f0f4f8' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="NISN"
                value={nisn}
                onChange={(e) => setNisn(e.target.value)}
                required
                variant="outlined"
                sx={{ backgroundColor: '#f0f4f8' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Asal Sekolah"
                value={asalSekolah}
                onChange={(e) => setAsalSekolah(e.target.value)}
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
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  padding: '12px',
                  backgroundColor: '#00796b',
                  '&:hover': { backgroundColor: '#004d40' },
                }}
              >
                Tambahkan Siswa
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default TambahMurid;
