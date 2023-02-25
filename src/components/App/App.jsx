import ScrollToTop from "react-scroll-to-top";

import SearchForm from "../SearchForm/SearchForm/";
import Stories from "../Stories/Stories";
import Buttons from "../Buttons/Buttons";

function App() {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
      <ScrollToTop smooth={true} className='scrollToTop' height='22'  />
    </>
  );
}

export default App;
