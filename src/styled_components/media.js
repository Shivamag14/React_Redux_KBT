// these sizes are arbitrary and you can set them to whatever you wish
import {
    css
} from 'styled-components'

const sizes = {
    giant: 1170,
    desktop: 992,
    tablet: 768,
    phone: 600
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    /* const emSize = sizes[label] / 16 */
    const emSize = sizes[label];
    console.log("label, accumulator: ", label, accumulator);
    accumulator[label] = (...args) => css `
    @media only screen and (max-width: ${emSize}px) {
      ${css(...args)}
    }
  `
    return accumulator
}, {})