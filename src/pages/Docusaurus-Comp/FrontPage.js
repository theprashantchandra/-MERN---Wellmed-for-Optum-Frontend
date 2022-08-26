import { Grid, Card, Tabs, Typography, Tab, Box, TextField } from '@mui/material';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FrontPageNavbar from './FrontPageNavbar.js'
import { CssBaseline } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(https://images2.alphacoders.com/103/1036023.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));


const FrontPage = () => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
<CssBaseline />
<FrontPageNavbar/>
<Grid container justifyContent='center'>
  <Grid item sm={11}>
        <h1>Home Page </h1>
        <hr />
        <p>Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum officiis debitis vel tenetur quos animi vero voluptates reiciendis, omnis sed in libero temporibus deleniti pariatur expedita corporis officia. Odit enim, quasi facere magnam earum officiis ipsa aliquid impedit velit quibusdam dolor ex esse ratione explicabo quod, culpa temporibus? Dolorem deleniti doloremque maxime quas deserunt. Ex aspernatur saepe illo eaque corrupti placeat, aperiam nulla adipisci itaque quos necessitatibus iure at minus non delectus ratione quod ad. Alias dolore perferendis est expedita iure! Nostrum laborum tempore amet commodi voluptas accusamus enim repudiandae, quia odio cumque, laboriosam architecto illo! Aliquid, fuga quis.</p>
      <Grid borderColor={'red'} my={10} container justifyContent='center' spacing={3} >
              <Grid spacing={2} my={5} items xs={3} md={2}>
          <Card sx={{ maxWidth: 240 }}>
              <CardMedia
                      component="img"
                      height="30"
                      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                        />
              <CardContent>
                    <Typography label="Standard" textAlign='center' gutterBottom variant="h5" component="div">
          Helpful Resources
                    </Typography>
                    <hr />
                    <Typography textAlign='center' variant="body2" color="text.secondary">
        <a href="">aaa</a><br />
        <a href="">aaa</a><br />
                    </Typography>
              </CardContent>
              <CardActions>
                    <Button href="/dashboard/a" size="small">Share</Button><br />
                    <Button size="small">Learn More</Button>
              </CardActions>
        </Card>
              </Grid>

              <Grid spacing={2} my={5} items xs={3} md={2}>
                <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                </Card>
              </Grid>

              <Grid items spacing={2} my={5} xs={3} md={2}>
                <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                </Card>
              </Grid>

              <Grid items spacing={2} my={5} xs={3} md={2}>
                <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                </Card>
              </Grid>

              <Grid items spacing={2} my={5} xs={3} md={2}>
                <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                </Card>
              </Grid>

              <Grid items spacing={2} my={5} xs={3} md={2}>
                <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                </Card>
              </Grid>

     </Grid>
  </Grid>
</Grid>


      {/* 
      
      <h1>This is frontpage page</h1>
      <a href="/frontpage">aaaaa</a>
      */}
    </div>
  )
}

export default FrontPage
