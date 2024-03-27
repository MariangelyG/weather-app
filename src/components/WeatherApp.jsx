import { Box, Card, Typography, styled } from "@mui/material";
import { DataApp } from "../hooks/DataApp";
import { SearchButton } from "./SearchButton";
import { InfoCard } from "./InfoCard";

//components styled
const Container = styled(Box)({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
});

const CardContainer = styled(Card)({
  width: "50%",
  height: "50vh",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  bgcolor: "grey",
  opacity: 0.7,
  boxShadow: "5px 5px 5px black",
  border: "outset",
  padding: "32px",
  boxSizing: "border-box",
});

const CardInfoContainer = styled(Card)({
  bgcolor: "white",
  width: "50%",
  height: "25vh",
  borderRadius: "16px",
  border: "ridge",
  boxShadow: "2px 2px 2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxSizing: "border-box",
  padding: "32px",
});

//renderizado de la app
export const WeatherApp = () => {
  const { city, weather, handleChange, onSubmit, error } = DataApp();

  return (
    <Container>
      <CardContainer>
        <Typography
          variant="h4"
          component="h1"
          color="secondary.dark"
          fontFamily="cursive"
        >
          WeatherApp
        </Typography>

        <SearchButton
          onSubmit={onSubmit}
          handleChange={handleChange}
          city={city}
        />
        <CardInfoContainer>
          {weather.city == "" && (
            <img
              src="https://play-lh.googleusercontent.com/e67fyhPdbhARNhMniiSLmkIhqj_kF-cH8KWC-dr8u5a_O_RNdylUcAyMeZWMJ_MAvA=w240-h480-rw"
              className="imagenClima"
            />
          )}

          {error && <InfoCard error={error} />}
          {weather.city !== "" && <InfoCard weather={weather} />}
        </CardInfoContainer>
      </CardContainer>
    </Container>
  );
};
