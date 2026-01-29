"use client";

import MenuItem from "@mui/material/MenuItem";
import Select, {SelectChangeEvent} from '@mui/material/Select';
import { useUIStore } from "../store/useUIStore";
import { Stack } from "@mui/material";

export default function AdminUI() {
    const { 
        buttonColor, setButtonColor,
        buttonSize, setButtonSize,
        cardTitleSize, setCardTitleSize
    } = useUIStore();

    return <Stack>
        <Select 
            value={buttonColor} 
            onChange={(e) => setButtonColor(e.target.value)}
            displayEmpty
            sx={{ m: 1, minWidth: 120 }}
        >
            <MenuItem value={""}>Button Color</MenuItem>
            <MenuItem value={"red"}>red</MenuItem>
            <MenuItem value={"pink"}>pink</MenuItem>
            <MenuItem value={"green"}>green</MenuItem>
            <MenuItem value={"gray"}>gray</MenuItem>
        </Select>

        <Select 
            value={buttonSize} 
            onChange={(e) => setButtonSize(e.target.value)}
            displayEmpty
            sx={{ m: 1, minWidth: 120 }}
        >
            <MenuItem value={""}>Button Size</MenuItem>
            <MenuItem value={"sm"}>sm</MenuItem>
            <MenuItem value={"xl"}>xl</MenuItem>
            <MenuItem value={"xxl"}>xxl</MenuItem>
            <MenuItem value={"xxxl"}>xxxl</MenuItem>
        </Select>

        <Select 
            value={cardTitleSize} 
            onChange={(e) => setCardTitleSize(e.target.value)}
            displayEmpty
            sx={{ m: 1, minWidth: 120 }}
        >
            <MenuItem value={""}>Card Title Size</MenuItem>
            <MenuItem value={"sm"}>sm</MenuItem>
            <MenuItem value={"xl"}>xl</MenuItem>
            <MenuItem value={"xxl"}>xxl</MenuItem>
            <MenuItem value={"xxxl"}>xxxl</MenuItem>
        </Select>
    </Stack>
}