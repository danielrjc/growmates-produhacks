
import React, { useState, useEffect } from 'react';
import '../src/styles.css'
import { useRouter } from 'next/router';
import useUser from './useUser';
const styles = {
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '80px',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        zIndex: 100,
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '300px',
        height: '50px',
        padding: '0 20px',
        borderRadius: '25px',
        backgroundColor: 'rgba(240, 240, 240, 0.75)',
        margin: '0 auto', // Center horizontally
        backdropFilter: 'blur(50px)'
    },
    icon: {
        width: '30px',
        height: 'auto',
        cursor: 'pointer',
    },

    clickedIcon: {
        width: '30px',
        height: 'auto',
        cursor: 'pointer',
        position: 'relative',
        transform: 'translateY(5px)', // Move up by 5 pixels
    },
    avatar: {
        borderRadius: '50%',
        overflow: 'hidden',
        width: '60px',
        height: '60px',
        marginRight: '40px',
    },
    avatarImg: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '95%',
        height: '85%',
        borderRadius: '25px',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(50px)',
        zIndex: 99,
        overflowY: 'auto',
        transition: 'all 0.3s',
      },
    
      menuHidden: {
        height: 0,
      },
      bigAvatar: {
        borderRadius: '50%',
        overflow: 'hidden',
        width: '120px',
        height: '120px',
        marginLeft: '40px',
        marginTop: '40px',
      },
      bigAvatarImg: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
      userName: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginLeft: '20px',
        marginTop: '60px',
      },
      signOutButton: {
        marginTop: '10px',
        backgroundColor: 'transparent',
        borderRadius: '5px',
        padding: '10px 20px',
        color: 'black',
        cursor: 'pointer',
        textDecoration: 'None'
      },
      closeButton: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }
      ,
      userNameSignout:{
        display: 'flex',
        flexDirection: 'column'

      }
};

const RectangleInfo = ({ iconName, number, colour }) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '30px',
        //   width: '90px',
          backgroundColor: colour,
          borderRadius: '10px',
          padding: '5px 10px',
          backdropFilter: 'blur(50px)',
          marginRight: '5px',
        }}
      >
        <span>{number}</span>
        <img
          src={`/${iconName}.png`}
          alt={iconName}
          style={{ width: '20px', height: 'auto', marginLeft: '10px'}}
        />
      </div>
    );
  };


const Header = ({ source }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(source);
    const router = useRouter();
    // let value = JSON.parse(localStorage.getItem('user'));
    // let name = value.username;
    const user = useUser();
    const name = user ? user.username : null;
    console.log(name)
    const handleClick = (from) => {
        setSelectedIcon(from);
    };
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        router.push(`/${selectedIcon}`);
    }, [router.pathname, selectedIcon]);

    const handleSignOut = () => {
        localStorage.clear();
        // Perform any additional sign-out actions here
        router.push(`/login`);
    };

    const getIconSrc = (name) => {
        if (name === selectedIcon) {
            return `/${name}-clicked.png`;
        }
        return `/${name}.png`;
    }
    return (
        <>
        <div style={styles.header}>
            <div style={styles.iconContainer}>

                <img
                    className="icon"
                    src={getIconSrc('home')}
                    alt="Home"
                    style={styles.icon}
                    onClick={() => handleClick('home')}
                />
                <img
                    className="icon"
                    src={getIconSrc('shop')}
                    alt="Achievements"
                    style={styles.icon}
                    onClick={() => handleClick('shop')}
                />
                <img
                    className="icon"
                    src={getIconSrc('maps')}
                    alt="Map"
                    style={styles.icon}
                    onClick={() => handleClick('maps')}
                />
                <img
                    className="icon"
                    src={getIconSrc('marketplace')}
                    alt="Marketplace"
                    style={styles.icon}
                    onClick={() => handleClick('marketplace')}
                />
                <img
                    className="icon"
                    src={getIconSrc('community')}
                    alt="Community"
                    style={styles.icon}
                    onClick={() => handleClick('community')}
                />
                <img
                    className="icon"
                    src={getIconSrc('book')}
                    alt="Book"
                    style={styles.icon}
                    onClick={() => handleClick('book')}
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
          <RectangleInfo iconName="white_sprout" number={100} colour = "#30BA00" />
          <RectangleInfo iconName="seeds" number={"15,000"} colour = "#E59111"/>
          <div style={styles.avatar} onClick={toggleMenu}>
            <img src="/avatar.jpg" alt="Profile" style={styles.avatarImg} />
          </div>
        </div>
        </div>
        <div
        style={{
          ...styles.menu,
          ...(menuVisible ? {} : styles.menuHidden),
        }}
      >
        <div style={styles.bigAvatar}>
          <img src="/avatar.jpg" alt="Profile" style={styles.bigAvatarImg} />
        </div>

        <div style ={styles.userNameSignout}>
        <div style={styles.userName}>
            {name}
        </div>
        <a href="#" style={styles.signOutButton} onClick={handleSignOut}>
  Sign Out
</a>
        </div>
        
        <div style={styles.closeButton} onClick={toggleMenu}>
            &times;
        </div>
      </div>
    </>
        
    );
};

export default Header;


