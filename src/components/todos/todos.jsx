import axios from "axios";
import React, { useEffect, useState } from "react";
import prev from "@img/prev.svg";
import next from "@img/next.svg";
import Rolling from "@img/rolling.svg";

const Users = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [editingTitle, setEditingTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

      useEffect(() => {
          setLoading(true);
          axios
              .get(
                  `https://jsonplaceholder.typicode.com/photos?&_page=${currentPage}`
              )
              .then((response) => {
                  setTodos(response.data);
                  setLoading(false);
              })
              .catch((err) => {
                  console.log(err);
                  setLoading(false);
              });
      }, [currentPage]);

          const handlePreviousPage = () => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
          };

          const handleNextPage = () => {
              setCurrentPage((prev) => prev + 1);
          };

          if (loading) {
              return (
                  <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                      <img src={Rolling} alt="Loading..." />
                  </h3>
              );
          }

    const deleteTodo = (id) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => {
                setTodos(todos.filter((todo) => todo.id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const startEditing = (id, currentTitle) => {
        setEditingId(id);
        setEditingTitle(currentTitle);
    };

    const saveEdit = (id) => {
        axios
            .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                title: editingTitle,
                completed: todos.find((todo) => todo.id === id).completed,
            })
            .then((response) => {
                setTodos(
                    todos.map((todo) => (todo.id === id ? response.data : todo))
                );
                setEditingId(null);
                setEditingTitle("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (loading) {
        return (
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                <img src={Rolling} alt="Loading..." />
            </h3>
        );
    }

    return (
        <div className="todos">
            <table className="table table-bordered table-hover table-striped overflow-x-auto table-primary">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                {editingId === item.id ? (
                                    <input
                                        className="form-control w-50"
                                        type="text"
                                        value={editingTitle}
                                        onChange={(e) =>
                                            setEditingTitle(e.target.value)
                                        }
                                    />
                                ) : (
                                    item.title
                                )}
                            </td>
                            <td>{item.completed ? "Yes" : "No"}</td>
                            <td>
                                {editingId === item.id ? (
                                    <button
                                        type="submit"
                                        className="btn btn-success mx-1"
                                        onClick={() => saveEdit(item.id)}>
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-info mx-1"
                                        onClick={() =>
                                            startEditing(item.id, item.title)
                                        }>
                                        Edit
                                    </button>
                                )}
                                <button
                                    className="btn btn-danger mx-1"
                                    onClick={() => deleteTodo(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="card-footer d-flex justify-content-center pt-2">
                <button
                    onClick={handlePreviousPage}
                    className="btn btn-primary"
                    disabled={currentPage === 1}>
                    <img src={prev} alt="prev icon" />
                </button>
                <span className="btn btn-info mx-2">Page {currentPage}</span>
                <button onClick={handleNextPage} className="btn btn-primary">
                    <img src={next} alt="next icon" />
                </button>
            </div>
        </div>
    );
};

export default Users;