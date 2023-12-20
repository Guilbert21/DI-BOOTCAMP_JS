// import logo from './logo.svg';
import './App.css';
import Actor from "./actors";

const famousPeople = [
  {
    firstName: "Pierre",
    lastName: "Jean",
    image: "https://www.voici.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2018.2F10.2F29.2F9b8be122-64ba-40a2-826d-de20d8c4c7c4.2Ejpeg/2048x1536/quality/80/pierre-jean-chalencon.jpeg",
  },
  {
    firstName: "Chandler",
    lastName: "Scott",
    image: "https://img.bleacherreport.net/img/images/photos/003/579/124/hi-res-3ada437720a7d00b93ee179efbe2838e_crop_north.jpg?1456956536&w=3072&h=2048",
  },
  {
    firstName: "Sophia",
    lastName: "Loren",
    image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-71643263-copy.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <Actor famousPeople={famousPeople} />
    </div>
  );
}

export default App;
