import React from "react";
import { motion } from "framer-motion";

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
  return (
    <ServicesContainer>
      <ServicesWrapper>
        {ServicesData?.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Service>
              <ServiceImage src={service.imageUrl} alt={service.title} />
              <ServiceTitle>{service.title}</ServiceTitle>
              <LinkIten to={`/Services/${service.title}`}>Ver más</LinkIten>
            </Service>
          </motion.div>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
