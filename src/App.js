import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';
import Contactus from './components/Contactus';

const App = () => (
  <Router>
    <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/contact-us' element={<Contactus />} />
          <Route exact path='/blog/:id' element={<BlogDetail />} />
          <Route exact path='/category/:id' element={<Category />} />
        </Routes>
    </Layout>
  </Router>
);


export default App;
