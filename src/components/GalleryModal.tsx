import React from 'react';
import Modal from './Modal';
import { useGalleryModalStore } from '../store/useGalleryModalStore';

const GalleryModal: React.FC = () => {
  const store = useGalleryModalStore();

  return <Modal store={store} variant="gallery" />;
};

export default GalleryModal;
