import React from 'react'
import styled from 'styled-components'
import Jazzicon from 'react-jazzicon'

import UnlockPropTypes from '../../propTypes'
import { ETHEREUM_NETWORKS_NAMES } from '../../constants'

import Icons from '../interface/icons'

export function CreatorAccount({ account, network }) {
  const networkName = ETHEREUM_NETWORKS_NAMES[network.name[0]] || 'Unknown Network'

  // Using https://github.com/MetaMask/metamask-extension/blob/develop/ui/lib/icon-factory.js#L60 to make sure jazzicons are consistent between Metamask and unlock.
  const iconSeed = parseInt(account.address.slice(2, 10), 16)

  return (
    <Account>
      <AccountHead>
        <h2>Account</h2>
        <NetworkInfo>{networkName}</NetworkInfo>
      </AccountHead>

      <AccountDetails>
        <DoubleHeightCell>
          <Jazzicon diameter={40} seed={iconSeed} />
        </DoubleHeightCell>
        <Label>Address</Label>
        <Label>Balance</Label>
        <Label>Earning</Label>
        <DoubleHeightCell>
          <Button>
            <Icons.Upload fill={'#a6a6a6'} />
          </Button>
        </DoubleHeightCell>
        <DoubleHeightCell>
          <Button>
            <Icons.Download fill={'#a6a6a6'} />
          </Button>
        </DoubleHeightCell>
        <DoubleHeightCell>
          <Button>
            <Icons.Etherscan fill={'#a6a6a6'} />
          </Button>
        </DoubleHeightCell>
        <DoubleHeightCell />
        <Address>{account.address}</Address>
        <Value>0.02</Value>
        <Value>0.02</Value>
      </AccountDetails>
    </Account>
  )
}

CreatorAccount.propTypes = {
  account: UnlockPropTypes.account,
  network: UnlockPropTypes.network,
}

export default CreatorAccount

const Account = styled.section`
`
const AccountHead = styled.header`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  align-items: center;
  grid-gap: 8px;
`

const NetworkInfo = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  color: var(--red);
`

const AccountDetails = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  display: grid;
  row-gap: 8px;
  column-gap: 16px;
  grid-template-columns: 40px 200px repeat(2, 100px) repeat(3, 24px) 1fr;
`

const DoubleHeightCell = styled.div`
  display: grid;
  height: 40px;
  grid-row: span 2;
  align-self: center;
  font-size: 24px;
  align-content: center;
`

const Button = styled.a`
  background-color: var(--lightgrey);
  border-radius: 50%;
  height: 24px;
  display: grid;
`

const Label = styled.div `
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 8px;
`
const Address = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  width: 128px;
  font-weight: 300;
  word-wrap: break-word;
  word-break: break-all;
`
const Value = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--darkgrey);
`
