import { Fragment, useState } from 'react'
import Menu from '../components2/menu';
import Aside from '../components2/Aside';
import Content from '../components2/Content';
import Footer from '../components2/Footer';

function App() {
  return (
    <Fragment>
        <Menu />
        <Aside />
        <Content />
        <Footer />
   </Fragment>
   )
}

export default App
