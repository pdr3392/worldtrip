import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
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
import { useEffect, useState } from "react";
import api from "../services/api";

interface ContinentLargeItemsProps {
  highlight: string;
  info: string;
  infoIcon: boolean;
}

interface ContinentProps {
  name: string;
  uid: string;
  lgInfo: string;
  callToAction: string;
  swiperImage: string;
  lgItems: ContinentLargeItemsProps[];
}

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function SwiperCarousel() {
  const [continents, setContinents] = useState<ContinentProps[]>([]);

  useEffect(() => {
    async function loadContinents(): Promise<void> {
      const response = await api.get("/continents");

      setContinents(response.data);
    }

    loadContinents();
  }, []);

  console.log(continents);
  return (
    <Box h="28.125rem" w="77.5rem">
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
            style={{
              backgroundImage: `url(${continent.swiperImage})`,
            }}
          >
            <CarouselItem
              uid={continent.uid}
              continent={continent.name}
              info={continent.callToAction}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide
          style={{
            backgroundImage: "url('/images/EuropeSwiper.svg')",
          }}
        >
          <CarouselItem
            uid="europe"
            continent="Europa"
            info="O continente mais antigo."
          />
        </SwiperSlide>
        {/* 
        <SwiperSlide
          style={{
            opacity: 0.9,
            backgroundImage: "url('/images/NaSwiper.jpg')",
          }}
        >
          <CarouselItem
            uid="europe"
            continent="América do Norte"
            info="Mergulho cosmopolitano."
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url('/images/SaSwiper.jpg')",
          }}
        >
          <CarouselItem
            uid="europe"
            continent="América do Sul"
            info="La voz de Sudamérica."
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url('/images/AsSwiper.jpg')",
          }}
        >
          <CarouselItem
            uid="europe"
            continent="Ásia"
            info="Um leque de diversidade."
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            filter: "brightness(0.8)",
            backgroundImage: "url('/images/AfSwiper.jpg')",
          }}
        >
          <CarouselItem uid="europe" continent="África" info="Bambaataa" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            filter: "brightness(0.9)",
            backgroundImage: "url('/images/OcSwiper.jpg')",
          }}
        >
          <CarouselItem
            uid="europe"
            continent="Oceania"
            info="Um passeio nas grandes ilhas."
          />
        </SwiperSlide> */}
      </Swiper>
    </Box>
  );
}
