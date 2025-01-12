import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List/List';
import PlaylistItem from './playlistItem';

const styles = {

};

class Playlist extends Component {
  render() {
    const { onPlay, playlist } = this.props;
    const sorted = playlist.sort((a, b) => {
      if (a.index < b.index) return -1;
      if (a.index > b.index) return 1;
      return 0;
    });

    const items = sorted.map(song => (
      <PlaylistItem
        key={song.path}
        song={song}
        onPlay={onPlay}
      />
    ));

    return (
      <List>
        {items}
      </List>
    );
  }
}

Playlist.propTypes = {
  playlist: PropTypes.array.isRequired,
  onPlay: PropTypes.func.isRequired,
  classes: PropTypes.object
};

export default compose(
  withStyles(styles)
)(Playlist);
