import { Chip, Container } from "@mui/material";
import React from "react";
import { Product } from "../../types/ProductTypes";

interface SidebarProps {
    product: Product
}

const Sidebar = ({ product }: SidebarProps) => {
    return <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img src={product.image} alt={product.title} height={'200px'} width={'200px'} />
        <h1 style={{ fontSize: '16px' }}>{product.title}</h1>
        <p style={{ fontSize: '12px', color: 'gray', textAlign: 'center' }}>{product.subtitle}</p>
        <Container sx={{ display: "flex-wrap", mt: 1 }}>
            {product.tags.map((tag) => <Chip key={tag} style={{ margin: '2px', borderRadius: '8px' }} variant="outlined" label={tag} />)}
        </Container>
    </Container>
}

export default Sidebar