import React from 'react'
import { Button } from '@aragon/ui'

import DAIIcon from '../assets/dai.svg'
import ANTIcon from '../assets/ant.svg'
import ANJIcon from '../assets/anj.svg'

import Balance from './Balance'

function Balances() {
  return (
    <div>
      <div
        css={`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        `}
      >
        <div>
          <h4>Wallet balance</h4>
          <Balance
            symbol="DAI"
            amount="3.304,76"
            value="3.300"
            iconSrc={DAIIcon}
          />
          <Balance
            symbol="ANT"
            amount="3.304,76"
            value="3.300"
            iconSrc={ANTIcon}
          />
        </div>
        <div>
          <h4>Staked balance</h4>
          <Balance
            symbol="ANJ"
            amount="3.304,76"
            value="3.300"
            iconSrc={ANJIcon}
          />
          <Button>Unstake</Button>
        </div>
        <div>
          <h4>Active balance</h4>
          <Balance
            symbol="ANJ"
            amount="3.304,76"
            value="3.300"
            iconSrc={ANJIcon}
          />
          <Button>Deactivate</Button>
        </div>
        <div>
          <h4>Rewards</h4>
          <Balance
            symbol="DAI"
            amount="3.304,76"
            value="3.300"
            iconSrc={DAIIcon}
          />
          <Balance
            symbol="ANJ"
            amount="3.304,76"
            value="3.300"
            iconSrc={ANJIcon}
          />
        </div>
      </div>
    </div>
  )
}

export default Balances
