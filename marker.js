const marker = [
  {
    Name: 'KIS',
    lat: 33.289631,
    lng: 126.283982,
  },
  {
    Name: 'NLCS',
    lat: 33.297159,
    lng: 126.288322,
  },
  {
    Name: 'BHA',
    lat: 33.291213,
    lng: 126.287798,
  },
  {
    Name: 'SJA',
    lat: 33.283767,
    lng: 126.283465,
  },
];

fetch(
  'https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=hui2Ad85mnn3UUJVqfrZFR7RVtqqPv0GLVB7hD2f8NgVyPEp5UOnosQJktivS%2FfukpCg1aXeyNl3a%2F3IQAUWZQ%3D%3D'
)
  .then((r) => r.json())
  .then((r) => console.log(r));
