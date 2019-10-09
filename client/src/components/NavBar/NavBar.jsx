import React from 'react'
import styled from 'styled-components'
import { 
    color,
    size,
    border 
} from '../../styles/styled-variables'
import home from '../../icons/home.svg'
import list from '../../icons/list.svg'
import search from '../../icons/search.svg'
import add from '../../icons/add.svg'
import information from '../../icons/information.svg'
import alarm from '../../icons/alarm-bell.svg'

const NavBarWrapper = styled.div`
    height: 2.2rem;
    width: 100%;
    background-color: ${color.blackMedium};
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
        height: 2rem;
        width: 2rem;
        background-color: ${color.blackDark};
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.4rem;
        border-radius: ${border.radiusDefault};
    }

    & > .boards {
        background-color: ${color.blackDark};
        height: 2rem;
        width: 6rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 0.6rem;
        margin-right: 0.4rem;
        border-radius: ${border.radiusDefault};

    }

    & > .search {
        height: 32px;
        width: 16rem;
        background-color: ${color.blackDark};
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: ${border.radiusDefault};

        & > .__input {
            height: 1rem;
            width: 14rem;
            font-size: 14px;
            border-radius: ${border.radiusDefault};
            padding: 0.3rem 0.4rem;

            &:focus {
                outline: none;
            }
        }

        & img {
            padding: 0 0.4reml
        }
    }
`

const RightControls = styled.div`
    height: 2rem;
    width: 6rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-width: 25%;

    & > .plus {
        background-color: ${color.blackDark};
        height: 2rem;
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${border.radiusDefault};

        & > .__icon {
            height: 1.8rem;
            width: 1.8rem;
            background-color: white;
        }
    }

    & > .info {
        height: 2rem;
        width: 2rem;
        background-color: ${color.blackDark};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.4rem;
        border-radius: ${border.radiusDefault};

        & > .__icon {
            height: 1.8rem;
            width: 1.8rem;
            background-color: white;
        }
    }

    & > .notifications {
        height: 2rem;
        width: 2rem;
        background-color: ${color.blackDark};
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
        height: 2rem;
        width: 2rem;
        background-color: ${color.blackDark};
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
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${border.radiusDefault};
    background-color: inherit;
    
    & > img {
        height: 1rem;
        width: 1rem;
        filter: invert(100%);
    }
`

function NavBar() {
    return (
        <NavBarWrapper>
            <LeftControls>
                <div className="home">
                    <IconWrapper>
                        <img src={home} alt=""/>
                    </IconWrapper>
                </div>
                <div className="boards">
                    <IconWrapper>
                        <img src={list} alt=""/>
                    </IconWrapper>
                    <div className="__label">Lists</div>
                </div>
                <div className="search">
                    <input type="text" className="__input" />
                    <IconWrapper>
                        <img src={search} alt=""/>
                    </IconWrapper>
                </div>
            </LeftControls>
            
            <RightControls>
                <div className="plus">
                    <IconWrapper>
                        <img src={add} alt=""/>
                    </IconWrapper>
                </div>
                <div className="info">
                    <IconWrapper>
                        <img src={information} alt=""/>
                    </IconWrapper>
                </div>
                <div className="notifications">
                    <IconWrapper>
                        <img src={alarm} alt=""/>
                    </IconWrapper>
                </div>
                <div className="user">
                    <IconWrapper>RG</IconWrapper>
                </div>
            </RightControls>
        </NavBarWrapper>
    )
}

export default NavBar