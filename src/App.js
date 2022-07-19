import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import Registration from './components/Registration';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Button, Typography, Paper } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import Healthexperts from './components/Healthexperts';
import Labtest from './components/Labtest';
import { Login } from '@mui/icons-material';
import Expertinfo from './components/Expertinfo';
import Pathology from './components/Pathology';
import Pathologyinfo from './components/Pathologyinfo';

function App() {
  let Initial_Health_Experts = [
    {
      dezignation: 'Doctor',
      first_name: 'Suresh',
      last_name: 'Kumar',
      email: 'suresh@gmail.com',
      gender: 'Male',
      specialization: 'General physician',
      qualification: 'MBBS Medicine',
      experience: '4 Years',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
      rating: 5,
    },
    {
      dezignation: 'Doctor',
      first_name: 'Harmanprit',
      last_name: 'Kaur',
      email: 'harman@gmail.com',
      gender: 'Female',
      specialization: 'General physician',
      qualification: 'MBBS Medicine',
      experience: '6 Years',
      rating: 5,

      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
    },
    {
      dezignation: 'Doctor',
      first_name: 'Raju',
      last_name: 'Seth',
      email: 'raju@gmail.com',
      gender: 'Male',
      specialization: 'Gynecologist',
      qualification: 'MD Gynecology',
      experience: '2 Years',
      rating: 5,
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
    },
    {
      dezignation: 'Doctor',
      first_name: 'Priyal',
      last_name: 'Pofali',
      email: 'priyal@gmail.com',
      gender: 'Female',
      specialization: 'Gynecologist',
      qualification: 'MD Gynecology',
      experience: '2 Years',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
      rating: 5,
    },
    {
      rating: 5,
      dezignation: 'Doctor',
      first_name: 'Gopal',
      last_name: 'Kishan',
      email: 'gopal@gmail.com',
      gender: 'Male',
      specialization: 'Pediatrician',
      qualification: 'DM Pediatrician',
      experience: '4 Years',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
    },
    {
      dezignation: 'Doctor',
      first_name: 'Anushka',
      last_name: 'Sharma',
      email: 'anushka@gmail.com',
      gender: 'Female',
      specialization: 'Pediatrician',
      rating: 5,

      qualification: 'DM Pediatrician',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',

      experience: '5 Years',
    },
  ];

  let path = [
    {
      dezignation: 'Doctor',
      first_name: 'Suresh',
      last_name: 'Kumar',
      email: 'suresh@gmail.com',
      gender: 'Male',
      specialization: 'General physician',
      qualification: 'MBBS Medicine',
      experience: '4 Years',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
      rating: 5,
    },
    {
      dezignation: 'Doctor',
      first_name: 'Harmanprit',
      last_name: 'Kaur',
      email: 'harman@gmail.com',
      gender: 'Female',
      specialization: 'General physician',
      qualification: 'MBBS Medicine',
      experience: '6 Years',
      rating: 5,

      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
    },
    {
      dezignation: 'Doctor',
      first_name: 'Raju',
      last_name: 'Seth',
      email: 'raju@gmail.com',
      gender: 'Male',
      specialization: 'Gynecologist',
      qualification: 'MD Gynecology',
      experience: '2 Years',
      rating: 5,
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
    },
    {
      dezignation: 'Doctor',
      first_name: 'Priyal',
      last_name: 'Pofali',
      email: 'priyal@gmail.com',
      gender: 'Female',
      specialization: 'Gynecologist',
      qualification: 'MD Gynecology',
      experience: '2 Years',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
      rating: 5,
    },
    {
      rating: 5,
      dezignation: 'Doctor',
      first_name: 'Gopal',
      last_name: 'Kishan',
      email: 'gopal@gmail.com',
      gender: 'Male',
      specialization: 'Pediatrician',
      qualification: 'DM Pediatrician',
      experience: '4 Years',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
    },
    {
      dezignation: 'Doctor',
      first_name: 'Anushka',
      last_name: 'Sharma',
      email: 'anushka@gmail.com',
      gender: 'Female',
      specialization: 'Pediatrician',
      rating: 5,

      qualification: 'DM Pediatrician',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',

      experience: '5 Years',
    },
  ];

  const [expert, setExpert] = React.useState(Initial_Health_Experts);

  const [lab, setLab] = React.useState(path);

  const navigate = useNavigate();

  const [mode, setMode] = React.useState('dark');

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const initial_opinion = [
    {
      opinion:
        'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
    },
    {
      opinion:
        'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.',
    },
    {
      opinion:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      opinion:
        'A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case',
    },
    {
      opinion:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    },
    {
      opinion:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.',
    },
    {
      opinion:
        'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
    },
    {
      opinion:
        'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ minHeight: '100vh', borderRadius: '0px' }}>
        <div className="App">
          <AppBar position="sticky">
            <Toolbar>
              <Button
                color="inherit"
                variant="text"
                startIcon={<HomeIcon />}
                onClick={() => navigate('/')}
              >
                Home
              </Button>
              <Button
                color="inherit"
                variant="text"
                onClick={() => navigate('/health-experts')}
              >
                Find Health Experts
              </Button>
              <Button
                color="inherit"
                variant="text"
                onClick={() => navigate('/lab-tests')}
              >
                Lab Tests
              </Button>
              {/* 
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300, height: 60 }}
            renderInput={params => <TextField {...params} label="Movie" />}
          /> */}
              {/* <input
              className="search-filter"
              type="Search"
              placeholder="Search.."
            /> */}
              <Button
                color="inherit"
                variant="text"
                startIcon={<LoginIcon />}
                onClick={() => navigate('/signup')}
              >
                Login / signup
              </Button>
              <Button
                style={{ marginLeft: 'auto' }}
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                color="inherit"
                startIcon={
                  mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
                }
              >
                {mode === 'light' ? 'dark' : 'light'} mode
              </Button>
            </Toolbar>
          </AppBar>

          <section className="router-container">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/health-experts" element={<Healthexperts />} />

              <Route path="/register" element={<Registration />} />

              <Route
                path="/health-experts/:id"
                element={<Expertinfo expert={expert} />}
              />

              <Route path="/lab-tests" element={<Labtest />} />

              <Route
                path="/lab-tests/:id"
                element={<Pathologyinfo lab={lab} />}
              />

              <Route path="/signup" element={<Login />} />
            </Routes>
          </section>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
