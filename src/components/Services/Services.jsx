import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonCart from "../UI/Button/ButtonCart";
import {
  ServicesContainer,
  ServicesWrapper,
  Service,
  ServiceTitle,
  ServiceImage,
  LinkIten,
} from "./ServicesStyled";
import { ServicesData } from "../../data/DataServices";

const Services = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % ServicesData.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + ServicesData.length) % ServicesData.length);
  };

  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ButtonCart onClick={handlePrev}>Anterior</ButtonCart>
        <AnimatePresence mode="wait">
          <motion.div
            key={ServicesData[index].id}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <Service>
              <ServiceImage src={ServicesData[index].imageUrl} alt={ServicesData[index].title} />
              <ServiceTitle>{ServicesData[index].title}</ServiceTitle>
              <LinkIten to={`/Services/${ServicesData[index].title}`}>Ver más</LinkIten>
            </Service>
          </motion.div>
        </AnimatePresence>
        <ButtonCart onClick={handleNext}>Siguiente</ButtonCart>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;