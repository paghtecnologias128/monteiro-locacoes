import React from "react";
import Modal from "./Modal";
import { useServicesModalStore } from "../store/useServicesModalStore";

const ServicesModal: React.FC = () => {
  const store = useServicesModalStore();

  return <Modal store={store} variant="service" />;
};

export default ServicesModal;
