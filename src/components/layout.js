import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

const { container, content } = layoutStyles;

const Layout = (props) => {
	return (
		<div className={container}>
			<div className={content}>
				<Header />
				{props.children}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
