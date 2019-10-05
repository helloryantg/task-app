import React from 'react'
import styled from 'styled-components'
import { 
    color,
    size 
} from '../../styles/styled-variables'

const NavBarWrapper = styled.div`
    height: 4rem;
    width: 100%;
    background-color: ${color.mediumBlack};
    display: flex;
    align-items: center;
    padding: 0.4rem;
    justify-content: space-between;
`

const LeftControls = styled.div`
    display: flex;
    height: 100%;
    display: flex;
    align-items: center;
    min-width: 25%;

    & > .home {
        height: 3.6rem;
        width: 3.6rem;
        background-color: ${color.darkBlack};
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.4rem;
    }

    & > .boards {
        background-color: ${color.darkBlack};
        height: 3.6rem;
        width: 6rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 0.6rem;
        margin-right: 0.4rem;

        & > .__label {

        }
    }

    & > .search {
        height: 3.6rem;
        width: 14rem;
        background-color: ${color.darkBlack};
        display: flex;
        align-items: center;

        & > .__input {
            height: 3.2rem;
            width: 10rem;
            font-size: 24px;

            &:focus {
                outline: none;
            }
        }

        & > .__icon {
            height: 3.6rem;
            width: 3.6rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`

const Logo = styled.div`
    background-color: black;
    height: 3.6rem;
    min-width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RightControls = styled.div`
    height: 3.6rem;
    width: 6rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-width: 25%;

    & > .plus {
        background-color: ${color.darkBlack};
        height: 3.6rem;
        width: 3.6rem;
        display: flex;
        align-items: center;
        justify-content: center;

        & > .__icon {
            height: 1.8rem;
            width: 1.8rem;
            background-color: white;
        }
    }

    & > .info {
        height: 3.6rem;
        width: 3.6rem;
        background-color: ${color.darkBlack};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.4rem;

        & > .__icon {
            height: 1.8rem;
            width: 1.8rem;
            background-color: white;
        }
    }

    & > .notifications {
        height: 3.6rem;
        width: 3.6rem;
        background-color: ${color.darkBlack};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.4rem;

        & > .__icon {
            height: 1.8rem;
            width: 1.8rem;
            background-color: white;
        }
    }

    & > .user {
        height: 3.6rem;
        width: 3.6rem;
        background-color: ${color.darkBlack};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-left: 0.4rem;

        & > .__icon {
            height: 1.8rem;
            width: 1.8rem;
            background-color: white;
        }
    }
`

const IconWrapper = styled.div`
    height: 1.8rem;
    width: 1.8rem;
    background-color: white;
`

function NavBar() {
    return (
        <NavBarWrapper>
            <LeftControls>
                <div className="home">
                    <IconWrapper></IconWrapper>
                </div>
                <div className="boards">
                    <IconWrapper>B</IconWrapper>
                    <div className="__label">Boards</div>
                </div>
                <div className="search">
                    <input type="text" className="__input" />
                    <div className="__icon">M</div>
                </div>
            </LeftControls>
            
            {/* <Logo>RYAN</Logo> */}

            <RightControls>
                <div className="plus">
                    <IconWrapper>+</IconWrapper>
                </div>
                <div className="info">
                    <IconWrapper>I</IconWrapper>
                </div>
                <div className="notifications">
                    <IconWrapper>N</IconWrapper>
                </div>
                <div className="user">
                    <IconWrapper>RG</IconWrapper>
                </div>
            </RightControls>
        </NavBarWrapper>
    )
}

export default NavBar