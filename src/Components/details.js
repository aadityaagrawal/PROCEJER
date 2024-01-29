import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";

function InfoComponent() {
  return (
    <div className="container-fluid pb-5">
      <Row>
        <Col style={{ backgroundColor: "#F8F6F6" }}>
          <div className="d-flex flex-column p-5">
            <div className="fs-4 fw-bold mb-2" style={{ color: "#C05830" }}>
              Sales & Purchase
            </div>
            <div className="mb-4">
              Manage sales and purchase orders, create invoices, and order
              management system.
            </div>
            <br />
            <ListGroup>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1 fs-6 fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                Order Confirmation
              </ListGroup.Item>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1  fs-6 fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                Purchase Order
              </ListGroup.Item>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1 fs-6  fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                Sales Order
              </ListGroup.Item>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1  fs-6 fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                GST Invoices
              </ListGroup.Item>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1  fs-6 fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                Credit/Debit Note
              </ListGroup.Item>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1 fs-6  fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                Service Transactions
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>

        <Col style={{ backgroundColor: "white" }}>
          <div className="d-flex flex-column p-5">
            <div className="fs-4 fw-bold mb-2" style={{ color: "#C05830" }}>
              Inventory Management
            </div>
            <div className="mb-4">
              Our Inventory Management Software is designed to streamline your
              processes and increase profits.
            </div>

            <br />
            <ListGroup>
              <ListGroup.Item className="border-0 m-0 p-0 mb-1 fs-6 fw-semibold">
                Min/Max Stock Levels
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-0 p-0 mb-1  fs-6 fw-semibold">
                Multiple Stores
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-0 p-0 mb-1 fs-6  fw-semibold">
                Inventory Valuation
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-0 p-0 mb-1  fs-6 fw-semibold">
                Inventory Rejected/Dead Stock
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-0 p-0 mb-1  fs-6 fw-semibold">
                Negative Stock Restriction
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-0 p-0 mb-1 fs-6  fw-semibold">
                Barcode Tracking
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-0 p-0 mb-1  fs-6 fw-semibold">
                Auto Stock Adjustment
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-0 p-0 mb-1 fs-6  fw-semibold">
                Physical Stock Reconciliation
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>

        <Col style={{ backgroundColor: "#F8F6F6" }}>
          <div className="d-flex flex-column p-5">
            <div className="fs-4 fw-bold mb-2" style={{ color: "#C05830" }}>
              Production
            </div>
            <div className="mb-4">
              Plan and track the production process using TranZact to increase
              efficiency by eliminating downtime and cutting down cost.
            </div>

            <ListGroup>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1 fs-6 fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                Multi-Level Bill of Materials (BOM)
              </ListGroup.Item>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1  fs-6 fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                Work Order
              </ListGroup.Item>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1 fs-6  fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                Production Order
              </ListGroup.Item>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1  fs-6 fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                Outsourcing / Sub-Contract
              </ListGroup.Item>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1  fs-6 fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                Finished Goods Testing
              </ListGroup.Item>
              <ListGroup.Item
                className="border-0 m-0 p-0 mb-1 fs-6  fw-semibold"
                style={{ backgroundColor: "#F8F6F6" }}
              >
                Process Routing
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default InfoComponent;
