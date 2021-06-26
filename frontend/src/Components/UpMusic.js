import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Forward10Icon from '@material-ui/icons/Forward10';
import Replay10Icon from '@material-ui/icons/Replay10';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:"space-between"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 181,
    objectFit:"cover"
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function UpMusic(props) {
  const classes = useStyles();
  const theme = useTheme();
  const originalName= props.originalName
  const thumbnail=props.thumbnail
  const musicSrc= props.musicSrc


  const playAudio=()=> {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }


  return (
    <>
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {originalName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Basically This is my First Post ..
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <Forward10Icon /> : <Replay10Icon />}
          </IconButton>

          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>

          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <Replay10Icon /> : <Forward10Icon />}
          </IconButton> */}
          {/* <button onClick={playAudio}>
          <span>Play Audio</span>
        </button> */}
       
        {/* <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio> */}
        </div>
      </div>
      {thumbnail  ?
      <CardMedia
        className={classes.cover}
        
        // image="https://cdn.pixabay.com/photo/2015/01/20/12/51/mobile-605422__340.jpg"
        image={"http://localhost:5000/media/musicThumb/"+thumbnail}
        title={originalName}
      />
      :
      <CardMedia
        className={classes.cover}
        
        image="https://cdn.pixabay.com/photo/2015/01/20/12/51/mobile-605422__340.jpg"
        title={originalName}
      />
    }
    </Card>
      <AudioPlayer
    
    src={"http://localhost:5000/media/musicSrc/"+musicSrc}
    onPlay={e => console.log("onPlay")}
    layout="stacked"
    // other props here
  />
  </>
  );
}