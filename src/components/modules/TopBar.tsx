import React from 'react'
import styled from 'styled-components'
import Button from '@src/components/controles/Button.tsx'

interface TopBarProps {
    className?: string
}

const TopBarComp = ({ className }: TopBarProps) => {

    return (
        <div className={className}>
            <div className="top-bar__content">
                <a className='top-bar__logo'>Task Master</a>
                <nav className="top-bar__nav-left">
                    <Button color="secondary" component="a">Login</Button>
                    <Button color="secondary">Signup</Button>
                </nav>
            </div>
        </div>
    )
}

const TopBar = styled(TopBarComp)`
    background-color: ${({theme}) => theme.colors.primary.main};
    padding: ${({ theme }) => theme.spacing[2]}px ${({theme}) => theme.spacing.large}px;
    .top-bar {
        &__content {
            display: flex;
            align-items: center;
        }
        &__logo {
            display: inline-block;
            color: ${({theme}) => theme.colors.type.onDark};
            font-weight: 500;
            font-size: 1.25rem;
        }
        &__nav-left {
            margin-left: auto;
        }
    }

`

export default TopBar