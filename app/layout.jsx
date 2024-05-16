import './globals.css';
import MainHeaeder from '@/components/MainHeader/MainHeader';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaeder/>
        {children}
      </body>
    </html>
  );
}
