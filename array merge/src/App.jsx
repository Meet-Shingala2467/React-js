import Contact from "./Contact";

function App() {
  const obj = {
    name: "meet",
    age: 19,
    state: [{ name: "india" }, { name: "canada" }],
  };

  const address = {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
  };

  const cars = {
    cars: [{ luxery: "rolce roys" }, { sedan: "macleran" }],
  };
  const merge = { ...obj, ...address, ...cars };
  console.log(merge);

  return (
    <div>
      <Contact />

      <h1>Name :- {obj.name}</h1>
      <h1>Age :- {obj.age}</h1>

      {obj.state.map((state, index) => (
        <h1 key={index}>state :- {state.name}</h1>
      ))}

      {cars.cars.map((car, index) => (
        <h1 key={index}>cars :- {car.luxery ? car.luxery : car.sedan}</h1>
      ))}

      <img
        src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg"
        alt="DeLorean Alpha 5"
        style={{ width: "300px", height: "200px", align: "left" }}
      />
      <img
        src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Defender/11830/Land-Rover-Defender-Octa/1720081741749/front-left-side-47.jpg?imwidth=420&impolicy=resize"
        style={{ width: "300px", height: "200px", align: "left" }}
      />
      <img
        src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
        style={{ width: "300px", height: "200px", align: "left" }}
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0puNatX7POyLdzGNUFfciMRwaSLyU8-zsA&s"
        style={{ width: "300px", height: "200px", align: "left" }}
      />
      <img
        src="https://www.cnet.com/a/img/resize/9ec8ad1bd07e04e64ae026ca9ef882e1876b026d/hub/2020/10/07/051be42e-a520-4d1a-868b-16454bdec9f8/ogi1-2020-mercedes-amg-g63-018.jpg?auto=webp&fit=crop&height=900&width=1200"
        style={{ width: "300px", height: "200px", align: "left" }}
      />
    </div>
  );
}

export default App;
