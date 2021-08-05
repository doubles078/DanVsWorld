import Link from 'next/link';
import { Layout, TreasureMap } from '../components';

export default function Custom404() {
  return (
    <Layout>
      <div className="Error">
        <TreasureMap />
        <h1>404 - Page not found</h1>
        <p>Sorry there is no treasure here.</p>
        <Link href="/">
          <a className="Button">← Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}
