import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditGuru() {
  const [nama, setNama] = useState('');
  const [mapel, setMapel] = useState('');
  const [nik, setNik] = useState('');
  const [gender, setGender] = useState('');
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
        setGender(guru.gender);
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
      gender,
      jabatan,
    };

    try {
      await axios.put(`http://localhost:3030/gurus/${id}`, updatedGuru);
      alert('Data guru berhasil diubah!');
      navigate('/'); // Redirect ke dashboard setelah berhasil
    } catch (error) {
      console.error('Error updating guru:', error);
      setError('Gagal mengubah data guru.');
    }
  };

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#f3f4f6',
        margin: 'auto',
        maxWidth: '600px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '20px' }}
      >
        Edit Data Guru
      </Typography>

      {error && (
        <Typography variant="body2" align="center" color="error" gutterBottom>
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
        />
        <TextField
          label="Mata Pelajaran"
          variant="outlined"
          fullWidth
          margin="normal"
          value={mapel}
          onChange={(e) => setMapel(e.target.value)}
          required
        />
        <TextField
          label="NIK"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nik}
          onChange={(e) => setNik(e.target.value)}
          required
        />

        <FormControl fullWidth margin="normal" required>
          <InputLabel>Gender</InputLabel>
          <Select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            label="Gender"
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
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{
            marginTop: '20px',
            backgroundColor: '#1976d2',
            '&:hover': { backgroundColor: '#1565c0' },
          }}
        >
          Update Guru
        </Button>
      </form>
    </Box>
  );
}
