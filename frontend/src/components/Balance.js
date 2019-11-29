import React from 'react'

import { GU } from '@aragon/ui'

export default function Balance({ symbol, amount, value, iconSrc }) {
  return (
    <div style={{ marginBottom: `${1 * GU}px` }}>
      <div>
        <img alt={symbol} src={iconSrc} />
        <span>{symbol}</span>
      </div>
      <div>
        <span>{amount}</span>
      </div>
      <span>{`$${value}`}</span>
    </div>
  )
}
