import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Side from "./components/Side";

const App = () => {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col ">
      <Header />
      <div className="flex grow flex-row-reverse md:flex-row">
        <Side />
        <Main />
      </div>

      <Footer />
    </div>
  );
};

export default App;
