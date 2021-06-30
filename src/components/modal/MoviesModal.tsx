import React from 'react';
import './MoviesModal.scss';

export default function MovieModal({ open, onClose, movieId }: any) {
  if (!open) return null;

  return (
    <>
      <div className="Overlay" />
      <div className="MovieModal">
        <button type="button" onClick={onClose}>X</button>
        <h1>{movieId}</h1>
        <h1>HOLAA</h1>
      </div>
    </>
  );
}
