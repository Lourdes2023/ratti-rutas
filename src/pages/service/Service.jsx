import React from "react";
import { useParams } from "react-router-dom";

import { ContainerInfoService, ContentInfoService } from "./ServiceStyles";
import { ServicesData } from "../../data/DataServices";
const Service = () => {
  const { Service } = useParams();
  const selectedService = ServicesData.find(
    (service) => service.title === Service
  );

  return (
    <ContainerInfoService>
      <ContentInfoService>
        <h4>Servicio de {selectedService?.title}</h4>
        <p>{selectedService?.description}</p>
        <img
          src={selectedService?.imageUrl}
          alt={selectedService?.title}
          style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "20px" }}
        />
      </ContentInfoService>
    </ContainerInfoService>
  );
};

export default Service;
