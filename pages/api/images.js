export default function apiImages(req, res) {
  console.log("API route called");
  if (req.method === "GET") {
    const images = [
      {
        id: 1,
        title: "Red-eyed Tree Frog",
        url: "https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_3x4.jpg",
        alt: "An image of a red-eyed tree frog sitting on leaves.",
      },
      {
        id: 2,
        title: "A smiley frog",
        url: "https://media.istockphoto.com/id/1049028724/photo/red-eyed-tree-frog-smile.jpg?s=612x612&w=0&k=20&c=mbgn5pLlHri8BV17jdw_nzzRBBJ9PC3IQryFADqHVqI",
        alt: "An image of a frog that is smiling happily",
      },
      {
        id: 3,
        title: "A Poison Dart Frog",
        url: "https://cdn.britannica.com/73/100273-050-221A0593/arrow-poison-frogs-sound-production-colour-warning-signal.jpg",
        alt: "An image of a colourful poison-dart frog.",
      },
      {
        id: 4,
        title: "Three cute froglets",
        url: "https://kids.earth.org/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-26T184215.475-900x600.jpg",
        alt: "An image of three small frogs on a branch.",
      },
      {
        id: 5,
        title: "A chonky green frog",
        url: "https://i0.wp.com/www.australiangeographic.com.au/wp-content/uploads/2018/06/Litoria_caerulea_-_Darwin_NT.jpg?fit=1000%2C672&ssl=1",
        alt: "An image of a very large shiny green frog.",
      },
      {
        id: 6,
        title: "A grumpy Rain Frog",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Breviceps_macrops_454407799.jpg/1200px-Breviceps_macrops_454407799.jpg",
        alt: "An image of a small Rain Frog, covered in sand.",
      },
    ];

    res.status(200).json(images);
  }
}
