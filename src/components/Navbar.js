const Navbar = () => {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
  ];

  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Button
            color="inherit"
            variant="text"
            startIcon={<LoginIcon />}
            onClick={() => navigate('/')}
          >
            Home
          </Button>
          <Button
            color="inherit"
            variant="text"
            startIcon={<LoginIcon />}
            onClick={() => navigate('/health-experts')}
          >
            Find Health Experts
          </Button>
          <Button
            color="inherit"
            variant="text"
            startIcon={<LoginIcon />}
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
          <input
            className="search-filter"
            type="Search"
            placeholder="Search.."
          />
          <Button
            color="inherit"
            variant="text"
            startIcon={<LoginIcon />}
            onClick={() => navigate('/signup')}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <section className="router-container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/health-experts" element={<Healthexperts />} />

          <Route
            path="/health-experts/add-health-experts"
            element={<Healthexperts />}
          />

          <Route path="/lab-tests" element={<Labtest />} />
          <Route path="/lab-tests/add-labs" element={<Healthexperts />} />

          <Route
            path="/health-experts/add-health-experts"
            element={<Registration />}
          />
          <Route path="/signup" element={<Login />} />
        </Routes>
      </section>
    </div>
  );
};

export default Navbar;
