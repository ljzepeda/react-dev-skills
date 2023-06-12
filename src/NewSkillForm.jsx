import { useState } from 'react';
import './NewSkillForm.css';

export default function NewSkillForm({ addSkill }) {
    const [newSkill, setNewSkill] = useState({
        'name': '',
        'level': '3'
    })

    function handleAddSkill(e) {
        e.preventDefault();
        addSkill(newSkill);
        setNewSkill({
            name: '',
            level: '3'

        })

    }

    function handleChangeSkill(e) {
        setNewSkill({
            ...newSkill,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="NewSkillForm" onSubmit={handleAddSkill}>
            Skill:<input type="text" name="name"
                value={newSkill.name}
                onChange={handleChangeSkill}
                required
                pattern='.{4,}'
            />
            Level:
            <select
                name="level"
                value={newSkill.level}
                onChange={handleChangeSkill}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
    );
}