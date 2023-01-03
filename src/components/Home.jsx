import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import React from "react";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        sx={{ mt: 10 }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={card1} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Freedom Unlimited
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Credit Card
            </Typography>
            <ul>
              <li>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: "bold" }}
                >
                  $200 bonus plus 5% grocery store offer
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  Earn unlimited 1.5% cash back or more on all purchases
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  No Annual Fee
                </Typography>
              </li>
            </ul>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                navigate("/creditcard");
              }}
            >
              Apply Now
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={card2} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Freedom Flex
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Credit Card
            </Typography>
            <ul>
              <li>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: "bold" }}
                >
                  $200 bonus plus 5% grocery store offer
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  Earn 5% cash back on quarterly bonus categories (spend limits
                  apply, must activate quarterly)
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  No Annual Fee
                </Typography>
              </li>
            </ul>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Apply Now
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={card3} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shapphire preferred
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Credit Card
            </Typography>
            <ul>
              <li>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: "bold" }}
                >
                  Earn 60,000 bonus points
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  Earn 3X on dining and 2X on travel
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  $95 Annual Fee
                </Typography>
              </li>
            </ul>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Apply Now
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
}
