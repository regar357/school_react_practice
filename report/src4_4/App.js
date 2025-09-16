import Datas from "./components/Datas";
import Book from "./components/Book";

function App() {
  return (
    <section className="booklist">
      {Datas.map((data) => (
        <Book key={data.id} data={data} />
      ))}
    </section>
  );
}

export default App;
