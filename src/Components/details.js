import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";

function InfoComponent() {
  const sections = [
    {
      title: "Sales & Purchase",
      description:
        "Manage sales and purchase orders, create invoices, and order management system.",
      items: [
        "Order Confirmation",
        "Purchase Order",
        "Sales Order",
        "GST Invoices",
        "Credit/Debit Note",
        "Service Transactions",
      ],
      backgroundColor: "#F8F6F6",
    },
    {
      title: "Inventory Management",
      description:
        "Our Inventory Management Software is designed to streamline your processes and increase profits.",
      items: [
        "Min/Max Stock Levels",
        "Multiple Stores",
        "Inventory Valuation",
        "Inventory Rejected/Dead Stock",
        "Negative Stock Restriction",
        "Barcode Tracking",
        "Auto Stock Adjustment",
        "Physical Stock Reconciliation",
      ],
      backgroundColor: "white",
    },
    {
      title: "Production",
      description:
        "Plan and track the production process using TranZact to increase efficiency by eliminating downtime and cutting down cost.",
      items: [
        "Multi-Level Bill of Materials (BOM)",
        "Work Order",
        "Production Order",
        "Outsourcing / Sub-Contract",
        "Finished Goods Testing",
        "Process Routing",
      ],
      backgroundColor: "#F8F6F6",
    },
  ];

  return (
    <div className="container-fluid pb-5">
      <Row>
        {sections.map((section, index) => (
          <Col key={index} style={{ backgroundColor: section.backgroundColor }}>
            <div className="d-flex flex-column p-5">
              <div className="fs-4 fw-bold mb-2" style={{ color: "#C05830" }}>
                {section.title}
              </div>
              <div className="mb-4">{section.description}</div>
              <br />
              <ListGroup>
                {section.items.map((item, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="border-0 m-0 p-0 mb-1 fs-6 fw-semibold"
                    style={{ backgroundColor: section.backgroundColor }}
                  >
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default InfoComponent;
