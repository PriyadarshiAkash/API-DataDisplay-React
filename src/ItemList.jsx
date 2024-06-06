// src/ItemList.js
import { useState, useEffect } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Container,
} from "@mui/material";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        ); // Using posts endpoint for example
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <List>
        {filteredItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={item.body} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ItemList;
