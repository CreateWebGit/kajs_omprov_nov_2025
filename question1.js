// Fråga 1.  (4p) 
// Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Använd fetch och async/await, samt felhantering medd try/catch. 
// Använd valfri metod för att begränsa antalet todo-objekt till 20 (utan att ändra i url).
// Använd filter för att filtrera ut de  todo-objekten som har completed: true. 
// Rendera ut vardera objekts 'title' i ul-elementet med id "todoList"


// Din kod här:
const URL = "https://jsonplaceholder.typicode.com/todos/";

async function loadTodos() {
  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const todos = await res.json();

    //max 20
    const done = todos.slice(0, 20).filter((t) => t.completed === true);

    //rendera
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    //rendera bullet points
    done.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t.title;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("error fetching todos:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadTodos);


// Test
// En renderad ul-lista ska visas i index.html enligt följande:
// ‧ et porro tempora
// ‧ quo adipisci enim quam ut ab
// ‧ illo est ratione doloremque quia maiores aut
// ‧ vero rerum temporibus dolor
// ‧ ipsa repellendus fugit nisi
// ‧ repellendus sunt dolores architecto voluptatum
// ‧ ab voluptatum amet voluptas
// ‧ accusamus eos facilis sint et aut voluptatem
// ‧ quo laboriosam deleniti aut qui
// ‧ molestiae ipsa aut voluptatibus pariatur dolor nihil
// ‧ ullam nobis libero sapiente ad optio sint
