import React, { useState, useEffect } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';

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
            'rgba(0, 255, 89,0.9)',
            'rgba(255, 200, 0,0.9)',
            'rgba(255, 51, 0,0.9)',
            'rgba(0, 145, 255,0.9)',
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
        <Doughnut data={chartData} />
        <Line data={chartData} />
      </Layout>
    </>
  );
};

export default TestsPage;
