import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
	return (
		<div>
			<Layout>
				<Head title="Contact" />
				<h1>Page title</h1>
				<p>contact details</p>
				<p>
					Check me out on{' '}
					<a href="https://twitter.com" target="_blank" rel="noreferrer">
						twitter
					</a>
				</p>
			</Layout>
		</div>
	);
};

export default ContactPage;
