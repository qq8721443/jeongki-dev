import React from 'react';
import Layout from '../../components/layout';
import {Link} from 'gatsby';

export default function Page1() {
    return (
        <Layout>
            page1
            <Link to='/'>go to main</Link>
        </Layout>
    )
}