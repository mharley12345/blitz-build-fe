import { css } from 'styled-components'

// Breakpoints
export const breakpoints = {
  small: 600,
  medium: 768,
  large: 1200,
  xLarge: 1400
}

export const media = Object.entries(breakpoints).reduce(
  (acc, [label, size]) => ({
    ...acc,
    [label]: (...args) =>
      css`
        @media (min-width: ${size}px) {
          ${css(...args)};
        }
      `
  }),
  {}
)

export const mediaDown = Object.entries(breakpoints).reduce(
  (acc, [label, size]) => ({
    ...acc,
    [label]: (...args) =>
      css`
        @media (max-width: ${size - 1}px) {
          ${css(...args)};
        }
      `
  }),
  {}
)