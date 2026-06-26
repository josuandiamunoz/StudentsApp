
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
            setStudents(response.data.data);
        }
        catch (error) {
            setError("Could not load students: " + error.message);
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
            <Button onClick={loadStudents} text={loading ? 'Loading...' : 'Reload'} />
            {error && <p style={{ color: "red" }}>{error}</p>}
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Students;