import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import propTypes from "prop-types";

function ReadQR({ openQRModal, setOpenQRModal, onData }) {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      console.log("data", data);

      const scanResultQR = JSON.parse(data[0].rawValue);

      setScanResult(scanResultQR);

      onData(scanResultQR);
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
            <Scanner scanDelay={300} onError={handleError} onScan={handleScan} />
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
