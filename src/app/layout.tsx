import '../styles/App.css';
import '../styles/index.css';

import Layout from '../components/Layout/Layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
