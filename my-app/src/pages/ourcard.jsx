

function ourcard() {
  return (
    <div className="home">
      {our.map((our, index) => (
        <div key={index} className="tour-card">
          <img src="https://th.wallhaven.cc/lg/2y/2yp6gg.jpg" alt=""/>
          <h3>{tour.title}</h3>
          <p>{tour.description}</p>
        </div>
      ))}
    </div>
  );
}
data
export default ourcard;
