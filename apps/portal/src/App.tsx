function Playground() {
  return (
    <div style={{ padding: "2rem", display: "grid", gap: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <section>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>
          Esto es un párrafo con <strong>texto en negrita</strong>, <em>itálica</em> y{" "}
          <a href="#">un enlace</a>.
        </p>
      </section>

      <section>
        <h2>Form elements</h2>
        <form style={{ display: "grid", gap: "1rem" }}>
          <label>
            Text input:
            <input type="text" placeholder="Escribe aquí..." />
          </label>

          <label>
            Password:
            <input type="password" placeholder="Contraseña" />
          </label>

          <label>
            Email:
            <input type="email" placeholder="correo@ejemplo.com" />
          </label>

          <label>
            Search:
            <input type="search" placeholder="Buscar..." />
          </label>

          <label>
            Number:
            <input type="number" placeholder="123" />
          </label>

          <label>
            Tel:
            <input type="tel" placeholder="+57 300 000 0000" />
          </label>

          <label>
            URL:
            <input type="url" placeholder="https://example.com" />
          </label>

          <label>
            Checkbox:
            <input type="checkbox" /> Acepto términos
          </label>

          <label>
            Radio:
            <input type="radio" name="radio" /> Opción A
          </label>
          <label>
            <input type="radio" name="radio" /> Opción B
          </label>

          <label>
            Select:
            <select>
              <option>Opción 1</option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
          </label>

          <label>
            Textarea:
            <textarea placeholder="Escribe un mensaje..."></textarea>
          </label>

          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </section>

      <section>
        <h2>Lists</h2>
        <ul>
          <li>Elemento de lista UL 1</li>
          <li>Elemento de lista UL 2</li>
          <li>Elemento de lista UL 3</li>
        </ul>
        <ol>
          <li>Elemento de lista OL 1</li>
          <li>Elemento de lista OL 2</li>
          <li>Elemento de lista OL 3</li>
        </ol>
      </section>

      <section>
        <h2>Table</h2>
        <table border={1} cellPadding={6}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ana</td>
              <td>25</td>
              <td>Bogotá</td>
            </tr>
            <tr>
              <td>Juan</td>
              <td>30</td>
              <td>Medellín</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Media</h2>
        <img src="https://placekitten.com/300/200" alt="Gatito" />
        <picture>
          <source srcSet="https://placekitten.com/400/200" media="(min-width: 768px)" />
          <img src="https://placekitten.com/200/200" alt="Kitten responsive" />
        </picture>
        <video width="320" height="240" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>
      </section>

      <section>
        <h2>Details / Summary</h2>
        <details>
          <summary>Haz click para ver más</summary>
          <p>Contenido dentro del elemento details.</p>
        </details>
      </section>
    </div>
  );
}

function App() {
  return <Playground />;

}

export default App
