import React, {useState} from 'react'

const PirateFormModal = () => {

    const [formData, setFormData] = useState({
        name: '',
        epithet: '',
        age: '',
        combatStyle: '',
        role: '',
        bounty: '',
        image: '',
        // Crew and rank fields are not included for now
      });
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // Example: await fetch('/api/pirates', { method: 'POST', body: JSON.stringify(formData) });

    console.log('Pirate Data Submitted:', formData);
    // Reset form or provide feedback
    setFormData({
        name: '',
        epithet: '',
        age: '',
        combatStyle: '',
        role: '',
        bounty: '',
        image: '',
    });
    };

    const combatStyles = [
        'Hand to Hand',
        'Swordsman',
        'Sniper',
        'Support',
        'Healer',
      ];
    
      const roles = [
        'Navigator',
        'Cook',
        'Lookout',
        'Helmsman',
        'Crew Leader',
        'Shipwright',
        'Doctor',
        'Boatswain',
      ];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <form
                onSubmit={handleSubmit}
                className="max-w-md w-full p-4 bg-gray-200 rounded shadow-2xl"
            >
                <h2 className="text-lg font-bold mb-4">Create a Pirate</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="epithet" className="block text-sm font-medium mb-1">Epithet:</label>
                    <input
                        type="text"
                        id="epithet"
                        name="epithet"
                        value={formData.epithet}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium mb-1">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="combatStyle" className="block text-sm font-medium mb-1">Combat Style:</label>
                    <select
                        id="combatStyle"
                        name="combatStyle"
                        value={formData.combatStyle}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    >
                        <option value="">Select Combat Style</option>
                        {combatStyles.map((style) => (
                            <option key={style} value={style}>{style}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium mb-1">Role:</label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    >
                        <option value="">Select Role</option>
                        {roles.map((role) => (
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="bounty" className="block text-sm font-medium mb-1">Bounty:</label>
                    <input
                        type="number"
                        id="bounty"
                        name="bounty"
                        value={formData.bounty}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium mb-1">Image URL:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Create Pirate
                </button>
            </form>
        </div>
    );
}

export default PirateFormModal