import React from "react";
import { motion } from "framer-motion";

import {
  ServicesContainer,
  ServicesWrapper,
  Service,
  ServiceTitle,
  ServiceDescription,
  ServiceImage,
  LinkIten,
} from "./ServicesStyled";
import { servicesData } from "../../data/DataServices";

const Services = () => {
  return (
    <ServicesContainer>
      <h1>Nuestros servicios</h1>
      <ServicesWrapper>
        {servicesData?.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Service>
              <ServiceImage src={service.imageUrl} alt={service.title} />
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <LinkIten to={service.title}>Ver más</LinkIten>
            </Service>
          </motion.div>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
