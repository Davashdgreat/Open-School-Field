import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Steps from '../../components/Steps';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import AgentDashboard from '../Dashboard/AgD/AgDash';

const Home: React.FC = () => (
  <>
    <Navbar />
    <Header />
    <Steps />
    <Banner />
    <Footer />
    <AgentDashboard />

  </>
);

export default Home;
