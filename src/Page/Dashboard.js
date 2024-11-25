import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, Grid, Typography, Button, Box } from '@mui/material';
import { PersonOutline, GroupOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [gurus, setGurus] = useState([]);
  const [murids, setMurids] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3030/gurus') // API data guru
      .then(response => {
        setGurus(response.data);
      })
      .catch(error => {
        console.error('Error fetching guru data:', error);
      });

    axios.get('http://localhost:3030/murids') // API data murid
      .then(response => {
        setMurids(response.data);
      })
      .catch(error => {
        console.error('Error fetching murid data:', error);
      });
  }, []);

  const handleAddGuru = () => {
    navigate('/guru');
  };

  const handleAddMurid = () => {
    navigate('/siswa');
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#BBDEFB', // Biru pastel untuk latar belakang utama
      minHeight: '95vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ color: '#0277BD', fontWeight: 'bold', marginBottom: '30px' }} // Biru soft untuk teks judul
      >
        Selamat Datang Di Dashboard Fifah
      </Typography>

      {/* Grid for Cards */}
      <Grid container spacing={4} justifyContent="center">
        {/* Card for Data Guru */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minHeight: '200px',
              backgroundColor: '#B3E5FC', // Biru pastel untuk kartu
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardHeader
              title="Data Guru"
              titleTypographyProps={{ variant: 'h5', align: 'center' }}
              sx={{
                backgroundColor: '#81D4FA', // Biru soft untuk header kartu
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              avatar={<PersonOutline style={{ color: 'white', fontSize: '40px' }} />}
            />
            <CardContent>
              <Typography variant="body1" gutterBottom align="center" sx={{ color: '#0288D1' }}>
                Total Guru: {gurus.length}
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#0288D1', color: 'white' }}
                  onClick={handleAddGuru}
                >
                  Data Guru
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for Data Siswa */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minHeight: '200px',
              backgroundColor: '#B3E5FC', // Biru pastel untuk kartu
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardHeader
              title="Data Siswa"
              titleTypographyProps={{ variant: 'h5', align: 'center' }}
              sx={{
                backgroundColor: '#81D4FA', // Biru soft untuk header kartu
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              avatar={<GroupOutlined style={{ color: 'white', fontSize: '40px' }} />}
            />
            <CardContent>
              <Typography variant="body1" gutterBottom align="center" sx={{ color: '#0288D1' }}>
                Total Siswa: {murids.length}
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#0288D1', color: 'white' }}
                  onClick={handleAddMurid}
                >
                  Data Siswa
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
