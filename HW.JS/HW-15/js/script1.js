const musicLibrary = {
  count: 2,
  artists: [
    {
      ArtistName1: "The Beatles",
      ArtistAlbums1: [
        {
          AlbumTitle1: "SgtPepper's Lonely Hearts Club Band",
          AlbumYear1: 1967,
          AlbumTracks1: [
            {
              TrackTitle1: "With a Little Help from My friends",
              TrackDuration1: "2:44",
            },
            {
              TrackTitle2: "Lucy in the sky with the diamonds",
              TrackDuration2: "3:28",
            },
            {
              TrackTitle3: "A day in the life",
              TrackDuration3: "5:33",
            },
          ],
        },
        {
          AlbumTitle2: "Abbey Road",
          AlbumYear2: 1969,
          AlbumTracks2: [
            {
              TrackTitle4: "Come toghether",
              TrackDuration4: "4:19",
            },
            {
              TrackTitle5: "Something",
              TrackDuration5: "3:01",
            },
            {
              TrackTitle6: "Here comes the Sun",
              TrackDuration6: "3:06",
            },
          ],
        },
      ],
    },
    {
      ArtistName2: "Pink Floyd",
      ArtistAlbums2: [
        {
          AlbumTitle3: "The Wall",
          AlbumYear3: 1979,
          AlbumTracks3: [
            {
              TrackTitle7: "Another Brick in the wall, Part 2",
              TrackDuration7: "3:59",
            },
            {
              TrackTitle8: "Comfortably Numb",
              TrackDuration8: "6:23",
            },
            {
              TrackTitle9: "Hey You",
              TrackDuration9: "4:40",
            },
          ],
        },
        {
          AlbumTitle4: "Dark Side of the Moon",
          AlbumYear4: 1973,
          AlbumTracks4: [
            {
              TrackTitle10: "Speak to me/Breathe",
              TrackDuration10: "3:58",
            },
            {
              TrackTitle11: "Time",
              TrackDuration11: "7:06",
            },
            {
              TrackTitle12: "Money",
              TrackDuration12: "6:22",
            },
          ],
        },
      ],
    },
  ],
}

const {
    count: musicLibraryCount,
    artists: [
      {
        ArtistName1: ArtistName1,
        ArtistAlbums1: [
          {
            AlbumTitle1: albumName1,
            AlbumYear1: yearOfCreation1,
            AlbumTracks1: [
              {
                TrackTitle1: trackName1,
                TrackDuration1: trackTime1,
              },
              {
                TrackTitle2: rackName2,
                TrackDuration2: trackTime2,
              },
              {
                TrackTitle3: rackName3,
                TrackDuration3: trackTime3,
              },
            ],
          },
          {
            AlbumTitle2: albumName2,
            AlbumYear2: yearOfCreation2,
            AlbumTracks2: [
              {
                TrackTitle4: trackName4,
                TrackDuration4: trackTime4,
              },
              {
                TrackTitle5: trackName5,
                TrackDuration5: trackTime5,
              },
              {
                TrackTitle6: trackName6,
                TrackDuration6: trackTime6,
              },
            ],
          },
        ],
      },
      {
        ArtistName2: ArtistName2,
        ArtistAlbums2: [
          {
            AlbumTitle3: albumName3,
            AlbumYear3: yearOfCreation3,
            AlbumTracks3: [
              {
                TrackTitle7: trackName7,
                TrackDuration7: trackTime7,
              },
              {
                TrackTitle8: trackName8,
                TrackDuration8: trackTime8,
              },
              {
                TrackTitle9: trackName9,
                TrackDuration9: trackTime9,
              },
            ],
          },
          {
            AlbumTitle4: albumName4,
            AlbumYear4: yearOfCreation4,
            AlbumTracks4: [
              {
                TrackTitle10: trackName10,
                TrackDuration10: yearOfCreation10,
              },
              {
                TrackTitle11: trackName11,
                TrackDuration11: yearOfCreation11,
              },
              {
                TrackTitle12: trackName12,
                TrackDuration12: yearOfCreation12,
              },
            ],
          },
        ],
      },
    ],
  } = musicLibrary;