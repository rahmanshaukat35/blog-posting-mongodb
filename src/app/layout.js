import Provider from '@/SessionProvider';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Blog-Posting',
	description: 'Generated by create next app',
};

export default function RootLayout({ children, session }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>
					<Navbar />
					{children}
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
