import React from "react";
import { Typography, TextField, FormControl,
    Select, Button, IconButton,Link, InputLabel, MenuItem, Chip
 } from "@mui/material";
 import "./AddTherapy.css";
 import arrow_left_alt from "../../assets/images/appNavigation/arrow_left_alt.png";
 import save from "../../assets/images/appNavigation/save.png";
 import { useNavigate } from "react-router-dom";
 import { useState } from "react";

export function AddTherapy(){
    const navigate = useNavigate();
    const [selectedMedications, setSelectedMedications] = useState<string[]>([]);
    const [therapyName, setTherapyName] = useState("");

    const handleClick = () => {
        navigate("/therapies");
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedMedications(event.target.value as string[]);
    };

    const handleSave = () => {
        // Ajoutez la logique de sauvegarde ici
        console.log("Sauvegarde de la thérapie :", therapyName, selectedMedications);
    };


    return(
        <>
            <div className="contenu">
                <div className="panel1">
                <IconButton component={Link} onClick={handleClick}>
                <img
                  src={arrow_left_alt}
                  alt="Arrow left"
                />
              </IconButton>
                </div>
                <div className="panel2">
                    <div className="panel21">
                        <Typography sx={{
                            color: "#000",
                            fontFamily: "Open Sans"}}>
                            New therapy
                        </Typography>
                        <div className="inputName">
                            <TextField id="outlined" variant="outlined"
                            label="Therapy name"
                            value={therapyName}
                            onChange={(e) => setTherapyName(e.target.value)}
                            sx={{width: "310px"}}
                           />                          
                        </div>
                    </div>
                    <div className="panel22">
                        <Typography>
                            select one or more medecines
                        </Typography>
                        <FormControl fullWidth>
                                <InputLabel id="">medication</InputLabel>
                                <Select 
                                label="medication"
                                multiple
                                value={selectedMedications}
                                onChange={handleChange}
                                renderValue={(selected) => (
                                    <div>
                                        {(selected as string[]).map((value) => (
                                            <Chip key={value} label={value} style={{ margin: 2 }} />
                                        ))}
                                    </div>
                                )} 
                            >
                                {/* Remplacez ces options par vos données */}
                                <MenuItem value="Medication A">Medication A</MenuItem>
                                <MenuItem value="Medication B">Medication B</MenuItem>
                                <MenuItem value="Medication C">Medication C</MenuItem>
                                <MenuItem value="Medication D">Medication D</MenuItem>
                                
                                    {/*<MenuItem value={10}></MenuItem>
                                    <MenuItem value={20}></MenuItem>
                                    <MenuItem value={30}></MenuItem> */}
                                </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="Panel3" >
                    <div className="btnSave">
                        <IconButton type="button" aria-label="save"
                        sx={{width: 24,height: 24}}>
                            <img src={save} alt="save icon"/>
                            <Typography sx={{color: "#FFF"}}>save</Typography>
                        </IconButton>
                        
                    </div>
                </div>
            </div>
        </>
    )
}