// src/app/landing/page.js
// src/app/landing/page.js
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const CourseLandingPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        Course Helper
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // Two columns layout
          gap: '30px',
          width: '80%',
          maxWidth: '1200px',
          margin: '40px auto',
          padding: '20px',
        }}
      >
        {/* ML Course Box */}
        <Link href="/course/ml" passHref>
          <Box
            sx={{
              height: '250px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: 3,
              backgroundImage:
                'url("https://images.unsplash.com/photo-1495592822108-9e6261896da8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
              Machine Learning
            </Typography>
          </Box>
        </Link>

        {/* DSA Course Box */}
        <Link href="/course/dsa" passHref>
          <Box
            sx={{
              height: '250px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: 3,
              backgroundImage:
                'url("https://plus.unsplash.com/premium_photo-1679177183572-a4056053b8a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
              Data Structures & Algorithms
            </Typography>
          </Box>
        </Link>

        {/* AI Course Box */}
        <Link href="/course/ai" passHref>
          <Box
            sx={{
              height: '250px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: 3,
              backgroundImage:
                'url("https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
              Artificial Intelligence
            </Typography>
          </Box>
        </Link>

        {/* Finance Course Box */}
        <Link href="/course/finance" passHref>
          <Box
            sx={{
              height: '250px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: 3,
              backgroundImage:
                'url("https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
              Finance
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default CourseLandingPage;
