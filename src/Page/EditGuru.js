import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditGuru() {
  const [nama, setNama] = useState('');
  const [mapel, setMapel] = useState('');
  const [nik, setNik] = useState('');
  const [jeniskelamin, setJenisKelamin] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [error, setError] = useState(null);

  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate();

  // Menarik data guru dari API untuk di-edit
  useEffect(() => {
    axios
      .get(`http://localhost:3030/gurus/${id}`) // Gunakan endpoint dengan ID
      .then((response) => {
        const guru = response.data;
        setNama(guru.nama);
        setMapel(guru.mapel);
        setNik(guru.nik);
        setJenisKelamin(guru.jeniskelamin);
        setJabatan(guru.jabatan);
      })
      .catch((error) => {
        console.error('Error fetching guru data:', error);
        setError('Gagal memuat data guru.');
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedGuru = {
      nama,
      mapel,
      nik,
      jeniskelamin,
      jabatan,
    };

    try {
      await axios.put(`http://localhost:3030/gurus/${id}`, updatedGuru);
      alert('Data guru berhasil diubah!');
      navigate('/guru'); // Redirect ke dashboard setelah berhasil
    } catch (error) {
      console.error('Error updating guru:', error);
      setError('Gagal mengubah data guru.');
    }
  };

  return (
    <Box
      sx={{
        padding: '30px',
        backgroundColor: '#e3f2fd',
        margin: 'auto',
        maxWidth: '700px',
        borderRadius: '10px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: '#1976d2',
          fontWeight: 'bold',
          marginBottom: '30px',
          fontSize: '2rem',
        }}
      >
        Edit Data Guru
      </Typography>

      {error && (
        <Typography variant="body2" color="error" gutterBottom sx={{ marginBottom: '20px' }}>
          {error}
        </Typography>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Nama Guru"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />
        <TextField
          label="Mata Pelajaran"
          variant="outlined"
          fullWidth
          margin="normal"
          value={mapel}
          onChange={(e) => setMapel(e.target.value)}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />
        <TextField
          label="NIK"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nik}
          onChange={(e) => setNik(e.target.value)}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />

        <FormControl fullWidth margin="normal" required sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}>
          <InputLabel>Jenis Kelamin</InputLabel>
          <Select
            value={jeniskelamin}
            onChange={(e) => setJenisKelamin(e.target.value)}
            label="JenisKelamin"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
          >
            <MenuItem value="Laki-laki">Laki-laki</MenuItem>
            <MenuItem value="Perempuan">Perempuan</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Jabatan"
          variant="outlined"
          fullWidth
          margin="normal"
          value={jabatan}
          onChange={(e) => setJabatan(e.target.value)}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{
            marginTop: '20px',
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#1565c0',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            },
            borderRadius: '8px',
            padding: '12px 0',
          }}
        >
          Update Guru
        </Button>
      </form>
    </Box>

  );
}
