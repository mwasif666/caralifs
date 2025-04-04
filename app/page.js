import Layout from "@/components/layout/Layout";

import CalculatorForm from "@/components/sections/CalculatorForm";
import CarServices from "@/components/sections/CardServices";
import CarValuation from "@/components/sections/CarValueation";

import SlideV3 from "@/components/sections/SlideV3";

import SetpForm from "@/components/sections/Step";
import TabCarService from "@/components/sections/TabCarService";
export default function Home6() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <SlideV3 />
        {/* <SearchForm /> */}
        {/* <IconBox /> */}
        {/* <ExploreCarV3 /> */}
        <CarServices />
        <CalculatorForm />
        <CarValuation />

        <TabCarService />
        {/* <PopulerMakes3 /> */}
        {/* <SpecialCar /> */}
        {/* <NewCars2 /> */}
        {/* <NewCars3 /> */}
      </Layout>
    </>
  );
}
