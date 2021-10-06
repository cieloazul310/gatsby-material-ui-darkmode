import * as React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '../layout';
import ProTip from '../components/ProTip';
import Link from '../components/Link';

export default function Index() {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Gatsby v5 example
      </Typography>
      <Link to="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
    </Layout>
  );
}
