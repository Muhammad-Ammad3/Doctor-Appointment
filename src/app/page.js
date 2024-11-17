import HeroSection from "./components/HeroSection";

import DoctorsSection from "./components/DoctorSection";

export default function Home(){
return(
  <div className="container mx-auto min-h-screen">
    <HeroSection/>
  <DoctorsSection isHome={true}/>
  </div>
)
}