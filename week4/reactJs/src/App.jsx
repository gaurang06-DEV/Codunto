import './App.css'

function App() {
  return (
      <>
        <Text display={<p>how are you Gaurang?</p>} />
        <Text display={<p>Hello World!</p>} />
      </>
  )
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
