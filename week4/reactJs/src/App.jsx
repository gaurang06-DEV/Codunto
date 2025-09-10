import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Introduction</h2>
          <Text display="This is a simple React application using basic HTML." />
          <p>Here, you can explore different sections and learn more.</p>
          <img src="https://via.placeholder.com/400x200" alt="Sample banner" />
        </section>

        <section>
          <h2>Messages</h2>
          <Text display="How are you Gaurang?" />
          <Text display="Hello World!" />
          <blockquote>"Learning React is fun when you keep things simple."</blockquote>
        </section>

        <section>
          <h2>Form Example</h2>
          <form>
            <label>
              Name: 
              <input type="text" />
            </label>
            <br />
            <label>
              Email: 
              <input type="email" />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </section>

        <section>
          <h2>Extra Content</h2>
          <h3>Unordered List</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
          </ul>

          <h3>Ordered List</h3>
          <ol>
            <li>Install Node.js</li>
            <li>Create React App</li>
            <li>Start Development</li>
          </ol>

          <h3>Simple Table</h3>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Language</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JavaScript</td>
                <td>Frontend + Backend</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>Data Science</td>
              </tr>
              <tr>
                <td>Java</td>
                <td>Enterprise Apps</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <p>© 2025 My Website. All rights reserved.</p>
      </footer>
    </>
  )
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
