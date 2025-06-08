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
      <h3>Nuestros servicios</h3>
      <ServicesWrapper>
        {ServicesData.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
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