import React from 'react';

const styles = {
  container: {
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'start', 
    alignItems: 'center',
    backgroundColor: 'rgba(209, 209, 209 , 0.75)',

    borderRadius: '10px',
    padding: '10px',
    width: '400px',
    height: '125px'
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    marginLeft: '10px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  sellerName: {
    fontSize: '14px',
    marginBottom: '5px'
  },
  button: {
    backgroundColor: '#30BA00',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer',
  },
};

const handleClick = (e) =>{
    console.log("hello")
}

const Buy = ({ iconName, number}) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '30px',
        //   width: '90px',
          backgroundColor: '#30BA00',
          borderRadius: '10px',
          padding: '5px 10px',
          backdropFilter: 'blur(50px)',
          marginRight: '5px',
        }}
      >
        <span>{number}</span>
        <img
          src={`/white_sprout.png`}
          alt={iconName}
          style={{ width: '20px', height: 'auto', marginLeft: '10px'}}
        />
      </div>
    );
  };


const Product = ({ imageSrc, title, sellerName }) => {
  return (
    <div style={styles.container}>
      <img src={imageSrc} alt="Product" style={styles.image} />
      <div style={styles.content}>
        <span style={styles.title}>{title}</span>
        <span style={styles.sellerName}>{sellerName}</span>
        <Buy onClick={handleClick} iconName="white_sprout" number={100}/>
      </div>
    </div>
  );
};

export default Product;
