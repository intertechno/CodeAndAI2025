import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import FormInputValidation from './FormInputValidation'
// import UserListWithFiltering from './UserListWithFiltering'
import ColorPreview from './ColorPreview'
import ColorInput from './ColorInput'
// import UserList from './UserList'
// import MyFirstComponent from './MyFirstComponent'
// import Square from './Square'
// import CounterButtons from './CounterButtons'
// import UserList from './UserList'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState<string>("#ff0000");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Hello from VSC!</h1>

      {/*
      <FormInputValidation />
      <MyFirstComponent />
      <Square text="My Div Text" size={200} backgroundColor='purple' />
      <Square text="Something else!" size={150} backgroundColor='orange' />
      */}

      {/*
      <CounterButtons />
      */}

      <hr />
      <ColorInput color={color} onColorChange={setColor} />
      <ColorPreview color={color} />
      <hr />

      {/*
      <hr />
      <UserListWithFiltering />
      <hr />
      */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
