import { AddShoppingCartOutlined } from "@mui/icons-material";
import { CardActionArea } from "@mui/material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";
// import Products from "./Products";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardActionArea className="card-actions">
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography>
          {product.name}
        </Typography>
        <Typography>
          ${product.cost}
        </Typography>
        {/* <Rating name="read-only" value={product.rating} /> */}
        <Rating
          name="read-only"
          value={product.rating}
          precision={0.5}
          readOnly
        />
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
        fullWidth 
        variant="contained" 
        className="card-button" 
        startIcon={<AddShoppingCartOutlined />}
        onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
