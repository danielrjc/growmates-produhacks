import React, { useState, useEffect } from 'react';
import '../src/styles.css';
import { useRouter } from 'next/router';
import useUser from './useUser';

const MyGardens = () => {
  const [selectedGardenIndex, setSelectedGardenIndex] = useState(0);
  let [gardens, setGardens] = useState([]);

//   let value = JSON.parse(localStorage.getItem('user'));
//   let id = value.id;
    const user = useUser();
    const id = user ? user.id : null;
    console.log(id)
  let arr = [];
  const router = useRouter();
  useEffect(() => {
    if (id) {
    const fetchGardens = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/users/' + id + '/?populate=*');
        const data = await response.json();
        console.log("here")
        if(data.uses.length == 0){
            console.log("here")
                router.push('/maps');
            }
        for (let garden of data.uses) {
          const response2 = await fetch('http://localhost:1337/api/gardens/' + garden.id + '/?populate=*');
          const data2 = await response2.json();
          arr.push(data2);
        }
        setGardens(arr);
      } catch (error) {
        console.error('Error fetching gardens:', error);
      }
    };

    fetchGardens();
}
  }, [id]);

  const handleItemClick = (index) => {
    setSelectedGardenIndex(index);
  };

  const getCardStyle = (index) => {
    const isSelected = selectedGardenIndex === index;
    return {
      position: 'absolute',
      left: isSelected ? '10px' : selectedGardenIndex < index ? '100%' : '-100%',
      width: '75%',
      height: '60vh',
      borderRadius: '10px',
      padding: '20px',
      backgroundImage: `url('http://localhost:1337${gardens[index].data.attributes.image.data.attributes.url}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backdropFilter: 'blur(50px)',
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: '40px',
      margin: '20px auto',
      opacity: isSelected ? 1 : 0,
      transition: 'all 0.5s',
    };
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          paddingLeft: '10px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: '2px solid gray',
            zIndex: -1,
          }}
        ></div>
        {gardens.map((garden, index) => (
          <div
            key={garden.data.id}
            onClick={() => handleItemClick(index)}
            style={{
              width: selectedGardenIndex === index ? '80px' : '60px',
              height: selectedGardenIndex === index ? '80px' : '60px',
              borderRadius: '50%',
              backgroundImage: `url('http://localhost:1337${garden.data.attributes.image.data.attributes.url}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '0 10px',
              marginBottom: '10px',
              cursor: 'pointer',
              transition: 'width 0.3s, height 0.3s',
            }}
            ></div>
          ))}
        </div>
        <div style={{ position: 'relative', height: '60vh' }}>
          {gardens.map((garden, index) => (
            <div key={garden.data.id} style={getCardStyle(index)}>
              {garden.data.attributes.name}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MyGardens;
  
