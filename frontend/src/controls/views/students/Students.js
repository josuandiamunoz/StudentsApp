
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../common/button/Button";

function Students() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const loadStudents = async () => {
        try{
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:3001/students", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if(response.data.success) setStudents(response.data.data);
            else throw new Error("Error loading students. " + response.data.message);
        }
        catch (error) {
            setError("Could not load students: " + error.message);
        }
        finally{
            setLoading(false);
        }
    };

    const deleteStudent = async (id) => {
        try{
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");
            const response = await axios.delete(`http://localhost:3001/students/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if(response.data.success) setStudents((prev) => prev.filter((s) => s.Identifier !== id));
            else throw new Error("Error deleting student : " + response.data.message);
        }
        catch (error) {
            setError("Could not delete student: " + error.message);
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        loadStudents();
    }, []);
    
    return (
        <div>
            <h1>Students list</h1>
            <Button onClick={loadStudents} text={loading ? 'Loading...' : 'Reload'} enabled={!loading} />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {students.length === 0 ? (
                    <p>No students found.</p>
                ) : (
                   <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.Identifier}>
                                    <td>{student.Identifier}</td>
                                    <td>{student.Email}</td>
                                    <td>
                                        <Button onClick={() => deleteStudent(student.Identifier)} text="Delete" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }

        </div>
    );
}

export default Students;