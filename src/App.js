import './App.css';

function App() {
  return (
    <div className="App">
      <div id="wrap">
        <header id="header">
          <div className="header_container">
            <form>
              <select className="location" size="1">
                <option>전체</option>
                <option>푸름관</option>
                <option>오름관</option>
                <option>아름관</option>
                <option>블랙홀</option>
              </select>
            </form>
            <div className="btn_container">
              <button className="search"></button>
            </div>
            {/* 디자인에서 메뉴 여는 창 불필요해 보임 */}
          </div>
          <div className="scroll_header_container">
            <div className="category_container">
              <div>전체</div>
            </div>
            <div className="category_container">
              <div>한식</div>
            </div>
            <div className="category_container">
              <div>분식</div>
            </div>
            <div className="category_container">
              <div>카페</div>
            </div>
            <div className="category_container">
              <div>일식</div>
            </div>
            <div className="category_container">
              <div>치킨</div>
            </div>
            <div className="category_container">
              <div>피자</div>
            </div>
            <div className="category_container">
              <div>양식</div>
            </div>
            <div className="category_container">
              <div>중국집</div>
            </div>
            <div className="category_container">
              <div>족발</div>
            </div>
            <div className="category_container">
              <div>야식</div>
            </div>
            <div className="category_container">
              <div>찜</div>
            </div>
            <div className="category_container">
              <div>도시락</div>
            </div>
            <div className="category_container">
              <div>패스트푸드</div>
            </div>
            <div className="category_container">
              <div>채식</div>
            </div>
          </div>
        </header>
        {/* header */}
        <section id="section">
          <div className="board_container">
            <div className="board">
              <div className="board_header_container">
                <div className="profile_pic"></div>
								<div className='name_day_container'>
									<div className="nickname">Nickname</div>
									<div className="day">2022년 01월 23일</div>
								</div>
              </div>
            </div>
          </div>
          <div className="board_container"></div>
          <div className="board_container"></div>
          <div className="board_container"></div>
          <div className="board_container"></div>
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
