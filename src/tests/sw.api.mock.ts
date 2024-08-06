import { vi } from 'vitest';

export const useSwApi = vi.fn(() => ({
  getPeople: vi.fn().mockResolvedValue({
    results: [
      {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "height": "182",
        "mass": "77",
        "hair_color": "auburn, white",
        "skin_color": "fair",
        "eye_color": "blue-gray",
        "birth_year": "57BBY",
        "gender": "male",
        "homeworld": 20,
        "films": [
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "species": [
          1
        ],
        "vehicles": [
          38
        ],
        "starships": [
          48,
          59,
          64,
          65,
          74
        ],
        "created": "2014-12-10T16:16:29.192000Z",
        "edited": "2014-12-20T21:17:50.325000Z",
        "url": "https://sw-api.starnavi.io/people/10/"
      },
      {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "height": "180",
        "mass": "unknown",
        "hair_color": "auburn, grey",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "64BBY",
        "gender": "male",
        "homeworld": 21,
        "films": [
          1,
          6
        ],
        "species": [
          1
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T16:26:56.138000Z",
        "edited": "2014-12-20T21:17:50.330000Z",
        "url": "https://sw-api.starnavi.io/people/12/"
      },
      {
        "id": 13,
        "name": "Chewbacca",
        "height": "228",
        "mass": "112",
        "hair_color": "brown",
        "skin_color": "unknown",
        "eye_color": "blue",
        "birth_year": "200BBY",
        "gender": "male",
        "homeworld": 14,
        "films": [
          1,
          2,
          3,
          6
        ],
        "species": [
          3
        ],
        "vehicles": [
          19
        ],
        "starships": [
          10,
          22
        ],
        "created": "2014-12-10T16:42:45.066000Z",
        "edited": "2014-12-20T21:17:50.332000Z",
        "url": "https://sw-api.starnavi.io/people/13/"
      },
      {
        "id": 14,
        "name": "Han Solo",
        "height": "180",
        "mass": "80",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "brown",
        "birth_year": "29BBY",
        "gender": "male",
        "homeworld": 22,
        "films": [
          1,
          2,
          3
        ],
        "species": [
          1
        ],
        "vehicles": [],
        "starships": [
          10,
          22
        ],
        "created": "2014-12-10T16:49:14.582000Z",
        "edited": "2014-12-20T21:17:50.334000Z",
        "url": "https://sw-api.starnavi.io/people/14/"
      },
      {
        "id": 15,
        "name": "Greedo",
        "height": "173",
        "mass": "74",
        "hair_color": "n/a",
        "skin_color": "green",
        "eye_color": "black",
        "birth_year": "44BBY",
        "gender": "male",
        "homeworld": 23,
        "films": [
          1
        ],
        "species": [
          4
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T17:03:30.334000Z",
        "edited": "2014-12-20T21:17:50.336000Z",
        "url": "https://sw-api.starnavi.io/people/15/"
      },
      {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "height": "175",
        "mass": "1,358",
        "hair_color": "n/a",
        "skin_color": "green-tan, brown",
        "eye_color": "orange",
        "birth_year": "600BBY",
        "gender": "hermaphrodite",
        "homeworld": 24,
        "films": [
          1,
          3,
          4
        ],
        "species": [
          5
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T17:11:31.638000Z",
        "edited": "2014-12-20T21:17:50.338000Z",
        "url": "https://sw-api.starnavi.io/people/16/"
      },
      {
        "id": 18,
        "name": "Wedge Antilles",
        "height": "170",
        "mass": "77",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "hazel",
        "birth_year": "21BBY",
        "gender": "male",
        "homeworld": 22,
        "films": [
          1,
          2,
          3
        ],
        "species": [
          1
        ],
        "vehicles": [
          14
        ],
        "starships": [
          12
        ],
        "created": "2014-12-12T11:08:06.469000Z",
        "edited": "2014-12-20T21:17:50.341000Z",
        "url": "https://sw-api.starnavi.io/people/18/"
      },
      {
        "id": 19,
        "name": "Jek Tono Porkins",
        "height": "180",
        "mass": "110",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "unknown",
        "gender": "male",
        "homeworld": 26,
        "films": [
          1
        ],
        "species": [
          1
        ],
        "vehicles": [],
        "starships": [
          12
        ],
        "created": "2014-12-12T11:16:56.569000Z",
        "edited": "2014-12-20T21:17:50.343000Z",
        "url": "https://sw-api.starnavi.io/people/19/"
      },
      {
        "id": 20,
        "name": "Yoda",
        "height": "66",
        "mass": "17",
        "hair_color": "white",
        "skin_color": "green",
        "eye_color": "brown",
        "birth_year": "896BBY",
        "gender": "male",
        "homeworld": 28,
        "films": [
          2,
          3,
          4,
          5,
          6
        ],
        "species": [
          6
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-15T12:26:01.042000Z",
        "edited": "2014-12-20T21:17:50.345000Z",
        "url": "https://sw-api.starnavi.io/people/20/"
      },
      {
        "id": 21,
        "name": "Palpatine",
        "height": "170",
        "mass": "75",
        "hair_color": "grey",
        "skin_color": "pale",
        "eye_color": "yellow",
        "birth_year": "82BBY",
        "gender": "male",
        "homeworld": 8,
        "films": [
          2,
          3,
          4,
          5,
          6
        ],
        "species": [
          1
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-15T12:48:05.971000Z",
        "edited": "2014-12-20T21:17:50.347000Z",
        "url": "https://sw-api.starnavi.io/people/21/"
      }
    ],
    count: 82,
    next: "https://sw-api.starnavi.io/people?page=2",
    previous: null,
  }),
  getPerson: vi.fn().mockResolvedValue({
    "id": 10,
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hair_color": "auburn, white",
    "skin_color": "fair",
    "eye_color": "blue-gray",
    "birth_year": "57BBY",
    "gender": "male",
    "homeworld": 20,
    "films": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "species": [
      1
    ],
    "vehicles": [
      38
    ],
    "starships": [
      48,
      59,
      64,
      65,
      74
    ],
    "created": "2014-12-10T16:16:29.192000Z",
    "edited": "2014-12-20T21:17:50.325000Z",
    "url": "https://sw-api.starnavi.io/people/10/"
  }),
  getFilms: vi.fn().mockResolvedValue({
    results: [
      {
        "id": 1,
        "title": "A New Hope",
        "episode_id": 4,
        "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "director": "George Lucas",
        "producer": "Gary Kurtz, Rick McCallum",
        "release_date": "1977-05-25",
        "characters": [
          10,
          12,
          13,
          14,
          15,
          16,
          18,
          19,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          81
        ],
        "planets": [
          1,
          2,
          3
        ],
        "starships": [
          2,
          3,
          5,
          9,
          10,
          11,
          12,
          13
        ],
        "vehicles": [
          4,
          6,
          7,
          8
        ],
        "species": [
          1,
          2,
          3,
          4,
          5
        ],
        "created": "2014-12-10T14:23:31.880000Z",
        "edited": "2014-12-20T19:49:45.256000Z",
        "url": "https://sw-api.starnavi.io/films/1/"
      },
      {
        "id": 2,
        "title": "The Empire Strikes Back",
        "episode_id": 5,
        "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
        "director": "Irvin Kershner",
        "producer": "Gary Kurtz, Rick McCallum",
        "release_date": "1980-05-17",
        "characters": [
          10,
          13,
          14,
          18,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          1,
          2,
          3,
          4,
          5
        ],
        "planets": [
          4,
          5,
          6,
          27
        ],
        "starships": [
          3,
          10,
          11,
          12,
          15,
          17,
          21,
          22,
          23
        ],
        "vehicles": [
          8,
          14,
          16,
          18,
          19,
          20
        ],
        "species": [
          1,
          2,
          3,
          6,
          7
        ],
        "created": "2014-12-12T11:26:24.656000Z",
        "edited": "2014-12-15T13:07:53.386000Z",
        "url": "https://sw-api.starnavi.io/films/2/"
      }
    ],
    count: 6,
    next: null,
    previous: null,
  }),
  getFilmById: vi.fn().mockResolvedValue({
    "id": 1,
    "title": "A New Hope",
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    "director": "George Lucas",
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1977-05-25",
    "characters": [
      10,
      12,
      13,
      14,
      15,
      16,
      18,
      19,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      81
    ],
    "planets": [
      1,
      2,
      3
    ],
    "starships": [
      2,
      3,
      5,
      9,
      10,
      11,
      12,
      13
    ],
    "vehicles": [
      4,
      6,
      7,
      8
    ],
    "species": [
      1,
      2,
      3,
      4,
      5
    ],
    "created": "2014-12-10T14:23:31.880000Z",
    "edited": "2014-12-20T19:49:45.256000Z",
    "url": "https://sw-api.starnavi.io/films/1/"
  }),
  getStarships: vi.fn().mockResolvedValue({
    results: [
      {
        "id": 27,
        "name": "Calamari Cruiser",
        "model": "MC80 Liberty type Star Cruiser",
        "manufacturer": "Mon Calamari shipyards",
        "cost_in_credits": "104000000",
        "length": "1200",
        "max_atmosphering_speed": "n/a",
        "crew": "5400",
        "passengers": "1200",
        "cargo_capacity": "unknown",
        "consumables": "2 years",
        "hyperdrive_rating": "1.0",
        "MGLT": "60",
        "starship_class": "Star Cruiser",
        "pilots": [],
        "films": [
          3
        ],
        "created": "2014-12-18T10:54:57.804000Z",
        "edited": "2014-12-20T21:23:49.904000Z",
        "url": "https://sw-api.starnavi.io/starships/27/"
      },
      {
        "id": 31,
        "name": "Republic Cruiser",
        "model": "Consular-class cruiser",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "unknown",
        "length": "115",
        "max_atmosphering_speed": "900",
        "crew": "9",
        "passengers": "16",
        "cargo_capacity": "unknown",
        "consumables": "unknown",
        "hyperdrive_rating": "2.0",
        "MGLT": "unknown",
        "starship_class": "Space cruiser",
        "pilots": [],
        "films": [
          4
        ],
        "created": "2014-12-19T17:01:31.488000Z",
        "edited": "2014-12-20T21:23:49.912000Z",
        "url": "https://sw-api.starnavi.io/starships/31/"
      },
      {
        "id": 40,
        "name": "Naboo Royal Starship",
        "model": "J-type 327 Nubian royal starship",
        "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
        "cost_in_credits": "unknown",
        "length": "76",
        "max_atmosphering_speed": "920",
        "crew": "8",
        "passengers": "unknown",
        "cargo_capacity": "unknown",
        "consumables": "unknown",
        "hyperdrive_rating": "1.8",
        "MGLT": "unknown",
        "starship_class": "yacht",
        "pilots": [
          39
        ],
        "films": [
          4
        ],
        "created": "2014-12-19T17:45:03.506000Z",
        "edited": "2014-12-20T21:23:49.919000Z",
        "url": "https://sw-api.starnavi.io/starships/40/"
      },
      {
        "id": 41,
        "name": "Scimitar",
        "model": "Star Courier",
        "manufacturer": "Republic Sienar Systems",
        "cost_in_credits": "55000000",
        "length": "26.5",
        "max_atmosphering_speed": "1180",
        "crew": "1",
        "passengers": "6",
        "cargo_capacity": "2500000",
        "consumables": "30 days",
        "hyperdrive_rating": "1.5",
        "MGLT": "unknown",
        "starship_class": "Space Transport",
        "pilots": [
          44
        ],
        "films": [
          4
        ],
        "created": "2014-12-20T09:39:56.116000Z",
        "edited": "2014-12-20T21:23:49.922000Z",
        "url": "https://sw-api.starnavi.io/starships/41/"
      },
    ],
    count: 36,
    next: "https://sw-api.starnavi.io/starships?page=2",
    previous: null,
  }),
  getStarshipById: vi.fn().mockResolvedValue({
    "id": 10,
    "name": "Millennium Falcon",
    "model": "YT-1300 light freighter",
    "manufacturer": "Corellian Engineering Corporation",
    "cost_in_credits": "100000",
    "length": "34.37",
    "max_atmosphering_speed": "1050",
    "crew": "4",
    "passengers": "6",
    "cargo_capacity": "100000",
    "consumables": "2 months",
    "hyperdrive_rating": "0.5",
    "MGLT": "75",
    "starship_class": "Light freighter",
    "pilots": [
      13,
      14,
      25,
      31
    ],
    "films": [
      1,
      2,
      3
    ],
    "created": "2014-12-10T16:59:45.094000Z",
    "edited": "2014-12-20T21:23:49.880000Z",
    "url": "https://sw-api.starnavi.io/starships/10/"
  }),
}));
