import './App.css';

function App() {
  return (
    <div className="App">
      <div id="wrap">
        <header id="header">
          <div className="header_container">
						<form>
							<select className='location' size='1'>
								<option>전체</option>
								<option>푸름관</option>
								<option>오름관</option>
								<option>아름관</option>
								<option>블랙홀</option>
							</select>
						</form>
          </div>
        </header>
        {/* header */}
        <section id="section">
          <div className="board"></div>
          <div className="board"></div>
          <div className="board"></div>
          <div className="board"></div>
          <div className="board"></div>
        </section>
        {/* section */}
        <footer id="footer"></footer>
        {/* footer */}
      </div>
      {/* wrap */}
    </div>
    // App
  );
}

export default App;
