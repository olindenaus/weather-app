import "./CityInput.css";
import _ from "lodash";
import { useCallback } from "react";

interface CitInputProps {
    onInputChange: (value: string) => void;
}
const DEBOUNCE_TIME_MS = 1000;
export const CityInput = ({ onInputChange }: CitInputProps) => {

    const debounce = useCallback(
        _.debounce((val: string) => {
            onInputChange(val);	
        }, DEBOUNCE_TIME_MS),
        []
    );

    return (
        <div className="city-input">
            <input placeholder="Geneva" className="city-input__field" type="text" onChange={(e) => debounce(e.target.value)} />
            <span className="city-input__underline"></span>
        </div>
    )
}