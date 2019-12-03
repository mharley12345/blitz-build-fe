import { css } from 'styled-components'
const sizes = {
   extraLarge: 1480,
   large: 1200 ,
   medium: 900,
   small: 700,
   extraSmall: 400
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})