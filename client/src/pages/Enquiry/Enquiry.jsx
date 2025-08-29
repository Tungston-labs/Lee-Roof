import React, { useEffect, useState } from "react";
import {
  TableWrapper,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  StatusBadge,
  ActionButtons,
  IconButton,
  Pagination,
  PageButton,
  Title,
  Subtitle,
} from "./Enquiry.Styles";
import Navbar from "../../components/Navbar/Navbar";
import { FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const EnquiryTable = () => {
  const [enquiries, setEnquiries] = useState([]); // ✅ state for API data
  const navigate = useNavigate();

  // Fetch enquiries from backend
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/enquiries");
        setEnquiries(res.data);
      } catch (err) {
        console.error("Error fetching enquiries:", err);
      }
    };
    fetchEnquiries();
  }, []);

  const handleDelete = async (id, name) => {
    Swal.fire({
      title: `Delete enquiry from ${name}?`,
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E63946",
      cancelButtonColor: "#ccc",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/api/enquiries/${id}`);
          setEnquiries(enquiries.filter((enq) => enq._id !== id)); // ✅ remove from state
          Swal.fire("Deleted!", "The enquiry has been removed.", "success");
        } catch (err) {
          Swal.fire("Error!", "Failed to delete enquiry.", "error");
        }
      }
    });
  };

  return (
    <>
      <Navbar />
      <TableWrapper>
        <Title>Enquiries</Title>
        <Subtitle>
          Glad to have you back. Check your dashboard for the latest product
          updates and manage your enquiries seamlessly.
        </Subtitle>

        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email ID</Th>
              <Th>Phone number</Th>
              <Th>Delivery location</Th>
              <Th>Status</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {enquiries.length > 0 ? (
              enquiries.map((row, i) => (
                <Tr key={row._id || i}>
                  <Td>{row.name}</Td>
                  <Td>{row.email}</Td>
                  <Td>{row.phone}</Td>
                  <Td>{row.location}</Td>
                  <Td>
                    <StatusBadge status={row.status}>{row.status}</StatusBadge>
                  </Td>
                  <Td>
                    <ActionButtons>
                      <IconButton
                        onClick={() => navigate(`/enquiry-page/${row._id}`)}
                      >
                        <FaEye />
                      </IconButton>
                    </ActionButtons>
                  </Td>
                  <Td>
                    <ActionButtons>
                      <IconButton
                        deleteBtn
                        onClick={() => handleDelete(row._id, row.name)}
                      >
                        <FaTrash />
                      </IconButton>
                    </ActionButtons>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td
                  colSpan="7"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  No enquiries found.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>

        <Pagination>
          <PageButton>{"<"}</PageButton>
          <PageButton active>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <PageButton>{">"}</PageButton>
        </Pagination>
      </TableWrapper>
    </>
  );
};

export default EnquiryTable;
