import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Button} from '../../globalStyles';
import {
	Nav,
	NavItem,
	NavMenu,
	NavLinks,
	NavBarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavBtnLink,
	NavItemBtn,
} from './NavBar.elements';

const NavBar = () => {
	const [click, setClick] = React.useState(false);
	const [button, setButton] = React.useState(true);

	const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth < 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    React.useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

	return (
		<>
			<IconContext.Provider value={{color: '#fff'}}>
				<Nav>
					<NavBarContainer>
						<NavLogo to='/'>
							<NavIcon />
							ULTRA
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to='/'>Home</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to='/services'>Services</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to='/products'>Products</NavLinks>
							</NavItem>

							<NavItemBtn>
								{button ? (
									<NavBtnLink to='/sign-up'>
										<Button primary>SIGN UP</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to='/sign-up  '>
										<Button
											onClick={showButton}
											fontBig
                                            big
											primary>
											SIGN UP
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>
						</NavMenu>
					</NavBarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default NavBar;
