const arrayItemsList =[
    {
        id: "1",
        categoria: "consola",
        title: "ps4",
        img:
          "https://i.blogs.es/49ad65/ps4/450_1000.png"
      },
      {
        id: "2",
        categoria: "Juegos",
        title: "Cyberpunk 2077",
        img: "https://cdn-products.eneba.com/resized-products/e4F2hNGTi5VjMHS29as0dZaQpCPfP6jbQzhPu_GAQ_U_350x200_1x-0.jpeg"
      },
      {
        id: "3",
        categoria: "Perifericos",
        title: "Audio-Technica ATH-CHX7iS",
        img: "https://i.blogs.es/e0fbf3/audiotechnica/450_1000.jpg"
      }

]

const itemsPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res(arrayItemsList);
    }, 2000);
  });

export default itemsPromise;