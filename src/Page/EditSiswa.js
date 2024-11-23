import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, } from '@mui/material';
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
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Ubah Data Murid
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nama"
          name="nama"
          value={nama}  // Menghubungkan dengan state Nama
          onChange={(e) => setNama(e.target.value)}  
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Kelas"
          name="kelas"
          value={kelas}  // Menghubungkan dengan state Kelas
          onChange={(e) => setKelas(e.target.value)}  
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Jurusan"
          name="jurusan"
          value={jurusan}  // Menghubungkan dengan state Jurusan
          onChange={(e) => setJurusan(e.target.value)}  
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Nisn"
          name="nisn"
          value={nisn}  // Menghubungkan dengan state Nisn
          onChange={(e) => setNisn(e.target.value)}  
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="AsalSekolah"
          name="asalsekolah"
          value={asalSekolah}  // Menghubungkan dengan state Asal Sekolah
          onChange={(e) => setAsalSekolah(e.target.value)}  
          margin="normal"
          variant="outlined"
        />

        

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: '100%' }}
        >
          Simpan Perubahan
        </Button>
      </form>

      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
        Edit data murid
      </Typography>
    </Container>
  );
}