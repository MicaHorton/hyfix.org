import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = props => (
    <>
        <Link to='/store'>All Products</Link>
        <Link to={{pathname: '/store/category', search: 'boards'}}>Boards</Link>
        <Link to={{pathname: '/store/category', search: 'ins'}}> INS Systems</Link>
        <Link to={{pathname: '/store/category', search: 'survey'}}>Survey Systems</Link>
    </>
)

export default CategoryList;