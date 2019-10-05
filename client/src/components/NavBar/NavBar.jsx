import React from 'react'
import styled from 'styled-components'

const NavBarWrapper = styled.div`
    height: 4rem;
    width: 100%;
    background-color: grey;
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
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.4rem;

        & > .__icon {
            height: 1.8rem;
            width: 1.8rem;
            background-color: white;
        }
    }

    & > .boards {
        background-color: black;
        height: 3.6rem;
        width: 6rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 0.6rem;
        margin-right: 0.4rem;

        & > .__icon {
            height: 1.8rem;
            width: 1.8rem;
            background-color: white;
        }

        & > .__label {

        }
    }

    & > .search {
        height: 3.6rem;
        width: 14rem;
        background-color: black;
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
        background-color: black;
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
        background-color: black;
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
        background-color: black;
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
        background-color: black;
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

function NavBar() {
    return (
        <NavBarWrapper>
            <LeftControls>
                <div className="home">
                    <div className="__icon"></div>
                </div>
                <div className="boards">
                    <div className="__icon">B</div>
                    <div className="__label">Boards</div>
                </div>
                <div className="search">
                    <input type="text" className="__input" />
                    <div className="__icon">M</div>
                </div>
            </LeftControls>
            
            <Logo>RYAN</Logo>

            <RightControls>
                <div className="plus">
                    <div className="__icon">+</div>
                </div>
                <div className="info">
                    <div className="__icon">I</div>
                </div>
                <div className="notifications">
                    <div className="__icon">N</div>
                </div>
                <div className="user">
                    <div className="__icon">RG</div>
                </div>
            </RightControls>
        </NavBarWrapper>
    )
}

export default NavBar