import React from 'react'
import theme from '../../config/theme'
import css from '@emotion/css'
import { darken } from 'polished'

const CalendarIcon = ({ color = theme.brand.primary, width = 12 }) => {
  return (
    <div
      css={css`
        color: ${color};
        :hover {
          color: ${darken(0.3, color)};
        }
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox={`0 0 24 24`}
      >
        <path
          fill="currentColor"
          d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
        />
        <path fill="none" d="M0 0h24v24H0z" />
      </svg>
    </div>
  )
}

export default CalendarIcon
