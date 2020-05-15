import React, { useState, useEffect } from 'react';
import { Polar } from 'react-chartjs-2';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';

const TestsPage = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['Confirmados', 'Suspeitos', 'Óbitos', 'Curados'],
      datasets: [
        {
          label: 'Nível de avanço da doença',
          data: [4505510, 2575034, 304835, 1618806],
          backgroundColor: [
            'rgba(75,192,192,0.6)',
            'rgba(75,22,192,0.6)',
            'rgba(44,225,55,0.6)',
            'rgba(546,225,55,0.6)',
          ],
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <Head
        title="Covid Agora | Mundo"
        description="Acompanhe como anda a real situação do coronavírus no mundo."
        image="static/images/world/flag.png"
      />
      <Layout>
        <Polar data={chartData} />
      </Layout>
    </>
  );
};

export default TestsPage;
