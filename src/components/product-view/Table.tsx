import * as React from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Product } from '../../types/ProductTypes';
import { TableSortLabel } from '@mui/material';

export interface TableProps {
    product: Product
}

const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const Table = ({ product }: TableProps) => {
    return (
        <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        <TableSortLabel active direction='asc'>
                            WEEK ENDING
                        </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">
                        <TableSortLabel>
                            RETAIL SALES
                        </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">
                        <TableSortLabel>
                            WHOLESALE SALES
                        </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">
                        <TableSortLabel>
                            UNITS SOLD
                        </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">
                        <TableSortLabel>
                            RETAILER MARGIN
                        </TableSortLabel>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {product.sales.map((sale) => (
                    <TableRow
                        key={sale.weekEnding}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {new Date(sale.weekEnding).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit'
                            })}
                        </TableCell>
                        <TableCell align="right">{USD.format(sale.retailSales)}</TableCell>
                        <TableCell align="right">{USD.format(sale.wholesaleSales)}</TableCell>
                        <TableCell align="right">{sale.unitsSold}</TableCell>
                        <TableCell align="right">{USD.format(sale.retailerMargin)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </MuiTable>
    );
}

export default Table