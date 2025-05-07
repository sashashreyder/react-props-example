
import ProfileCard from "./ProfileCard";
import './App.css'

function App() {
  

  return (
    <>
      < ProfileCard
      name="Anna"
      age={32}
      location="Berlin"
      avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwo2WUcswBNMdLmeD_lBqHWz4ZydZ-8qVhpw&s"
      />

< ProfileCard
      name="Maria"
      age={28}
      location="Edinburgh"
      avatarUrl="https://robohash.org/mail@ashallendesign.co.uk"
      />

< ProfileCard
      name="Peter"
      age={45}
      location="Washington"
      avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtb2ps4gYYHa5dwBB49DJGsUbQWVbtGAZHeQ&s"
      />
    </>
  )
}

export default App
