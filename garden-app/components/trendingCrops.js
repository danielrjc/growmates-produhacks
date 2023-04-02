import React from 'react';
const Price = () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '30px',
          backgroundColor: 'white',
          borderRadius: '25px',
          border: '4px solid',
          borderColor: '#30BA00',
          padding: '5px 10px',
          backdropFilter: 'blur(50px)',
          marginRight: '5px',
            color: '#30BA00',
            fontWeight: 'bold'
        }}
      >
        <span>{'10.0'}</span>
        <img
          src={`/green-sprout.png`}
          alt={'sprout'}
          style={{ width: '20px', height: 'auto', marginLeft: '10px'}}
        />
      </div>
    );
  };

const TrendingCrops = () => {
  const cropsData = [
    {
      name: 'Cilantro',
      price: '10.00',
      image: '/cilantro.png',
    },
    {
      name: 'Leek',
      price: '8.00',
      image: '/leek.png',
    },
    // Add more crops data here
  ];

  const styles = {
    container: {
      marginLeft: '40px',
      marginTop: '200px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    cropCard: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(209, 209, 209 , 0.75)',
      borderRadius: '10px',
      padding: '10px',
      marginBottom: '20px',
      width: '200px',
      height : ' 100px'
    },
    cropDetails: {
      marginRight: '15px',
    },
    cropName: {
      fontSize: '18px',
      marginBottom: '5px',
    },
    cropPrice: {
      backgroundColor: '#4CAF50',
      borderRadius: '5px',
      padding: '3px 5px',
      color: 'white',
      marginBottom: '10px',
    },
    cropImage: {
      width: '80px',
      height: 'auto',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Trending Crops</h2>
      {cropsData.map((crop, index) => (
        <div key={index} style={styles.cropCard}>
          <div style={styles.cropDetails}>
            <div style={styles.cropName}>{crop.name}</div>
           <Price/>
          </div>
          <img src={crop.image} alt={crop.name} style={styles.cropImage} />
        </div>
      ))}
    </div>
  );
};

export default TrendingCrops;
