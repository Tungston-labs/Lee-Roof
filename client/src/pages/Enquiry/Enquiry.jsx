// EnquiryTable.js
import React from "react";
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
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const data = [
  {
    name: "Ajay kumar",
    email: "ajaydummy@gmail.com",
    phone: "6238945012",
    location: "dummy dummy",
    status: "Pending",
  },
  {
    name: "Ajay kumar",
    email: "ajaydummy@gmail.com",
    phone: "6238945012",
    location: "dummy dummy",
    status: "Open",
  },
  {
    name: "Ajay kumar",
    email: "ajaydummy@gmail.com",
    phone: "6238945012",
    location: "dummy dummy",
    status: "Closed",
  },
  {
    name: "Ajay kumar",
    email: "ajaydummy@gmail.com",
    phone: "6238945012",
    location: "dummy dummy",
    status: "Pending",
  },
  {
    name: "Ajay kumar",
    email: "ajaydummy@gmail.com",
    phone: "6238945012",
    location: "dummy dummy",
    status: "Open",
  },
  {
    name: "Ajay kumar",
    email: "ajaydummy@gmail.com",
    phone: "6238945012",
    location: "dummy dummy",
    status: "Closed",
  },
];

const EnquiryTable = () => {
    const navigate = useNavigate();

 const handleDelete = (name) => {
    Swal.fire({
      title: `Delete enquiry from ${name}?`,
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E63946",
      cancelButtonColor: "#ccc",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "The enquiry has been removed.", "success");
        // You would also remove it from state here if it's dynamic
      }
    });
  };
  return (
    <>
    <Navbar />
    <TableWrapper>
      <Title>Enquiry</Title>
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
          {data.map((row, i) => (
            <Tr key={i}>
              <Td>{row.name}</Td>
              <Td>{row.email}</Td>
              <Td>{row.phone}</Td>
              <Td>{row.location}</Td>
              <Td>
                <StatusBadge status={row.status}>{row.status}</StatusBadge>
              </Td>
<Td>
  <ActionButtons>
    <IconButton onClick={() => navigate('/enquiry-page')}>
      <FaEye />
    </IconButton>
  </ActionButtons>
</Td>


                   <Td>
                  <ActionButtons>
                    <IconButton deleteBtn onClick={() => handleDelete(row.name)}>
                      <FaTrash />
                    </IconButton>
                  </ActionButtons>
                </Td>
            </Tr>
          ))}
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
