import MenuItem from "@mui/material/MenuItem";
import Select, {SelectChangeEvent} from '@mui/material/Select';

export default function AdminUI() {
    return <div>
        <Select>
            <MenuItem value={""}>Button Color</MenuItem>
            <MenuItem value={"red"}>red</MenuItem>
            <MenuItem value={"pink"}>pink</MenuItem>
            <MenuItem value={"green"}>green</MenuItem>
            <MenuItem value={"gray"}>gray</MenuItem>
        </Select>

        <Select>
            <MenuItem value={""}>Button Size</MenuItem>
            <MenuItem value={"sm"}>sm</MenuItem>
            <MenuItem value={"xl"}>xl</MenuItem>
            <MenuItem value={"xxl"}>xxl</MenuItem>
            <MenuItem value={"xxxl"}>xxxl</MenuItem>
        </Select>

        <Select>
            <MenuItem value={""}>Card Title Size</MenuItem>
            <MenuItem value={"sm"}>sm</MenuItem>
            <MenuItem value={"xl"}>xl</MenuItem>
            <MenuItem value={"xxl"}>xxl</MenuItem>
            <MenuItem value={"xxxl"}>xxxl</MenuItem>
        </Select>
    </div>
}