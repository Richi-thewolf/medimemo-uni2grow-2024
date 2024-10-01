import { IconButton, InputBase, Paper, Typography } from "@mui/material";
import "./Contacts.css";

import { useEffect, useState } from "react";
import search from "../../assets/images/contact/Icon.svg";
import add from "../../assets/images/contact/add_circle.svg";
import arrowBack from "../../assets/images/contact/arrow_forward_ios.svg";
import stethoscope from "../../assets/images/contact/stethoscope.svg";
import { IContact } from "../../models/Contact";

function Contacts() {
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [error, setError] = useState<string>("");

  const getContacts = async (): Promise<void> => {
    try {
      const result = await fetch("http://localhost:3000/contacts");
      const datas: IContacts[] = await result.json();
      setContacts(datas);
    } catch (error) {
      setError("failed to load contacts");
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const filteredContacts = contacts?.filter(
    (contact) =>
      contact.name.includes(searchQuery) ||
      contact.profession.includes(searchQuery)
  );

  function emptyContacts(contacts: IContacts[]): boolean {
    return contacts.length === 0;
  }
  function isNull(error: string): boolean {
    return error === "";
  }

  console.log(error);

  return (
    <>
      <div className="container">
        <div>
          <Typography className="typography">Contacts</Typography>
          <div className="searchContainer">
            <Paper
              component="div"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "90%",
                borderRadius: 20,
                backgroundColor: "#FFEFEF",
                maxHeight: 300,
                overflowY: "auto",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search doctor"
                inputProps={{ "aria-label": "search doctor" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <img src={search} alt="search icon" />
              </IconButton>
            </Paper>

            <div className="listContact">
              {!isNull(error) ? (
                <Typography sx={{ color: "red" }}>{error}</Typography>
              ) : emptyContacts(contacts) ? (
                <Typography>No contact available</Typography>
              ) : (
                filteredContacts.map((contact: IContacts) => (
                  <Paper
                    key={contact.id}
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      width: "90%",
                      justifyContent: "space-between",
                      backgroundColor: "#F4F4F4",
                      paddingTop: 1.5,
                      paddingBottom: 1.5,
                    }}
                  >
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="stethoscope"
                    >
                      <img src={stethoscope} alt="stethoscope icon" />
                    </IconButton>

                    <div className="contactName">
                      <Typography
                        sx={{ fontSize: 17, fontWeight: 700 }}
                        className="typography1"
                      >
                        {contact.qualification}. {contact.name}
                      </Typography>

                      <Typography
                        sx={{ fontSize: 10, fontWeight: 400 }}
                        className="typography2"
                      >
                        {contact.profession}
                      </Typography>
                    </div>

                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="arrowBack"
                    >
                      <img src={arrowBack} alt="arrowBack icon" />
                    </IconButton>
                  </Paper>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="addContainer">
          <img src={add} alt="add icon" />
        </div>
      </div>
    </>
  );
}

export default Contacts;
