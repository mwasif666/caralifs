// import Layout from "@/components/layout/Layout"
// import BrowseByMode from "@/components/sections/BrowseByMode"
// import CarBannerV1 from "@/components/sections/CarBannerV1"
// import CarBlogV1 from "@/components/sections/CarBlogV1"
// import CarListV2 from "@/components/sections/CarListV2"
// import CounterCar from "@/components/sections/CounterCar"
// import FeaturesCar from "@/components/sections/FeaturesCar"
// import IconBox from "@/components/sections/IconBox"
// import Logo from "@/components/sections/Logo"
// import Quote from "@/components/sections/Quote"
// import SellingCar from "@/components/sections/SellingCar"
// import Slide from "@/components/sections/Slide"
// import SlideSearchCar from "@/components/sections/SlideSearchCar"
// import TabCarService from "@/components/sections/TabCarService"
// import TestimonialCar from "@/components/sections/TestimonialCar"
// export default function Home() {

//     return (
//         <>

//             <Layout headerStyle={3} footerStyle={1}>
//                 <Slide />
//                 <SlideSearchCar />
//                 <IconBox />
//                 <TabCarService />
//                 <BrowseByMode />
//                 <Logo />
//                 <CarListV2 />
//                 <Quote />
//                 <SellingCar />
//                 <CounterCar />
//                 <TestimonialCar />
//                 <FeaturesCar />
//                 <CarBannerV1 />
//                 <CarBlogV1 />
//             </Layout>
//         </>
//     )
// }

import Layout from "@/components/layout/Layout";

import CalculatorForm from "@/components/sections/CalculatorForm";
import ExploreCarV3 from "@/components/sections/ExploreCarV3";
import IconBox from "@/components/sections/IconBox";
import NewCars2 from "@/components/sections/NewCars2";
import NewCars3 from "@/components/sections/NewCars3";
import PopulerMakes3 from "@/components/sections/PopulerMakes3";
import SearchForm from "@/components/sections/SearchForm";
import SlideV3 from "@/components/sections/SlideV3";
import SpecialCar from "@/components/sections/SpecialCar";
import TabCarService from "@/components/sections/TabCarService";
export default function Home6() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <SlideV3 />
        <SearchForm />
        <IconBox />
        <ExploreCarV3 />
        <TabCarService />
        <PopulerMakes3 />
        <SpecialCar />
        <NewCars2 />
        <NewCars3 />
        <CalculatorForm />
      </Layout>
    </>
  );
}
