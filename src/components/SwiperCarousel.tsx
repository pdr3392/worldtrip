import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "../components/CarouselItem";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface HundredCitiesProps {
  city: string;
  country: string;
  elipseCountry: string;
  folderPath: string;
}

interface ContinentLargeItemsProps {
  highlight: string;
  info: string;
  infoIcon: boolean;
}

interface ContinentProps {
  name: string;
  uid: string;
  continentBanner: string;
  lgInfo: string;
  callToAction: string;
  swiperImage: string;
  lgItems: ContinentLargeItemsProps[];
  hundredCities: HundredCitiesProps[];
}

interface SwiperCarouselProps {
  continents: ContinentProps[];
}

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function SwiperCarousel({ continents }: SwiperCarouselProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      h={{
        base: "15rem",
        sm: "18rem",
        md: "25rem",
        lg: "26rem",
        xl: "28.125rem",
      }}
      w={{
        base: "100vw",
        sm: "100vw",
        md: "45rem",
        lg: "60rem",
        xl: "77.5rem",
      }}
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        {continents.map((continent) => (
          <SwiperSlide
            key={continent.uid}
            style={
              isWideVersion
                ? {
                    backgroundImage: `url(${continent.swiperImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "120%",
                  }
                : {
                    backgroundImage: `url(${continent.swiperImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "130%",
                  }
            }
          >
            <CarouselItem
              uid={continent.uid}
              continent={continent.name}
              info={continent.callToAction}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
