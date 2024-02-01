import './App.css';
import GallaryHeader from "./components/GalleryHeader";
import GallaryBody from "./components/GalleryBody";
import GallaryFooter from "./components/GallaryFooter";

function App(props) {
  const imageData = props.data;
  return (
    <div>
      <GallaryHeader/>
      <GallaryBody imageData={imageData}/>
      <GallaryFooter/>
    </div>
  )
}

export default App;