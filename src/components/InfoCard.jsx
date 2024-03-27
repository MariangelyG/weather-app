import { Box, Typography } from "@mui/material";

//info de la app
export const InfoCard = ({ weather, error }) => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {weather && (
      <>
      <img src={weather.icon} className="imgP" />
      <Typography fontFamily="serif">
        <b>Ciudad:</b> {weather.city}, {weather.country}
      </Typography>

      <Typography fontFamily="serif">
        <b>Descripción:</b> {weather.condition}
      </Typography>
      <Typography fontFamily="serif">
        <b>Temperatura:</b> {weather.temp}
        <b>°C</b>
      </Typography>
      </>
      )}
      {error && (
        <Typography>{error.message}</Typography>
        )}
    </Box>
  );
};
