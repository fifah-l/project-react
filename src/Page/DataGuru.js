import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from "../components/Sidebar";
import Swal from 'sweetalert2';
import { Button, Tooltip, IconButton, TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Dashboard() {
  const [gurus, setGurus] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');  // State untuk pencarian
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3030/gurus')
      .then(response => {
        setGurus(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleAdd = () => {
    navigate('/TambahGuru');
  };

  const handleEdit = (id) => {
    navigate(`/EditGuru/${id}`); 
  };

  
  const Delete = (id) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: "Data ini akan dihapus secara permanen!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3030/gurus/${id}`)
          .then(() => {
            Swal.fire('Terhapus!', 'Data berhasil dihapus.', 'success');
            setGurus((prevgurus) => prevgurus.filter((item) => item.id !== id));
          })
          .catch((error) => {
            Swal.fire('Gagal!', 'Terjadi kesalahan saat menghapus data.', 'error');
            console.error("Error saat penghapusan", error);
          });
      }
    });
  };

  // Fungsi untuk memfilter data guru berdasarkan pencarian
  const filteredGurus = gurus.filter(guru => 
    guru.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guru.mapel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guru.nik.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#B3E5FC', minHeight: '100vh', padding: '20px', }}>
      <Sidebar />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAdd}
          sx={{
            backgroundColor: '#00796b', 
            '&:hover': { backgroundColor: '#004d40' }, 
          }}

        >
          Tambah Guru
        </Button>
      </div>

      {/* Kolom Pencarian */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <TextField
          label="Cari Guru"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            width: '300px',
            backgroundColor: '#fff',
            borderRadius: '8px',
          }}
        />
      </div>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table
          sx={{
            minWidth: 500,
            backgroundColor: '#80C7FF',
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: '#66B3FF' }}>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                No
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                Nama Guru
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                Mapel
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                NIK
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                Jenis Kelamin
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                Jabatan
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                Aksi
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredGurus.map((guru, index) => (
              <TableRow
                key={guru.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:hover': { backgroundColor: '#4FC3F7' },
                }}
              >
                <TableCell align="center" sx={{ color: '#000' }}>
                  {index + 1}
                </TableCell>
                <TableCell align="center" sx={{ color: '#000' }}>
                  {guru.nama}
                </TableCell>
                <TableCell align="center" sx={{ color: '#000' }}>
                  {guru.mapel}
                </TableCell>
                <TableCell align="center" sx={{ color: '#000' }}>
                  {guru.nik}
                </TableCell>
                <TableCell align="center" sx={{ color: '#000' }}>
                  {guru.jeniskelamin}
                </TableCell>
                <TableCell align="center" sx={{ color: '#000' }}>
                  {guru.jabatan}
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Hapus" arrow>
                    <IconButton
                      onClick={() => Delete(guru.id)}
                      sx={{ color: '#d32f2f' }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Ubah" arrow>
                    <IconButton
                      onClick={() => handleEdit(guru.id)}
                      sx={{ color: '#1E88E5', }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
};
