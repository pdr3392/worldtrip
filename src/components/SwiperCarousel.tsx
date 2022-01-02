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
      h={["15.625rem", "28.125rem"]}
      w={["23.438rem", "77.5rem"]}
      mb={["1rem", "2.5rem"]}
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
