import type { Album } from '../../services/albums-store.service';

const albums: Album[] = [
  {
    amgArtistId: 123,
    artistId: 1477236687,
    artistName: 'HAUSER',
    artistViewUrl: 'https://music.apple.com/us/artist/hauser/1477236687?uo=4',
    artworkUrl60:
      'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fe/88/05/fe8805a5-33fc-d397-56bd-253c8b33ce3a/886447884034.jpg/60x60bb.jpg',
    artworkUrl100:
      'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fe/88/05/fe8805a5-33fc-d397-56bd-253c8b33ce3a/886447884034.jpg/100x100bb.jpg',
    collectionCensoredName: 'Classic',
    collectionId: 1,
    collectionName: 'Classic',
    collectionPrice: 9.99,
    collectionType: 'Album',
    collectionViewUrl:
      'https://music.apple.com/us/album/classic/1492002990?uo=4',
    copyright: '℗ 2019 Sony Music Entertainment',
    country: 'USA',
    currency: 'USD',
    primaryGenreName: 'Classical Crossover',
    releaseDate: '2020-02-07T08:00:00Z',
    trackCount: 17,
    wrapperType: 'collection',
  },
  {
    amgArtistId: 124,
    artistId: 58631709,
    artistViewUrl: 'https://music.apple.com/us/artist/hauser/1477236687?uo=4',
    collectionType: 'Album',
    collectionId: 193149303,
    artistName: 'Various Artists',
    collectionName: 'Club Epic - A Collection of Classic Dance Mixes',
    collectionCensoredName: 'Club Epic - A Collection of Classic Dance Mixes',
    collectionViewUrl:
      'https://music.apple.com/us/album/club-epic-a-collection-of-classic-dance-mixes/193149303?uo=4',
    artworkUrl60:
      'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/72/eb/76/72eb767d-8288-3121-049b-303657c7905d/mzi.xvhpetfv.jpg/60x60bb.jpg',
    artworkUrl100:
      'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/72/eb/76/72eb767d-8288-3121-049b-303657c7905d/mzi.xvhpetfv.jpg/100x100bb.jpg',
    collectionPrice: -1.0,
    trackCount: 11,
    copyright:
      '℗ 1975, 1977, 1980, 1984, 1989, 1990 SONY BMG MUSIC ENTERTAINMENT/(P) 1978 Sony Music Entertainment (UK) Limited/(P) 1980 GTO Records Ltd./(P) 1983 Solar Records/(P) 1985 Avante Garde Music',
    country: 'USA',
    currency: 'USD',
    releaseDate: '1990-07-03T07:00:00Z',
    primaryGenreName: 'Dance',
    wrapperType: 'collection',
  },
];

export default albums;
