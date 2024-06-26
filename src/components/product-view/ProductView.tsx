import React from "react";
import Sidebar from "./Sidebar";
import Graph from "./Graph";
import Table from "./Table";
import { Box, Container } from "@mui/material";
import { Product } from "../../types/ProductTypes";

interface ProductViewProps {
    product: Product
}

const ProductView = ({ product }: ProductViewProps): JSX.Element => {

    return (
        <Box sx={{ display: "flex", paddingLeft: 2, paddingTop: 6, paddingBottom: 6, flexGrow: 1 }} >
            <Container sx={{ width: "20%", mr: 1 }}>
                <Sidebar product={product} />
            </Container>
            <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
                <Container sx={{ mb: 6 }}>
                    <Graph product={product} />
                </Container>
                <Container>
                    <Table product={product} />
                </Container>
            </Box>
        </Box>)
}

export default ProductView