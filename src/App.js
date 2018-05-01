// App.js is template for our component
// bring in React and Component instance from react
import React, {Component} from 'react'

// define our Hello component
class Hello extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <div>
        <h1>Hello World!</h1>
        <p> paragraph</p>
      </div>
    )
  }
}

export default Hello
/*
class Hello
This is the component we're creating. In this example, we are creating a "Hello" component.

extends Component
This is the React library class we inherit from to create our component definition.

render()
Every component has, at minimum, a render method. It generates a Virtual DOM node that will be added to the actual DOM.

Looks just like a regular ol' DOM node, but it's not yet attached to the DOM.
export default Hello
This exposes the Hello class to other files which import from the App.js file. The default keyword means that any import that's name doesn't match a named export will default to this. Only one default is allowed per file.*/
