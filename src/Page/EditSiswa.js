import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import Swal from 'sweetalert2';  // Import SweetAlert

export default function EditData() {
  const { id } = useParams(); // Mengambil ID siswa dari URL
  const [nama, setNama] = useState("");  // Nama Siswa
  const [kelas, setKelas] = useState("");  // Kelas
  const [jurusan, setJurusan] = useState("");  // Jurusan
  const [nisn, setNisn] = useState("");  // Nisn
  const [asalSekolah, setAsalSekolah] = useState("");  // Asal Sekolah
  const navigate = useNavigate();

  // Fetch data siswa berdasarkan id
  useEffect(() => {
    axios
      .get(`http://localhost:3030/murids/${id}`)  // Mengambil data berdasarkan ID siswa
      .then((response) => {
        const siswa = response.data;
        setNama(siswa.nama);
        setKelas(siswa.kelas);
        setJurusan(siswa.jurusan);
        setNisn(siswa.nisn);
        setAsalSekolah(siswa.asalSekolah);
      })
      .catch((error) => {
        console.error("Error fetching siswa data:", error);
        Swal.fire("Gagal!", "Tidak dapat mengambil data siswa.", "error");
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!nama || !kelas || !jurusan || !nisn || !asalSekolah) {
      Swal.fire("Gagal!", "Semua field wajib diisi!", "error");
      return;
    }

    try {
      // Update data siswa yang ada
      const updatedSiswa = {
        nama,
        kelas,
        jurusan,
        nisn,
        asalSekolah,
      };

      await axios.put(`http://localhost:3030/murids/${id}`, updatedSiswa); // Update data siswa

      Swal.fire("Berhasil!", "Data siswa berhasil diperbarui.", "success");
      navigate("/siswa"); // Navigasi ke halaman daftar siswa
    } catch (error) {
      console.error("Error updating siswa:", error);
      Swal.fire("Gagal!", "Terjadi kesalahan saat memperbarui data siswa.", "error");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Ubah Data Murid
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          backgroundColor: '#f0f4f8',
          padding: 3,
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <TextField
          fullWidth
          label="Nama"
          name="nama"
          value={nama}  // Menghubungkan dengan state Nama
          onChange={(e) => setNama(e.target.value)}  
          margin="normal"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Kelas"
          name="kelas"
          value={kelas}  // Menghubungkan dengan state Kelas
          onChange={(e) => setKelas(e.target.value)}  
          margin="normal"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Jurusan"
          name="jurusan"
          value={jurusan}  // Menghubungkan dengan state Jurusan
          onChange={(e) => setJurusan(e.target.value)}  
          margin="normal"
          variant="outlined"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Nisn"
          name="nisn"
          value={nisn}  // Menghubungkan dengan state Nisn
          onChange={(e) => setNisn(e.target.value)}  
          margin="normal"
          variant="outlined"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Asal Sekolah"
          name="asalsekolah"
          value={asalSekolah}  // Menghubungkan dengan state Asal Sekolah
          onChange={(e) => setAsalSekolah(e.target.value)}  
          margin="normal"
          variant="outlined"
          sx={{ mb: 3 }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            width: '100%',
            padding: '12px 0',
            borderRadius: '8px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#1565c0',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          Simpan Perubahan
        </Button>
      </Box>

      <Typography variant="body1" align="center" sx={{ mt: 2, color: '#757575' }}>
        Pastikan data yang dimasukkan sudah benar.
      </Typography>
    </Container>
  );
}
