import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import propTypes from "prop-types";

function ReadQR({ openQRModal, setOpenQRModal, onData }) {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      const scanResult = JSON.parse(data);
      setScanResult(scanResult);
      onData(scanResult);
      setOpenQRModal(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Modal show={openQRModal} onClose={() => setOpenQRModal(false)}>
      <Modal.Header>Scan QR</Modal.Header>
      <Modal.Body>
        <div>
          {scanResult ? (
            <div>
              <h2>Result</h2>
              <p>JSON.parse(scanResult)</p>
            </div>
          ) : (
            <QrReader delay={300} onError={handleError} onResult={handleScan} />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

ReadQR.propTypes = {
  openQRModal: propTypes.bool.isRequired,
  setOpenQRModal: propTypes.func.isRequired,
  onData: propTypes.func.isRequired
};

export default ReadQR;
