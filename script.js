
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
       header.style.position = 'fixed';
       header.style.width = '95%';
    } else {
        header.style.position = 'absolute'  
    }
})

let cards = [
    {
      URL: "hoodie.png",
      Name: "hoodie",
      price: "300",
    },
    {
      URL: "shapka.png",
      Name: "New Year's hat",
      price: "200",
    },
    {
      URL: "tshirt.png",
      Name: "t-shirt Santa",
      price: "1599",
    },
    {
      URL: "ginger.png",
      Name: "Gingerbread earrings",
      price: "4.99",
    },
    {
      URL: "https://static.vecteezy.com/system/resources/previews/033/654/323/non_2x/santa-claus-bag-and-gifts-free-png.png",
      Name: "Santa bag",
      price: "300",
    },
    {
      URL: "stoking.png",
      Name: "Stoking",
      price: "200",
    },
    {
      URL: "https://pngimg.com/d/christmas_wreath_PNG80.png",
      Name: "Wreath",
      price: "1599",
    },
    {
      URL: "https://www.northernlightsandtrees.com/wp-content/uploads/2016/04/2651_lit.jpg",
      Name: "Garland",
      price: "4.99",
    }
  ]

  const gridCard = document.querySelector(".grid-card") // container
   
  cards.forEach(e => {
    const card = document.createElement('div');
    const cardImage = document.createElement('img')
    const cardName = document.createElement('h2');
    const price = document.createElement('p');

    card.classList.add('product');

    cardImage.src = e.URL;
    cardName.textContent = e.Name;
    price.textContent = e.price +'$';
   
    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(price);
    gridCard.appendChild(card);
  });





  const NUMBER_OF_SNOWFLAKES = 250;
  const MAX_SNOWFLAKE_SIZE = 4;
  const MAX_SNOWFLAKE_SPEED = 1.5;
  const SNOWFLAKE_COLOUR = '#ddd';
  const snowflakes = [];
  
  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.pointerEvents = 'none';
  canvas.style.top = '0px';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  
  
  const createSnowflake = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
      color: SNOWFLAKE_COLOUR,
      speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
      sway: Math.random() - 0.5 // next
  });
  
  const drawSnowflake = snowflake => {
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
      ctx.fillStyle = snowflake.color;
      ctx.fill();
      ctx.closePath();
  }
  
  const updateSnowflake = snowflake => {
      snowflake.y += snowflake.speed;
      snowflake.x += snowflake.sway; // next
      if (snowflake.y > canvas.height) {
          Object.assign(snowflake, createSnowflake());
      }
  }
  
  const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      snowflakes.forEach(snowflake => {
          updateSnowflake(snowflake);
          drawSnowflake(snowflake);
      });
  
      requestAnimationFrame(animate);
  }
  
  for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
      snowflakes.push(createSnowflake());
  }
  
  window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  });
  
  window.addEventListener('scroll', () => {
      canvas.style.top = `${window.scrollY}px`;
  });
  
  // setInterval(animate, 15);
  animate()


  const arrowup = document.getElementById('arrowup');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
          arrowup.style.display ='flex';
      } else {
          arrowup.style.display = 'none'
      }
  })
  