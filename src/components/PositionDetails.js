import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase-config";
import { Box, Button, Paper, Container } from "@mantine/core";
import EditIcon from "@mui/icons-material/Edit";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

function PositionDetails() {
  const { id } = useParams();
  const [position, setPosition] = useState(null);
  const [childrenPositions, setChildrenPositions] = useState([]);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const positionDocRef = doc(db, "positions", id);
        const positionSnapshot = await getDoc(positionDocRef);
        const positionData = positionSnapshot.data();
        setPosition(positionData);
      } catch (error) {
        console.log("Error fetching position:", error);
      }
    };

    const fetchChildrenPositions = async () => {
      try {
        const positionsCollectionRef = collection(db, "positions");
        const q = query(positionsCollectionRef, where("parentId", "==", id));
        const querySnapshot = await getDocs(q);
        const childrenPositionsData = querySnapshot.docs.map((doc) =>
          doc.data()
        );
        setChildrenPositions(childrenPositionsData);
      } catch (error) {
        console.log("Error fetching children positions:", error);
      }
    };

    fetchPosition();
    fetchChildrenPositions();
  }, [id]);

  if (!position) {
    return <div>Loading...</div>;
  }

  return (
    <Container size="xs">
      <Paper padding="lg" sx={{ backgroundColor: "transparent" }}>
        <Box className=" w-auto dark:text-white text-black justify-content-center align-items-center">
          <h2 className="text-4xl font-bold font-newone pb-4">
            Position Details
          </h2>
          <h3 className="text-2xl font-bold  font-newone pb-4">
            {position.name}
          </h3>
          <p className="text-lg font-newone pb-8">{position.description}</p>
          <Button
            variant="filled"
            color="teal"
            component={Link}
            className="text-lg font-sans bg-green-700 mb-3"
            to={`/positions/${position.id}/edit?employeeName=${position.employeeName}&description=${position.description}&positionName=${position.name}`}
          >
            <EditIcon />
            Edit
          </Button>
        </Box>
      </Paper>
      <div className="rounded-3xl">
        {childrenPositions.length > 0 ? (
          <table className="table-auto w-full rounded-xl dark:text-white text-black border dark:border-white border-black bg-transparent ">
            <thead className="bg-gradient-to-br from-green-200 via-purple-300 to-green-200 dark:bg-gradient-to-br dark:from-green-500 dark:via-gray-500 dark:to-green-500">
              <tr>
                <th className="px-4 py-2">Child</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="border dark:border-white border-black">
              {childrenPositions.map((childPosition, index) => (
                <tr
                  key={childPosition.id}
                  className={`${
                    index % 2 === 0
                      ? " bg-white dark:bg-gray-500"
                      : "bg-gray-200 dark:bg-gray-800"
                  } hover:bg-slate-400 dark:hover:bg-green-200 cursor-pointer hover:text-black `}
                >
                  <td className="border px-4 py-2 dark:border-white border-black">
                    {childPosition.name}
                  </td>
                  <td className="border px-4 py-2 dark:border-white border-black">
                    <Button
                      variant="filled"
                      component={Link}
                      to={`/positions/${childPosition.id}`}
                      className="bg-green-700 text-white hover:bg-green-600"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No child available</p>
        )}
      </div>
    </Container>
  );
}

export default PositionDetails;
