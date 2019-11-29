import React from 'react'
import { Button, GU, IconCheck } from '@aragon/ui'

import ProfileIcon from '../assets/profile.jpg'
import ANJProfileIcon from '../assets/anj-active.svg'

import Balances from './Balances'

const container = {
  background: 'white',
  border: '1px solid #DDE4E9',
  marginTop: '30px',
  padding: '36px',
}

export default function ProfileHeader({ active }) {
  return (
    <div style={container}>
      <div
        style={{
          marginBottom: `${3 * GU}px`,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', aligItems: 'cneter' }}>
          <div style={{ position: 'relative', marginRight: `${3 * GU}px` }}>
            <img alt="profile" src={ProfileIcon} />
            <img
              alt="active-juror"
              src={ANJProfileIcon}
              style={{ position: 'absolute', top: '0', right: '-5px' }}
            />
          </div>
          <div>
            <div style={{ marginBottom: `${1 * GU}px` }}>
              <span>Eliza Stewart</span>
              <span>
                <IconCheck color="#2CC68F" /> ACTIVE JUROR
              </span>
            </div>
            <div>
              <p>
                You are active and eligible to be drafted starting from the next
                term, on 14/12/19 at 16:00.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Button>View profile</Button>
        </div>
      </div>
      <Balances />
    </div>
  )
}
