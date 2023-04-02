import React, { useState, useEffect } from 'react';
import '../src/styles.css'
import useUser from './useUser.js';
const Overlay = () => {
    const [selectedGarden, setSelectedGarden] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [gardens, setGardens] = useState([]);
    const [reserveButtonText, setReserveButtonText] = useState("Reserve Plot");

    // let value = JSON.parse(localStorage.getItem('user'));
    // let id = value.id;
    const user = useUser();
    const id = user ? user.id : null;
    const containerStyle = {
        position: 'absolute',
        width: '300px',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 2,
        marginLeft: '80px',
    };

    const topRectStyle = {
        display: 'flex',
        height: '50px',
        width: '300px',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: '15px',
        padding: '20px',
        backdropFilter: 'blur(50px)',
    };

    const bottomRectStyle = {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        padding: '20px',
        borderRadius: '15px',
        width: '300px',
        height: '600px',
        overflowY: 'scroll',
        backdropFilter: 'blur(50px)',
    };
    const listItemStyle = {
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)', // Add a border at the bottom of each item
        paddingBottom: '10px', // Add padding for the border
        marginBottom: '10px', // Add margin between items
    };

    const gardenNameStyle = {
        fontWeight: 'bold', // Make the garden name bold
        marginBottom: '4px', // Add margin between the name and address
    };


    const reservePlot = async (garden) => {
        console.log("Garden ID:", garden);
        console.log(id)

        // Replace this with the actual API call to add the garden to the user's database
        try {
            const userResponse = await fetch(`http://localhost:1337/api/users/${id}?populate=*`);
            const userData = await userResponse.json();
            userData.uses.push(garden);
            console.log(userData)
            // userData.uses.push(garden);

            const updateResponse = await fetch(`http://localhost:1337/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uses: userData.uses,
                }),
            });

            const updatedUserData = await updateResponse.json();
            setReserveButtonText("Reserved");
            console.log("User data updated:", updatedUserData);

        } catch (error) {
            console.error("Error reserving garden:", error);
        }
    };
    const handleItemClick = (garden) => {
        setSelectedGarden(garden);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };


    const gardenDetails = selectedGarden ? (
        <div
            style={{
                position: 'absolute',
                left: '350px',
                top: '150px',
                width: '300px',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                borderRadius: '10px',
                padding: '20px',
                backdropFilter: 'blur(10px)',
            }}
        >
            <button
                onClick={() => setSelectedGarden(null)}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'none',
                    border: 'none',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}
            >
                &times;
            </button>
            <h3>{selectedGarden.attributes.name}</h3>
            <img src={'http://localhost:1337' + selectedGarden.attributes.image.data.attributes.url} alt={selectedGarden.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
            <div>{selectedGarden.attributes.address}</div>
            <div>Rating: {selectedGarden.attributes.rating}</div>
            <div>Plots available: {selectedGarden.attributes.available + "/" + selectedGarden.attributes.total}</div>
            <button onClick={() => reservePlot(selectedGarden)} className="login-btn" style={{ marginTop: '10px' }}>{reserveButtonText}</button>
        </div>
    ) : null;




    useEffect(() => {
        const fetchGardens = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/gardens?populate=*');
                const data = await response.json();
                console.log(data)
                setGardens(data.data);
                // console.log(data.data)
            } catch (error) {
                console.error('Error fetching gardens:', error);
            }
        };

        fetchGardens();
    }, []);

    return (
        <div style={containerStyle}>
            <div style={topRectStyle}>

                <input type="text" placeholder="Search gardens..." style={{ width: '100%', padding: '10px', borderRadius: '15px', border: 'none' }}
                    onChange={handleSearch} />

            </div>
            <div style={bottomRectStyle}>
                {gardens
                    .filter((garden) => {
                        if (garden) {
                            let name = String(garden.attributes.name);
                            return name
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase());
                        }
                        return false;
                    })
                    .map((garden) => (
                        <div
                            key={garden.id}
                            onClick={() => handleItemClick(garden)}
                            style={listItemStyle}
                            className='list-item'
                        >
                            <div style={gardenNameStyle}>
                                {garden.attributes.name}
                            </div>
                            <div>{garden.attributes.address}</div>
                            <div>Rating: {garden.attributes.rating}</div>
                        </div>
                    ))}
            </div>
            {gardenDetails}
        </div>
    );
};

export default Overlay;
