# EdwardMartin

A personal Website for my CV, and other aspects of the coding world that interest me.

This project is currently a work in progress.

Check it out here: www.edwardjamesmartin.co.uk

### React Setup

- Make a project with no capital letters or spaces in the name
- Install node
- install react `npx create-react-app .`
- remove useless files
  - App.js
    - remove all boilerplate return code, just return the word "hello"
    - remove the logo and CSS import
  - Remove the:
    - test files
    - logo
    - service worker
      - - service worker code
    - report web vitals
- should just have `App.js` and `Index.js` left.
- `npm install --save-dev node-sass`
- `npm audit fix --force`
- Gatsby will provide static html sites that pre-load to a server
- `npm i gatsby` (this is for fast deployes)
- `npm init gatsby`

### Dependancies

#### Why did I use https://github.com/fisshy/react-scroll

So far the button correctly scrolls to the second component, but immediately as opposed to smoothly.

I've tried various options within the onClick function, following the MDN guide: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView and also a similar guide https://www.carlrippon.com/scrolling-a-react-element-into-view/.

- I tried: `props.scrollTo.current.scrollIntoView()`; which works, but snaps to the component immediately
- I tried the below, which when the button is clicked, does nothing, the scroll doesn't happen

```
    props.scrollTo.current.scrollIntoView({ // this does nothing
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
```

- I tried the below also, but again, the scroll doesn't happen.

```
    props.scrollTo.current.scrollIntoView({ // this also does nothing
      behavior: 'smooth',
    });
```

I've been googling the issue, and Ive been on various stack overflows trying to understand how to integrate useRef (which is how I am referring to the element in the parent component, by passing the ref down to the button in props.scrollTo ) and another lead me to stack overflow, which showed me this little trick to include in the root of my scss.

```
* {
    -webkit-overflow-scrolling: touch;
}
```

But unfortunately this doesn't work.

So, I'm opting for a regularly used library with two commonly used dependencies:

- `lodash.throttle` (common)
- `prop-types` common for adding types to props
